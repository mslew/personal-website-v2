<script lang="ts">
  import Intro from './lib/sections/Intro.svelte';
  import About from './lib/sections/About.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Contact from './lib/sections/Contact.svelte'; 
  import Nav from './lib/components/Nav.svelte'
</script>

<Nav />
<Intro />
<About />
<Projects />
<Contact />

<style lang="scss">
  @import './scss/variables.scss';
  @import './scss/fonts.scss';
  :global(body){
    background-color: $background;
    font-family: $font-regular;
  }
</style>