<script lang="ts">
    import { onMount } from 'svelte';
    import BottomSocials from '../components/BottomSocials.svelte';
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section class="h-full w-full grid justify-items-center" id="contact">
    <div class="flex flex-row items-center gap-4 mb-8 mt-8">
        <p class="text-3xl dark:text-purple-900 p-1 object-bottom text-purple-600 -lg:text-xl -md:text-xl">03.</p>
        <p class="text-2xl -lg:text-lg">Contact</p>
        <div class="border dark:border-white border-black ml-2 pr-72 -xl:pr-40 -lg:pr-36 -sm:pr-32"></div>
    </div>
    <div class="grid justify-items-center w-1/4 gap-8 wide:landscape:w-1/2 tall:portrait:w-3/4">
        <p class="text-center">
            I am looking for full time software engineering opportunities.  
            If you are interested, do not hesitate to contact me!
        </p>
        <a href="mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email"><button class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black">Contact</button></a>
    </div>
    <div class="">
        <div class="md:hidden wide:landscape:hidden">
            <BottomSocials />
        </div>
        <div class="">
            <a href="https://github.com/mslew/personal-website-v2" target="_blank" rel="noreferrer" aria-label="Repo" title="Repo"><p class="credits">Designed and Built by Maximus Lewis</p></a>
        </div>
    </div>
</section>
{/if}

<style>
</style>