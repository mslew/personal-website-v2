<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    import File from "./icons/File.svelte";
    interface Props {
        title: string;
        techs: string[];
        githubIcon: boolean;
        externalIcon: boolean;
        github: string;
        link: string;
        description: string[];
    }

    let {
        title,
        techs,
        githubIcon,
        externalIcon,
        github,
        link,
        description
    }: Props = $props();
</script>

<div class="transform ease-in-out hover:-translate-y-2 duration-300 z-10">
    <div class="reveal h-full w-full p-6 dark:bg-gray-800 bg-slate-400 rounded-sm">
        <div class="flex flex-row justify-between">
            <File class="dark:fill-white fill-black mb-2" height={30}/>
            <div class="flex flex-row gap-4">
                {#if githubIcon}
                    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={github} target = "_blank" rel="noreferrer" aria-label="GitHub" title=""><GitHub class="" height={30}/></a>
                {/if}
                {#if externalIcon}
                    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={link} target = "_blank" rel="noreferrer" aria-label="External" title=""><External class="" height={30}/></a>
                {/if}
            </div>
        </div>
        <div class="title text-xl">
            {@html title}
        </div>
        <div class="mt-2 pb-6 text-sm">
            {#each description as line}
            {@html line}
            {/each}
        </div>
        <ul class="flex flex-row w-full flex-wrap gap-2 justify-center">
            {#each techs as tech}
                <li class="dark:text-slate-400 text-slate-700 text-sm -xs:text-xs">{tech}</li>
            {/each}
        </ul>
    </div>
</div>
<!--NOTE: This is a temporary fix for the tailwindcss bug. @apply does not work with the class attribute in svelte-5-->

