<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    export let title : string;
    export let techs : string[];
    export let githubIcon : boolean;
    export let externalIcon : boolean; 
    export let github : string;
    export let link : string;
    export let description : string[];
    export let orientation : string;
    export let headerTextAlign: string;
</script>

<div class={"flex flex-col featured-project reveal " + orientation}>
    <div class={"mb-6 lg:w-1/2 " + headerTextAlign}>
        <p class="text-lg dark:text-purple-900 text-purple-600">Featured Project</p>
        <p class="text-2xl mt-2 -sm:text-xl">{@html title}</p>
    </div>
    <div class="lmb-4 rounded-sm dark:bg-gray-800 bg-slate-400 w-3/4 p-4 shadow-lg -lg:w-full">
        <p class="-sm:text-sm">
            {#each description as line}
            {@html line}
            {/each}
        </p>
    </div>
    <div class="flex flex-row gap-10 mt-6">
        {#each techs as tech}
            <p class="dark:text-slate-400 text-slate-700 -xs:text-sm">{tech}</p>
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