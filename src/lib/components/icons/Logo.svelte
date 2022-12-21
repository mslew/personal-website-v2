<script lang="ts">
    import { draw, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    let toDraw = false;
    let visible = true

    setTimeout(drawIn, 1000)
    setTimeout(fadeOut, 4000)

    function drawIn (){
        toDraw = true
    }

    function fadeOut (){
        visible = false
    }
</script>

{#if visible}
<svg width="200" height="200" style="stroke-width: 5;" out:fade>
    {#if toDraw}
    <polygon transition:draw="{{duration: 1500, easing: quintOut}}" points="5,100 100,195 195,100 100,5" style="stroke-width:8;stroke:#CC5500" fill-opacity="0"/>
    <svg x="50" y="50" id="m" xmlns="http://www.w3.org/2000/svg" 
    class=" icon icon-tabler icon-tabler-letter-m" 
    width="100" height="100" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="stroke:#CC5500" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
    <path transition:draw="{{duration: 2000, easing: quintOut}}" stroke="none" d="M0 0h24v24H0z" fill="none"/> 
    <path transition:draw="{{duration: 2000, easing: quintOut}}" d="M6 20v-16l6 14l6 -14v16" /> 
    </svg> 
    {/if}
</svg> 
{/if}

<style>
</style>