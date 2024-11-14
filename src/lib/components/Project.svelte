<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    interface Props {
        title: string;
        techs: string[];
        githubIcon: boolean;
        externalIcon: boolean;
        github: string;
        link: string;
        description: string[];
        orientation: boolean;
    }

    let {
        title,
        techs,
        githubIcon,
        externalIcon,
        github,
        link,
        description,
        orientation
    }: Props = $props();
</script>

<div class:orientation-end={orientation} 
    class:orientation-start={!orientation} 
    class="flex flex-col featured-project reveal">
    <div class:text-align-right={orientation} 
        class:text-align-left={!orientation}
        class="mb-6 lg:w-1/2 ">
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
            <a class="dark:hover:fill-purple-900 pb-3 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={github} target = "_blank" rel="noreferrer" aria-label="GitHub" title=""><GitHub class="" height={30}/></a>
        {/if}
        {#if externalIcon}
            <a class="dark:hover:fill-purple-900 pb-3 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={link} target = "_blank" rel="noreferrer" aria-label="External" title=""><External class="" height={30}/></a>
        {/if}
    </div>
</div>
<!--NOTE: This is a temporary fix for the tailwindcss bug. @apply does not work with the class attribute in svelte-5-->

<style lang="postcss">
    .orientation-end{
        @apply items-end
    }

    .orientation-start{
        @apply items-start
    }

    .text-align-right{
        @apply text-right
    }

    .text-align-left{
        @apply text-left
    }
</style>