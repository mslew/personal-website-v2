<script lang="ts">
    import GitHub from './icons/GitHub.svelte';
    import LinkedIn from './icons/LinkedIn.svelte';
    import Handshake from './icons/Handshake.svelte';
    import Instagram from './icons/Instagram.svelte';
</script>

<div class="flex flex-col items-center ml-16 wide:landscape:ml-4">
    <a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub class="wide:landscape:h-6" height={30}/></a>
    <a class="item" href = "https://www.linkedin.com/in/maximuslewis/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn class="wide:landscape:h-6" height={30}/></a>
    <a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake class="wide:landscape:h-6" height={30}/></a>
    <a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram class="wide:landscape:h-6" height={30}/></a>
    <div class="border dark:border-white pb-14 mt-2 border-black wide:landscape:pb-20"></div>
</div>

<style lang="postcss">
    .item{
        @apply dark:hover:fill-purple-900 pb-3 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>