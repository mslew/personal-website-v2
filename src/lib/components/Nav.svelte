<script lang="ts">
    import { onMount } from 'svelte';
    import { fly} from 'svelte/transition';
    import Logo from './icons/Logo.svelte';
    import ThemeSwitch from './ThemeSwitch.svelte';
	let visible = true; //change this back dog
    let link1 = true;
    let link2 = true;
    let link3 = true;
    let link4 = true;
    let button = true;
    let i = 0; 
    onMount(() => {
        setTimeout(flyDown, 4000) //4000
        setTimeout(dropLinks, 4500) //4500
    });

    function flyDown (){
        visible = true
    }

    function dropLinks() {         
    setTimeout(function() {                      
        if (i < 5) { 
            if(!link1 && i === 0){
                link1 = true
            } 
            else if(!link2 && i === 1){
                link2 = true
            }  
            else if(!link3 && i === 2){
                link3 = true
            } 
            else if(!link4 && i === 3){
                link4 = true
            } 
            else if(!button && i === 4){
                button = true
            } 
            i++;
        dropLinks();              
        }                      
    }, 200)
    }
</script>
  
{#if visible}
<div in:fly="{{ y: -100, duration: 1000 }}" class="flex tall:portrait:hidden z-50 dark:bg-gray-900 bg-slate-300 border-b border-purple-600 pb-3 shadow-lg overflow-x-hidden fixed w-full" out:fly="{{ y: -100, duration: 1000 }}">
    <a class="mt-3" href="/"><Logo /></a>
    <div class="flex gap-14 flex-row justify-items-center mt-4 -sm:hidden overflow-x-hidden wide:landscape:gap-8">
        {#if link1}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="link" href="#intro"><span class="num">00</span><span class="link-text">Intro</span></a>
        {/if}
        {#if link2}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="link" href="#about"><span class="num">01</span><span class="link-text">About</span></a>
        {/if}
        {#if link3}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="link" href="#projects"><span class="num">02</span><span class="link-text">Projects</span></a>
        {/if}
        {#if link4}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="link" href="#contact"><span class="num">03</span><span class="link-text">Contact</span></a>
        {/if}
        {#if button}
        <a href="content/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black">Resume</button></a>
        <div class="mr-4 " transition:fly="{{ y: -100, duration: 250 }}"><ThemeSwitch /></div>
        {/if}
    </div>
</div>
<div transition:fly="{{ y: -100, duration: 1000 }}" class="lg:hidden wide:landscape:hidden z-50 dark:bg-gray-900 bg-slate-300 border-b border-purple-600 grid grid-cols-4 grid-rows-2 justify-items-center place-items-center fixed w-full shadow-lg">
    {#if link1}
    <div transition:fly="{{ y: -100, duration: 250 }}">
        <a href="content/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="border p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black">Resume</button></a>
    </div>
    <div transition:fly="{{ y: -100, duration: 250 }}" class="mt-2 mb-2 col-span-2">
        <Logo />
    </div>
    <div transition:fly="{{ y: -100, duration: 250 }}" class="flex flex-row gap-2">
        <ThemeSwitch />
    </div>
    {/if}
    {#if link2}
    <a transition:fly="{{ y: 100, duration: 250 }}" class="flex flex-col" href="#intro">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">00</span><span class="sm-link-text">Intro</span></div>
    </a>
    <a transition:fly="{{ y: 100, duration: 250 }}" class="flex flex-col" href="#About">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">01</span><span class="sm-link-text">About</span></div>
    </a>
    <a transition:fly="{{ y: 100, duration: 250 }}" class="flex flex-col" href="#Projects">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">02</span><span class="sm-link-text">Projects</span></div>
    </a>
    <a transition:fly="{{ y: 100, duration: 250 }}" class="flex flex-col" href="#Contact">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">03</span><span class="sm-link-text">Contact</span></div>
    </a>
    {/if}
</div>
{/if}

<style lang="postcss">
    .link{
        @apply flex flex-auto flex-shrink overflow-x-hidden bg-transparent dark:hover:text-purple-900 hover:text-purple-600 w-min  
    }
    .num{
        @apply text-2xl dark:text-purple-900 p-1 object-bottom text-purple-600 
    }
    .sm-num{
        @apply text-sm dark:text-purple-900 text-purple-600
    }
    .sm-link-text{
        @apply text-xs 
    }
    .link-text{
        @apply bg-transparent mt-2
    }
</style>