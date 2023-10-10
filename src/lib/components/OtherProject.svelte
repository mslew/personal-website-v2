<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    import File from "./icons/File.svelte";
    export let title : string;
    export let techs : string[];
    export let githubIcon : boolean;
    export let externalIcon : boolean; 
    export let github : string;
    export let link : string;
    export let description : string[];
</script>

<div class="transform ease-in-out hover:-translate-y-2 duration-300 z-10 -2xl:col-span-3">
    <div class="reveal h-full w-full p-6 dark:bg-gray-800 bg-slate-400 rounded-lg">
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
        <div class="title text-xl">
            {@html title}
        </div>
        <div class="mt-2 text-sm">
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
</div>

<style lang="postcss">
    .icon{
        @apply dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>