<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing'
    import { fade } from 'svelte/transition';
    import Logo from './icons/Logo.svelte';
    import ThemeSwitch from './ThemeSwitch.svelte';
    import External from './icons/External.svelte';
	let visible: boolean = $state(false);
    let toggleSide: boolean = $state(false); //change this back to false
    interface Props {
        scroll: boolean;
        disableScroll: boolean;
    }

    let { scroll, disableScroll = $bindable(false) }: Props = $props();
    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 3000) //3000
    });

    function handleClickOutside(){ 
        document.documentElement.classList.remove('-md:overflow-hidden')
        toggleSide = !toggleSide
        disableScroll = !disableScroll
    }

    function toggleSideMenu(){
        disableScrollCheck()
        toggleSide = !toggleSide
    }

    function disableScrollCheck(){
        disableScroll = !disableScroll
        if(disableScroll){
            document.documentElement.classList.add('-md:overflow-hidden')
        }else{
            document.documentElement.classList.remove('-md:overflow-hidden')
        }
    }
</script>

{#if visible}
<div class:scroll-collapse={scroll} class:scroll-regular={!scroll} in:fly|global="{{ y: -20, duration: 500 }}" class="flex flex-row -md:hidden z-50 dark:bg-gray-900 bg-slate-300 border-b border-purple-600 pb-3 shadow-lg overflow-x-hidden fixed w-full" out:fly|global="{{ y: -100, duration: 1000 }}">
    <a class="mt-3" href="#intro"><Logo /></a>
    <div class="flex gap-4 flex-row justify-items-center pt-4 overflow-x-hidden wide:landscape:gap-8 z-50 flex-shrink-0">
        <a transition:fly|global="{{ y: -20, duration: 500, easing: quintInOut, delay: 250 }}" class="link" href="#about"><span class="num">00</span><span class="link-text">About</span></a>
        <a transition:fly|global="{{ y: -20, duration: 500, easing: quintInOut, delay: 350 }}" class="link" href="#projects"><span class="num">01</span><span class="link-text">Projects</span></a>
        <a transition:fly|global="{{ y: -20, duration: 500, easing: quintInOut, delay: 450 }}" class="link" href="#contact"><span class="num">02</span><span class="link-text">Contact</span></a>
        <div class="block relative rounded-lg transition ease-in-out dark:hover:bg-purple-900 hover:bg-purple-600 duration-300 delay-150">
            <a href="content/Resume.pdf" target="_blank">
                <div transition:fly|global="{{ y: -20, duration: 500, easing: quintInOut, delay: 650 }}" class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 duration-300 delay-150">Resume</div>
            </a>
        </div>
        <div class="" transition:fly|global="{{ y: -20, duration: 500, easing: quintInOut, delay: 750 }}"><ThemeSwitch /></div>
    </div>
</div>

<div in:fade|global="{{duration: 750}}" class:scroll-collapse={scroll} class:scroll-regular={!scroll} class="md:hidden z-30 dark:bg-gray-900 bg-slate-300 border-purple-600 flex flex-row justify-between place-items-center fixed w-full shadow-lg">
    <a class="mt-3 mb-3" href="#intro"><Logo /></a>
</div>
<button in:fade|global="{{duration: 750}}" class:button-collapse={scroll} class:button-regular={!scroll} aria-label="Toggle Side Menu"
        class="md:hidden z-50 mr-10 h-12 w-12 flex flex-col justify-center items-center fixed right-2" 
        onclick={toggleSideMenu}>
    <div class="flex flex-col items-start gap-2 border-2 p-2 border-purple-600 dark:border-purple-900 rounded-lg">
        <div
            class:first-line-open={toggleSide} 
            class="border-2 w-10 border-purple-600 dark:border-purple-900 rounded-full transition ease-in transform duration-300"></div>
        <div class:second-line-not-open={!toggleSide} 
            class:second-line-open={toggleSide} 
            class="border-2 w-8 border-purple-600 dark:border-purple-900 rounded-full transition ease-in transform duration-300"></div>
        <div class="relative mb-1">
            <div class:third-line-not-open={!toggleSide} 
            class:third-line-open={toggleSide} 
            class="absolute w-6 border-2 border-purple-600 dark:border-purple-900 rounded-full transition ease-in transform duration-300"></div>
            <div class:fourth-line-not-open={!toggleSide}
            class:fourth-line-open={toggleSide}
            class="absolute w-10 border-2 border-purple-600 dark:border-purple-900 rounded-full transition ease-in transform duration-300"></div>
        </div>
    </div>
</button>
{#if toggleSide}
<div class="md:hidden flex flex-row">
    <button class="fixed h-full w-1/4 filter z-40" onclick={handleClickOutside} aria-label="Close Side Menu"></button>
    <div transition:fly|global="{{ x: 200, duration: 500 }}" 
        class="z-40 dark:bg-gray-800 bg-slate-400 flex flex-col place-items-center justify-center fixed h-screen w-3/4 shadow-lg right-0">
        <div class="flex flex-col flex-wrap place-items-center justify-center gap-6 w-3/4 h-3/4 -sm:h-5/6">
            <a class="flex flex-col place-items-center" href="#about" onclick={toggleSideMenu}><span class="mobile-num">00</span><span class="link-text">About</span></a>
            <a class="flex flex-col place-items-center" href="#projects" onclick={toggleSideMenu}><span class="mobile-num">01</span><span class="">Projects</span></a>
            <a class="flex flex-col place-items-center" href="#contact" onclick={toggleSideMenu}><span class="mobile-num">02</span><span class="">Contact</span></a>
            <div class="block relative rounded-lg transition ease-in-out dark:hover:bg-purple-900 hover:bg-purple-600 duration-300 delay-150">
                <a href="content/Resume.pdf" target="_blank">
                    <div class="border-2 p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 duration-300 delay-150">Resume</div>
                </a>
            </div>
            <div class=""><ThemeSwitch /></div>
        </div>
    </div>
</div>
{/if}
{/if}

<style lang="postcss">
    .link{
        @apply flex flex-auto flex-shrink flex-row overflow-x-hidden bg-transparent items-center dark:hover:text-purple-900 hover:text-purple-600 w-min 
    }
    .num{
        @apply text-2xl dark:text-purple-900 p-1 text-purple-600 
    }
    .mobile-num{
        @apply text-4xl dark:text-purple-900 text-purple-600
    }
    .link-text{
        @apply bg-transparent
    }
    .scroll-collapse{
        @apply transform ease-in-out duration-500 -translate-y-full
    }

    .scroll-regular{
        @apply transform ease-in-out duration-500 translate-y-0
    }

    .button-collapse{
        @apply transform ease-in-out duration-500 -top-12
    }

    .button-regular{
        @apply transform ease-in-out duration-500 top-3
    }

    .first-line-open{
        @apply rotate-45 translate-y-3 
    }

    .second-line-not-open{
        @apply opacity-100
    }

    .second-line-open{
        @apply opacity-0
    }

    .third-line-not-open{
        @apply w-6
    }

    .third-line-open{
        @apply opacity-0
    }

    .fourth-line-not-open{
        @apply opacity-0 
    }
    
    .fourth-line-open{
        @apply opacity-100 -rotate-45 -translate-y-3
    }
</style>