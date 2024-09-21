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
</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={scrollDirection}/>
<Nav scroll={scroll} />

<LogoAnim />

<main class={'page'+ onLoadVisible}>
  <Intro />
  <About />
  <Projects />
  <Contact />
</main>