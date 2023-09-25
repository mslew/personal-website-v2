<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    import ScrollReveal from 'scrollreveal'
    import { onMount } from "svelte";
    export let title : string;
    export let techs : string[];
    export let githubIcon : boolean;
    export let externalIcon : boolean; 
    export let github : string;
    export let link : string;
    export let description : string[];
    onMount(() => {
        let options = {
            show: 50, 
            threshold: 100,
            opacity: 0,
            duration: 2000
        }
        ScrollReveal().reveal(".row", options);
    })
</script>

<div class="row">
    <div class="col title order-1">
        <div class="title-background">
            <p class="display-6 title-text">{@html title}</p>
        </div>
        <div class="technologies">
            <p class="technology">
                {#each techs as tech}
                <p class = "tech">{tech}</p>
                {/each}
            </p>
        </div>
    </div>
    <div class="col-lg-6 description order-2">
        <p>
            {#each description as line}
            {@html line}
            {/each}
        </p>
    </div>
    <div class="links order-3">
        {#if githubIcon}
        <a class="iconlink" href={github} target = "_blank" rel="noreferrer" aria-label="" title=""><GitHub class="icon" height={30}/></a>
        {/if}
        {#if externalIcon}
        <a class="iconlink" href={link} target = "_blank" rel="noreferrer" aria-label="" title=""><External class="icon" height={30}/></a>
        {/if}
    </div>
</div>

<style>
</style>