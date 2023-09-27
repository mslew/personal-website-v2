<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import LinkedIn from "./icons/LinkedIn.svelte";
    import Handshake from "./icons/Handshake.svelte";
    import Instagram from "./icons/Instagram.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    let visible = true;
    onMount(() => {
        setTimeout(raiseBar, 6750);
    });

    function raiseBar(){
        visible = true;
    }
</script>

{#if visible}
<div transition:fly="{{ y: 100, duration: 200 }}" class="lg:hidden fixed bottom-0 h-1/6 w-full border-t border-purple-600 grid grid-cols-6 grid-rows-2 justify-items-center place-items-center shadow-lg">
    <div>
        <div class="border dark:border-white pr-32 ml-4 border-black -md:pr-16"></div>
    </div>
    <div>
        <a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub class="icon" height={30}/></a>
    </div>
    <div>
        <a class="item" href = "https://www.linkedin.com/in/maximuslewis/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn class="icon" height={30}/></a> 
    </div>
    <div>
        <a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake class="icon" height={30}/></a>
    </div>
    <div>
        <a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram class="icon" height={30}/></a>
    </div>
    <div>
        <div class="border dark:border-white pr-32 mr-4 border-black -md:pr-16"></div>
    </div>
    <div class="col-span-2">
        <div class="border dark:border-white pr-72 ml-10 border-black -md:pr-52 -sm:pr-14"></div>
    </div>
    <div class="col-span-2">
        <a class="email mr-2 ml-2 -sm:pl-2" href = "mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email">mlew3223@gmail.com</a>
    </div>
    <div class="col-span-2">
        <div class="flex border dark:border-white pr-72 mr-10 border-black -md:pr-52 -sm:pr-14"></div>
    </div>
</div>
{/if}

<style lang="postcss">
    .email{
        @apply dark:hover:text-purple-900 hover:text-purple-600 dark:text-white text-black
    }
    .item{
        @apply dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black
    }
</style>