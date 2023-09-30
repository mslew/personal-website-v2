<script lang="ts">
    import { onMount } from 'svelte';
    import BottomSocials from '../components/BottomSocials.svelte';
    import ScrollReveal from 'scrollreveal'
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
        let options = {
            show: 50, 
            threshold: 100,
            opacity: 0,
            duration: 2000,
            delay: 500,
        }
        ScrollReveal().reveal(".reveal", options);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section class="reveal h-full w-full grid justify-items-center" id="contact">
    <div class="reveal flex flex-row items-center gap-4 mb-8 mt-8">
        <p class="text-3xl dark:text-purple-900 p-1 object-bottom text-purple-600 -lg:text-xl -md:text-xl">03.</p>
        <p class="text-2xl -lg:text-lg">Contact</p>
        <div class="border dark:border-white border-black ml-2 pr-72 -xl:pr-40 -lg:pr-36 -sm:pr-32"></div>
    </div>
    <div class="reveal grid justify-items-center w-1/4 gap-8 -2xl:w-1/3 -lg:w-1/2">
        <p class="text-center">
            I am looking for full time software engineering opportunities.  
            If you are interested, do not hesitate to contact me!
        </p>
        <div class="block relative rounded-lg transition ease-in-out dark:hover:bg-purple-900 hover:bg-purple-600 duration-300 delay-150 mb-20 z-0">
            <a class="mb-20 z-0 wide:landscape:mb-12" href="mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email">
                <div class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 duration-300 delay-150">Contact</div>
            </a>
        </div>
    </div>
    <div class="md:hidden">
        <BottomSocials />
    </div>
    <div class="z-0 mb-6">
        <a class=" dark:hover:text-purple-900 hover:text-purple-600 group" href="https://github.com/mslew/personal-website-v2" 
        target="_blank" rel="noreferrer" aria-label="Repo" title="Repo">
            Designed and Built by Maximus Lewis
            <span class="underline-hover"></span> 
        </a>
    </div>
</section>
{/if}

<style>
</style>