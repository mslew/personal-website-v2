<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    import ScrollReveal from 'scrollreveal'
    import { onMount } from "svelte";
    import File from "./icons/File.svelte";
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
        ScrollReveal().reveal(".project", options);
    })
</script>

<div class="dark:bg-gray-800 bg-slate-400 rounded-lg p-6 transition ease-in-out hover:-translate-y-2 duration-300 z-10 -2xl:col-span-3">
    <div class="flex flex-row justify-between">
        <File class="dark:fill-white fill-black mb-2" height={50}/>
        <div class="flex flex-row gap-4">
            {#if githubIcon}
                <a class="icon" href={github} target = "_blank" rel="noreferrer" aria-label="" title=""><GitHub class="icon" height={30}/></a>
            {/if}
            {#if externalIcon}
                <a class="icon" href={link} target = "_blank" rel="noreferrer" aria-label="" title=""><External class="icon" height={30}/></a>
            {/if}
        </div>
    </div>
    <div class="title">
        {@html title}
    </div>
    <div class="mt-2">
        {#each description as line}
        {@html line}
        {/each}
    </div>
    <div class="flex flex-row gap-6 flex-wrap mt-4 z-0">
        {#each techs as tech}
            <p class="">{tech}</p>
        {/each}
    </div>
</div>

<style lang="postcss">
    .icon{
        @apply dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>