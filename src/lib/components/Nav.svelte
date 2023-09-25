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
        if(sideVisible){
            sideVisible = false;
        }else{
            sideVisible = true;
        }
    }
</script>
  
{#if visible}
<div in:fly="{{ y: -100, duration: 1000 }}" class="flex border-b border-purple-600" out:fly="{{ y: -100, duration: 1000 }}">
    <a class="" href="/"><Logo /></a>
    <button class="" type="button" on:click={makeSideVisible}>sideButton</button>
    <div class="flex gap-10">
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
        <a href="content/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="">Resume</button></a>
        {/if}
    </div>
    <ThemeSwitch />
</div>
{/if}
{#if sideVisible}
<div in:fly="{{ x: 100, duration: 500 }}" class="" out:fly="{{ x: 100, duration: 500 }}">
    <a class="link" href="#intro"><span class="num">00</span><span class="link-text">Intro</span></a>
    <a class="link" href="#about"><span class="num">01</span><span class="link-text">About</span></a>
    <a class="link" href="#projects"><span class="num">02</span><span class="link-text">Projects</span></a>
    <a class="link" href="#contact"><span class="num">03</span><span class="link-text">Contact</span></a>
    <a href="content/Resume.pdf" target="_blank"><button type="button" class="">Resume</button></a>
</div>
{/if}

<style lang="postcss">
    .link{
        @apply bg-transparent
    }
    .num{
        @apply text-2xl text-purple-900 p-1
    }
    .link-text{
        @apply bg-transparent
    }
</style>