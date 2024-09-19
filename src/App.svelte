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
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadVisible = ''
    }, 3750);
  })

  function calculateY(){
    yPrev = y
  }
</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={calculateY}/>

<Nav />
<Intro />

<div class={'page'+ onLoadVisible}>
  <About />
  <Projects />
  <Contact />
</div>