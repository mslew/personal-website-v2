<script lang="ts">
  import LogoAnim from "@components/LogoAnim.svelte";
  import Intro from '@sections/Intro.svelte';
  import About from '@sections/About.svelte';
  import Projects from '@sections/Projects.svelte';
  import Contact from '@sections/Contact.svelte'; 
  import Nav from '@components/Nav.svelte'
  import SideBars from "@components/SideBars.svelte";
  import { ScrollRevealOptions } from './config';
  import ScrollReveal from 'scrollreveal';
  import { onMount } from 'svelte';
  let onLoadInvisible: boolean = $state(true);
  let y: number | undefined = $state();
  let yPrev: number;
  let scroll: boolean | undefined = $state();
  let disableScroll: boolean = $state(false);
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadInvisible = false
    }, 3750);
  })

  function scrollDirection(){
    if (!y) return;
    if (y > yPrev){ 
      yPrev = y > 0 ? y : 0
      scroll = true
      return;
    }
    else{
      yPrev = y > 0 ? y : 0 
      scroll = false
      return;
    }
  }

</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<svelte:window bind:scrollY={y} onscroll={scrollDirection}/>
<Nav bind:disableScroll={disableScroll} scroll={scroll} />

<LogoAnim />

<main class:load-invisible={onLoadInvisible}
      class:blur={disableScroll}>
  <Intro />
  <About />
  <Projects />
  <Contact />
</main>

<SideBars />

<style lang="postcss">
  .blur{
    @apply -md:blur-sm md:blur-0 
  }

  .load-invisible{
    @apply hidden
  }
</style>