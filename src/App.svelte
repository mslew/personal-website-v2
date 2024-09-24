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
  let onLoadInvisible: boolean = true;
  let y: number;
  let yPrev: number;
  let scroll: boolean;
  let disableScroll: boolean = false;
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadInvisible = false
    }, 3750);
  })

  function scrollDirection(){
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

  function handleBlur(event){
    disableScroll = event.detail.value
  }
</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={scrollDirection}/>
<Nav on:disableScroll={handleBlur} scroll={scroll} disableScroll={disableScroll} />

<LogoAnim />

<main class:load-invisible={onLoadInvisible}
      class:blur={disableScroll} 
      class:no-blur={!disableScroll}>
  <Intro />
  <About />
  <Projects />
  <Contact />
</main>

<SideBars />

<style lang="postcss">
  .blur{
    @apply blur-sm
  }

  .no-blur{
    @apply blur-0
  }

  .load-invisible{
    @apply hidden
  }
</style>