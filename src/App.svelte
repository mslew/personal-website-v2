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
  onMount(() => {
    setTimeout(() => ScrollReveal().reveal(".reveal", ScrollRevealOptions), 4000);
    setTimeout(makeVisible, 4000);
  })

  function makeVisible(){
        onLoadVisible = '';
    }

</script>

<Nav />
<Intro />

<div class={'page'+ onLoadVisible}>
  <About />
  <Projects />
  <Contact />
</div>