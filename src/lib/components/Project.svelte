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
    export let orientation : string;
    export let headerTextAlign: string;
    onMount(() => {
        let options = {
            show: 50, 
            threshold: 100,
            opacity: 0,
            duration: 2000
        }
        ScrollReveal().reveal(".project", options);
    })
</script>

<div class={"flex flex-col " + orientation}>
    <div class={"mb-6 " + headerTextAlign}>
        <p class="text-lg dark:text-purple-900 text-purple-600">Featured Project</p>
        <p class="text-2xl mt-2">{@html title}</p>
    </div>
    <div class="lmb-4 rounded-lg dark:bg-gray-800 bg-slate-400 w-1/2 p-4 shadow-lg">
        <p>
            {#each description as line}
            {@html line}
            {/each}
        </p>
    </div>
    <div class="flex flex-row gap-10 mt-6">
        {#each techs as tech}
            <p class="">{tech}</p>
        {/each}
    </div>
    <div class="flex flex-row gap-8 mt-6">
        {#if githubIcon}
            <a class="icon" href={github} target = "_blank" rel="noreferrer" aria-label="" title=""><GitHub class="icon" height={30}/></a>
        {/if}
        {#if externalIcon}
            <a class="icon" href={link} target = "_blank" rel="noreferrer" aria-label="" title=""><External class="icon" height={30}/></a>
        {/if}
    </div>
</div>

<style lang="postcss">
    .icon{
        @apply dark:hover:fill-purple-900 pb-3 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>