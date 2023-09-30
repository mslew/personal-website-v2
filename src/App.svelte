<script lang="ts">
  import Intro from '@sections/Intro.svelte';
  import About from '@sections/About.svelte';
  import Projects from '@sections/Projects.svelte';
  import Contact from '@sections/Contact.svelte'; 
  import Nav from '@components/Nav.svelte'
  import { ScrollRevealOptions } from './config';
  import ScrollReveal from 'scrollreveal';
  import { onMount } from 'svelte';
  onMount(() => {
    ScrollReveal().reveal(".reveal", ScrollRevealOptions);
  })

</script>

<Nav />
<Intro />
<About />
<Projects />
<Contact />