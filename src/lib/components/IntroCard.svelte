<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let nameVisible = true; //change this back
    let subtitleVisible = true; //change this back
    let contentVisible = true; //change this back

    onMount(() => {
        setTimeout(dropName, 6000)
        setTimeout(dropSubtitle, 6250)
        setTimeout(dropContent, 6500)
    });

    function dropName (){
        nameVisible = true;
    }
    
    function dropSubtitle (){
        subtitleVisible = true;
    }

    function dropContent (){
        contentVisible = true;
    }

</script>

<div class="">
    <div class="">
        {#if nameVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="">Hi, my name is</p>
        {/if}
        {#if nameVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="">Maximus Lewis.</h1>
        {/if}
        {#if subtitleVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="">Software Engineer</h1>
        {/if}
        {#if contentVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="">I am a recent Lewis University Computer Science graduate.</p>
        {/if}
    </div>
</div>

<style>
</style>