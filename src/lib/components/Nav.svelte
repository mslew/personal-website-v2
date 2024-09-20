<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing'
    import Logo from './icons/Logo.svelte';
    import ThemeSwitch from './ThemeSwitch.svelte';
	let visible = false;
    export let scroll: string;
    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 3000) 
    });
</script>

{#if visible}
<div in:fly="{{ y: -20, duration: 500 }}" class={"flex flex-row -md:hidden z-50 dark:bg-gray-900 bg-slate-300 border-b border-purple-600 pb-3 shadow-lg overflow-x-hidden fixed w-full" + scroll} out:fly="{{ y: -100, duration: 1000 }}">
    <a class="mt-3" href="#intro"><Logo /></a>
    <div class="flex gap-4 flex-row justify-items-center pt-4 overflow-x-hidden wide:landscape:gap-8 z-50 flex-shrink-0">
        <a transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 250 }}" class="link" href="#about"><span class="num">00</span><span class="link-text">About</span></a>
        <a transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 350 }}" class="link" href="#projects"><span class="num">01</span><span class="link-text">Projects</span></a>
        <a transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 450 }}" class="link" href="#contact"><span class="num">02</span><span class="link-text">Contact</span></a>
        <a transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 550 }}" class="link" href="https://blog.maxlewis.dev" rel="noreferrer" aria-label="Blog" title="Blog" 
        target="_blank"><span class="num">03</span><span class="link-text">Blog</span></a>
        <div class="block relative rounded-lg transition ease-in-out dark:hover:bg-purple-900 hover:bg-purple-600 duration-300 delay-150">
            <a href="content/Resume.pdf" target="_blank">
                <div transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 650 }}" class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 duration-300 delay-150">Resume</div>
            </a>
        </div>
        <div class="" transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 750 }}"><ThemeSwitch /></div>
    </div>
</div>
<div transition:fly="{{ y: -20, duration: 500 }}" class="md:hidden z-50 dark:bg-gray-900 bg-slate-300 border-b border-purple-600 grid grid-cols-4 grid-rows-2 justify-items-center place-items-center fixed w-full shadow-lg">
    <div class="block relative rounded-lg transition ease-in-out dark:hover:bg-purple-900 hover:bg-purple-600 duration-300 delay-150">
        <a href="content/Resume.pdf" target="_blank">
            <div transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 250 }}" class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 duration-300 delay-150">Resume</div>
        </a>
    </div>
    <div class="mt-2 mb-2 col-span-2">
        <Logo />
    </div>
    <div transition:fly="{{ y: -20, duration: 500, easing: quintInOut, delay: 350 }}" class="flex flex-row gap-2">
        <ThemeSwitch />
    </div>
    <a transition:fly="{{ y: 10, duration: 500, easing: quintInOut, delay: 450 }}" class="flex flex-col" href="#about">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">00</span><span class="sm-link-text">About</span></div>
    </a>
    <a transition:fly="{{ y: 10, duration: 500, easing: quintInOut, delay: 550 }}" class="flex flex-col" href="#projects">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">01</span><span class="sm-link-text">Projects</span></div>
    </a>
    <a transition:fly="{{ y: 10, duration: 500, easing: quintInOut, delay: 650 }}" class="flex flex-col" href="#contact">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">02</span><span class="sm-link-text">Contact</span></div>
    </a>
    <a transition:fly="{{ y: 10, duration: 500, easing: quintInOut, delay: 750 }}" class="flex flex-col" href="https://blog.maxlewis.dev" rel="noreferrer" aria-label="Blog" title="Blog" target="_blank">
        <svg class="dark:fill-purple-900 fill-purple-600" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
        <div class="flex flex-row gap-1 mt-1 place-items-center"><span class="sm-num">03</span><span class="sm-link-text">Blog</span></div>
    </a>
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