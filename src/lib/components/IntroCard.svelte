<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import '../../fonts.scss';
    let nameVisible = false;
    let subtitleVisible = false;
    let contentVisible = false;

    onMount(() => {
        setTimeout(dropName, 6500)
        setTimeout(dropSubtitle, 6750)
        setTimeout(dropContent, 7000)
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

<div class="container mt-5">
    <div class="card-body">
        {#if nameVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="intro">Hi, my name is</p>
        {/if}
        {#if nameVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="display-1 name">Maximus Lewis</h1>
        {/if}
        {#if subtitleVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="display-3 subtitle">Computer Science Student </h1>
        {/if}
        {#if contentVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="content mt-4">I am a software engineer finishing up my studies at Lewis University. </p>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    .card-body{
        margin-top: 12rem;
        font-family: $font-regular;
    }
    .intro{
        color: $orange;
        font-size: 1.5rem;
    }
    .name{
        color: $light-gray;
    }
    .subtitle{
        color: $light-gray;
    }
    .content{
        font-size: 1rem;
        color: $orange;
    }
</style>