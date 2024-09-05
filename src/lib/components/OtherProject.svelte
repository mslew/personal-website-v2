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
    <div class="reveal h-full w-full p-6 dark:bg-gray-800 bg-slate-400 rounded-sm">
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
        <div class="flex flex-col justify-between border h-full">
            <div class="mt-2 text-sm">
                {#each description as line}
                {@html line}
                {/each}
            </div>
            <ul class="z-0"> <!--TODO: Float list of technologies to the bottom of the box. And Make sure the list doesnt grow to >2 lines. -->
                {#each techs as tech}
                    <li class="dark:text-slate-400 text-slate-700 inline-block pr-2 text-sm">{tech}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style lang="postcss">
    .icon{
        @apply dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>