<script lang="ts">
  import Intro from './lib/sections/Intro.svelte';
  import About from './lib/sections/About.svelte';
  import Portfolio from './lib/sections/Portfolio.svelte';
  import Contact from './lib/sections/Contact.svelte';
</script>

<Intro />
<About />
<Portfolio />
<Contact />

<style lang="scss">
  @import './variables.scss';
  :global(body){
    background-color: $background;
  }
</style>