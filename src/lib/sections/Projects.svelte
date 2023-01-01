<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Project from '../components/Project.svelte';
    import ProjectSwitched from '../components/ProjectSwitched.svelte';
    import '../../fonts.scss';
    import viewport from '../../functions/useViewportAction';
  import { each } from 'svelte/internal';
    let visible = false;
    let projectVisible= false;
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

<section id="projects">
    <div class="container mt-5" use:viewport 
    on:enterViewport={() => (visible = true)}>
        <div class="row top">
            {#if visible && onLoadVisible}
            <div class="col" use:viewport 
                on:enterViewport={() => (projectVisible = true)}
                in:fade={{ delay: 500 }} out:fade>
                <div class="intro">
                    <p class="sectionNumberHeader">02.</p>
                    <p class="sectionHeader">My Projects</p>
                    <hr class="line" />
                </div>
            </div>
            {/if}
        </div>
            {#if projectVisible && onLoadVisible}
                {#each Array(4) as _, i}
                    {#if i % 2 === 0}
                        <div in:fade={{ delay: 500 }} out:fade><Project /></div>
                    {:else}
                        <div in:fade={{ delay: 500 }} out:fade><ProjectSwitched /></div>
                    {/if}
                {/each}
            {/if}
    </div>
</section>

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    .top{
        margin-top: 25rem;
        width: 100%;
        font-family: $font-regular;
        color: $white;
    }
    .intro{
        display: flex;
    }
    .sectionNumberHeader{
        color: $orange;
        font-size: 1.5rem;
        padding-right: 1rem;
    }
    .sectionHeader{
        color: $white;
        font-size: 1.5rem;
    }
    hr{
        color: $white;
        border: .1rem solid $white;
        width: 50%;
        height: 100%;
        margin-left: 1rem;
    }
</style>