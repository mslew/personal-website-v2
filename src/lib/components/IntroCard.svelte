<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let nameVisible = false;
    let subtitleVisible = false;
    let contentVisible = false;

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

<div class="container mt-5">
    <div class="card-body">
        {#if nameVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="intro">Hi, my name is</p>
        {/if}
        {#if nameVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="display-1 name">Maximus Lewis.</h1>
        {/if}
        {#if subtitleVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="display-3 subtitle">Computer Science Student</h1>
        {/if}
        {#if contentVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="content mt-4">I am a software engineer finishing up my studies at Lewis University.</p>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../../scss/variables.scss';
    @import '../../scss/fonts.scss';
    .card-body{
        margin-top: 16rem;
        @include media-breakpoint-down(md){
            margin-top: 8rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
    .intro{
        color: $orange;
        font-size: 1.5rem;
        @include media-breakpoint-down(md){
            font-size: 1rem;
        }
    }
    .name{
        color: $light-gray;
        @include media-breakpoint-down(md){
            font-size: 2rem;
        }
    }
    .subtitle{
        color: $light-gray;
        @include media-breakpoint-down(md){
            font-size: 2rem;
        }
    }
    .content{
        font-size: 1.25rem;
        color: $orange;
        @include media-breakpoint-down(md){
            font-size: 1rem;
        }
    }
</style>