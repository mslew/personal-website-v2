<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import LinkedIn from "./icons/LinkedIn.svelte";
    import Handshake from "./icons/Handshake.svelte";
    import Instagram from "./icons/Instagram.svelte";
</script>

<div class="flex flex-row items-center gap-4 mb-4">
    <div class="border dark:border-white border-black ml-2 -md:pr-12"></div>
    <a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub class="icon" height={30}/></a>
    <a class="item" href = "https://www.linkedin.com/in/maximus-lewis-50ba47203/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn class="icon" height={30}/></a>
    <a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake class="icon" height={30}/></a>
    <a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram class="icon" height={30}/></a>
    <div class="border dark:border-white border-black mr-2 -md:pr-12 "></div>
</div>

<style lang="postcss">
    .item{
        @apply dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>