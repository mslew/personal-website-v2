<script lang="ts">
  import Intro from '@sections/Intro.svelte';
  import About from '@sections/About.svelte';
  import Projects from '@sections/Projects.svelte';
  import Contact from '@sections/Contact.svelte'; 
  import Nav from '@components/Nav.svelte'
  import { ScrollRevealOptions } from './config';
  import ScrollReveal from 'scrollreveal';
  import { onMount } from 'svelte';
  let onLoadVisible: string = ' '; //change this back hehe
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 3750); //this is important to run on 3750ms.
    setTimeout(() => {
      onLoadVisible = ''
    }, 0); //3750
  })
</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="favicon.ico" />
</svelte:head>

<!--<Nav />-->
<!--<Intro />-->

<div class={'page'+ onLoadVisible}>
  <About />
  <Projects />
  <Contact />
</div>