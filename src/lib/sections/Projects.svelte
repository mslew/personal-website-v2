<script lang="ts">
    import { onMount } from 'svelte';
    import projects from '../projects/projects.json'
    import otherprojects from '../projects/otherprojects.json'
    import Project from '../components/Project.svelte';
    import OtherProject from '@components/OtherProject.svelte';
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section class="h-screen w-full grid justify-items-center" id="projects">
    <div class="grid w-2/3 grid-cols-1 justify-items-center place-items-center gap-2">
        <div class="">
            <div class="flex flex-row items-center gap-4 mb-8 tall:portrait:mt-16">
                <p class="text-3xl dark:text-purple-900 p-1 object-bottom text-purple-600 -lg:text-xl -md:text-xl">02.</p>
                <p class="text-2xl -lg:text-lg">My Projects</p>
                <div class="border dark:border-white border-black ml-2 pr-72 -xl:pr-40 -lg:pr-36 -sm:pr-32"></div>
            </div>
            <div class="flex flex-col gap-16 tall:portrait:">
                {#each projects.projects as project, i}
                    {#if i % 2 != 0}
                        <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                        externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}
                        orientation='items-end' headerTextAlign='text-right'/>
                    {:else}
                        <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                        externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}
                        orientation='items-start' headerTextAlign='text-left'/>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    <div class="w-full grid justify-items-center place-items-center">
        <div class="flex flex-row items-center gap-4 mb-8 mt-8 tall:portrait:mt-16">
            <p class="text-2xl -lg:text-lg">Other Projects</p>
            <div class="border dark:border-white border-black ml-2 pr-72 -xl:pr-40 -lg:pr-36 -sm:pr-32"></div>
        </div>
        <div class="w-1/2 grid grid-cols-3 gap-3">
            {#each otherprojects.otherprojects as project}
                <OtherProject title={project.title} techs={project.techs} githubIcon={project.githubIcon} 
                externalIcon={project.externalIcon} github={project.github} 
                link={project.link} description={project.description}/>
            {/each}
        </div>
    </div>
</section>
{/if}

<style>
</style>