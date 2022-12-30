<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import '../../fonts.scss';
    import viewport from '../../functions/useViewportAction';
    let visible = false;
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

<div class="container mt-5">
    <div class="row">
        <div class="col" use:viewport 
            on:enterViewport={() => (visible = true)}
            on:exitViewport={() => (visible = false)}>
            {#if visible && onLoadVisible}
            <span>01.</span><span></span>
            <div in:fade={{ delay: 500 }} class="card-body" out:fade>
                <p class="intro">Hi, my name is</p>
                <h1 class="display-1 name">Maximus Lewis.</h1>
                <h1 class="display-3 subtitle">Computer Science Student</h1>
                <p class="content mt-4">I am a software engineer finishing up my studies at Lewis University.</p>
            </div>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    .row{
        margin-top: 25rem;
        height: 50rem;
        width: 100%;
    }
    .card-body{
        font-family: $font-regular;
        color: $white;
    }
</style>