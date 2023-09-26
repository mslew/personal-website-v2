<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import GitHub from './icons/GitHub.svelte';
    import LinkedIn from './icons/LinkedIn.svelte';
    import Handshake from './icons/Handshake.svelte';
    import Instagram from './icons/Instagram.svelte';
    let visible = true;

    onMount(() => {
        setTimeout(raiseBar, 6750);
    });

    function raiseBar(){
        visible = true;
    }
</script>

{#if visible}
<div transition:fly="{{ y: 100, duration: 200 }}" class="fixed flex flex-col items-center">
    <a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub class="icon" height={30}/></a>
    <a class="item" href = "https://www.linkedin.com/in/maximuslewis/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn class="icon" height={30}/></a>
    <a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake class="icon" height={30}/></a>
    <a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram class="icon" height={30}/></a>
    <div class="border border-white pb-10 mt-2"></div>
</div>
{/if}

<style lang="postcss">
    .item{
        @apply dark:hover:fill-purple-900 p-2 hover:fill-purple-600 fill-white
    }
</style>