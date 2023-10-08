<script lang="ts">
    import { onMount } from 'svelte';
    import { draw, fade } from 'svelte/transition';
    let toDraw = false;
    let fadeMIn = false;
    let visible = true;

    onMount(() => {
        setTimeout(() => {
            toDraw = true
        }, 500)
        setTimeout(() => {
            fadeMIn = true
        }, 1500)
        setTimeout(() =>{
            visible = false
        }, 3000)
    });
</script>

{#if visible}
<svg class="absolute m-auto left-0 right-0 top-0 bottom-0" width="200" height="200" style="stroke-width: 5;" out:fade>
    {#if toDraw}
    <polygon in:draw="{{duration: 1000}}" class="fill-black stroke-purple-800" points="5,100 100,195 195,100 100,5" style="stroke-width:8" fill-opacity="0" out:fade/>
    {/if}
    {#if fadeMIn}
    <svg in:fade="{{duration: 1000}}" x="50" y="50" id="m" xmlns="http://www.w3.org/2000/svg" 
    class="stroke-purple-800" 
    width="100" height="100" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
    <path stroke="none" d="M0 0h24v24H0z" fill="none" out:fade/> 
    <path d="M6 20v-16l6 14l6 -14v16" out:fade/>
    </svg> 
    {/if}
</svg> 
{/if}

<style>
</style>