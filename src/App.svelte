<script lang="ts">
  import Intro from '@sections/Intro.svelte';
  import About from '@sections/About.svelte';
  import Projects from '@sections/Projects.svelte';
  import Contact from '@sections/Contact.svelte'; 
  import Nav from '@components/Nav.svelte'
  import { ScrollRevealOptions } from './config';
  import ScrollReveal from 'scrollreveal';
  ScrollReveal().reveal(".reveal", ScrollRevealOptions);

</script>

<svelte:head>
  <link rel="icon" type="image/svg" sizes="any" href="public/logo.ico" />
</svelte:head>

<Nav />
<Intro />
<About />
<Projects />
<Contact />