<script lang="ts">
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
  let scroll: string = '';
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadVisible = ''
    }, 3750);
  })

  function scrollDirection(){
    if (y > yPrev){ 
      yPrev = y > 0 ? y : 0
      scroll = ' transform ease-in-out duration-500 -translate-y-full'
      return;
    }
    else{
      yPrev = y > 0 ? y : 0 
      scroll = ' transform ease-in-out duration-500 translate-y-0'
      return;
    }
  }
</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={scrollDirection}/>
<Nav scroll={scroll} />
<Intro />

<div class={'page'+ onLoadVisible}>
  <About />
  <Projects />
  <Contact />
</div>