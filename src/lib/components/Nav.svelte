<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Logo from './icons/Logo.svelte';
    import ThemeSwitch from './ThemeSwitch.svelte';
	let visible = true; //change this back dog
    let sideVisible = false; //change this back dog
    let link1 = true;
    let link2 = true;
    let link3 = true;
    let link4 = true;
    let button = true;
    let smLink1 = false;
    let smLink2 = false;
    let smLink3 = false;
    let smLink4 = false;
    let smButton = false;
    let i = 0; 
    onMount(() => {
        setTimeout(flyDown, 4000)
        setTimeout(dropLinks, 4500)
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
    function makeSideVisible() { 
        sideVisible ? sideVisible = false : sideVisible = true 
        slideSmLinks(0)
    }

    function slideSmLinks(j: number){
        setTimeout(() => {   
        if (j < 5) { 
            if(j === 0){
                !smLink1 ? smLink1 = true : smLink1 = false 
            }
            else if(j === 1){
                !smLink2 ? smLink2 = true : smLink2 = false 
            }
            else if(j === 2){
                !smLink3 ? smLink3 = true : smLink3 = false 
            }
            else if(j === 3){
                !smLink4 ? smLink4 = true : smLink4 = false 
            }
            else if(j === 4){
                !smButton ? smButton = true : smButton = false 
            }
            j++;
            slideSmLinks(j);              
        }                
    }, 100)
    }
</script>
  
{#if visible}
<div in:fly="{{ y: -100, duration: 1000 }}" class="flex border-b border-purple-600 pb-3" out:fly="{{ y: -100, duration: 1000 }}">
    <a class="mt-3" href="/"><Logo /></a>
    <button class="sm:hidden" type="button" on:click={makeSideVisible}>sideButton</button>
    <div class="flex gap-14 flex-row justify-items-center mt-4 -sm:hidden">
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
        <a href="content/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="border p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black">Resume</button></a>
        <ThemeSwitch />
        {/if}
    </div>
</div>
{/if}
{#if sideVisible}
<div class="sm:hidden">
    {#if smLink1}
    <a in:fly="{{ x: 100, duration: 100 }}" class="link" href="#intro" out:fly="{{ x: 100, duration: 100 }}"><span class="num">00</span><span class="link-text">Intro</span></a>
    {/if}
    {#if smLink2}
    <a in:fly="{{ x: 100, duration: 100 }}" class="link" href="#about" out:fly="{{ x: 100, duration: 100 }}"><span class="num">01</span><span class="link-text">About</span></a>
    {/if}
    {#if smLink3}
    <a in:fly="{{ x: 100, duration: 100 }}" class="link" href="#projects" out:fly="{{ x: 100, duration: 100 }}"><span class="num">02</span><span class="link-text">Projects</span></a>
    {/if}
    {#if smLink4}
    <a in:fly="{{ x: 100, duration: 100 }}" class="link" href="#contact" out:fly="{{ x: 100, duration: 100 }}"><span class="num">03</span><span class="link-text">Contact</span></a>
    {/if}
    {#if smButton}
    <div in:fly="{{ x: 100, duration: 100 }}" class="flex flex-row gap-3 ml-2" out:fly="{{ x: 100, duration: 100 }}">
        <a href="content/Resume.pdf" target="_blank"><button type="button" class="border p-2 rounded-lg dark:hover:bg-purple-900 hover:bg-purple-400 dark:border-gray-300 border-black">Resume</button></a>
        <ThemeSwitch />
    </div> 
    {/if}
</div>
{/if}

<style lang="postcss">
    .link{
        @apply flex bg-transparent dark:hover:text-purple-900 hover:text-purple-600
    }
    .num{
        @apply text-2xl dark:text-purple-900 p-1 object-bottom text-purple-600
    }
    .link-text{
        @apply bg-transparent mt-2
    }
</style>