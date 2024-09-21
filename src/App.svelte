<script lang="ts">
  import LogoAnim from "@components/LogoAnim.svelte";
  import Intro from '@sections/Intro.svelte';
  import About from '@sections/About.svelte';
  import Projects from '@sections/Projects.svelte';
  import Contact from '@sections/Contact.svelte'; 
  import Nav from '@components/Nav.svelte'
  import { ScrollRevealOptions } from './config';
  import ScrollReveal from 'scrollreveal';
  import { onMount } from 'svelte';
  let onLoadVisible: string = ' hidden';
  let y: number;
  let yPrev: number;
  let scroll: boolean;
  let disableScroll: boolean = false;
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadVisible = ''
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

<main class:blur={disableScroll} class:no-blur={!disableScroll} class={'page'+ onLoadVisible}>
  <Intro />
  <About />
  <Projects />
  <Contact />
</main>

<style lang="postcss">
  .blur{
    @apply blur-sm
  }

  .no-blur{
    @apply blur-0
  }
</style>