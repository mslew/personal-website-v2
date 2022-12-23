<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { draw, fade } from 'svelte/transition';
    let toDraw = false;
    let visible = true;

    onMount(() => {
        setTimeout(drawIn, 500)
        setTimeout(fadeOut, 3500)
    });

    function drawIn (){
        toDraw = true
    }

    function fadeOut (){
        visible = false
    }

    onDestroy(() => clearInterval(4000));
</script>

{#if visible}
<svg width="200" height="200" style="stroke-width: 5;" out:fade>
    {#if toDraw}
    <polygon in:draw="{{duration: 2000}}" points="5,100 100,195 195,100 100,5" style="stroke-width:8;stroke:#CC5500" fill-opacity="0" out:fade/>
    <svg x="50" y="50" id="m" xmlns="http://www.w3.org/2000/svg" 
    class=" icon icon-tabler icon-tabler-letter-m" 
    width="100" height="100" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="stroke:#CC5500" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
    <path in:draw="{{duration: 2000}}" stroke="none" d="M0 0h24v24H0z" fill="none" out:fade/> 
    <path in:draw="{{duration: 2000}}" d="M6 20v-16l6 14l6 -14v16" out:fade/> 
    </svg> 
    {/if}
</svg> 
{/if}

<style>
    svg{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
</style>