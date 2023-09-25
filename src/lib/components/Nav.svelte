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
<nav in:fly="{{ y: -100, duration: 1000 }}" class="border-b border-purple-600" out:fly="{{ y: -100, duration: 1000 }}">
    <a class="" href="/"><Logo /></a>
    <button class="" type="button" on:click={makeSideVisible}>sideButton</button>
    <div class="">
      <div class="">
        {#if link1}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="" href="#intro"><span class="">00</span><span class="">Intro</span></a>
        {/if}
        {#if link2}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="" href="#about"><span class="">01</span><span class="">About</span></a>
        {/if}
        {#if link3}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="" href="#projects"><span class="">02</span><span class="">Projects</span></a>
        {/if}
        {#if link4}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="" href="#contact"><span class="">03</span><span class="">Contact</span></a>
        {/if}
        {#if button}
        <a href="content/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="">Resume</button></a>
        {/if}
      </div>
      <ThemeSwitch />
    </div>
</nav>
{/if}
{#if sideVisible}
<div in:fly="{{ x: 100, duration: 500 }}" class="" out:fly="{{ x: 100, duration: 500 }}">
    <a class="" href="#intro"><span class="special">00</span><span class="link">Intro</span></a>
    <a class="" href="#about"><span class="special">01</span><span class="link">About</span></a>
    <a class="" href="#projects"><span class="special">02</span><span class="link">Projects</span></a>
    <a class="" href="#contact"><span class="special">03</span><span class="link">Contact</span></a>
    <a href="content/Resume.pdf" target="_blank"><button type="button" class="">Resume</button></a>
</div>
{/if}

<style>
</style>