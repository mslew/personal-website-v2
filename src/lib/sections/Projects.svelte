<script lang="ts">
    import projects from '../data/projects.json'
    import otherprojects from '../data/otherprojects.json'
    import Project from '../components/Project.svelte';
    import OtherProject from '@components/OtherProject.svelte';
</script>

<section class="h-full w-full grid justify-items-center mt-6" id="projects">
    <div class="grid w-1/2 grid-cols-1 justify-items-center place-items-center gap-2 md:mt-24 xl:mt-44 -2xl:w-8/12 -md:w-10/12">
        <div class="">
            <div class="reveal flex flex-row items-center gap-4 mb-8">
                <p class="text-3xl dark:text-purple-900 p-1 object-bottom text-purple-600 -lg:text-xl -md:text-xl">02.</p>
                <p class="text-2xl -lg:text-lg">My Projects</p>
                <div class="border dark:border-white border-black ml-2 pr-72 -xl:pr-40 -lg:pr-36 -sm:pr-32"></div>
            </div>
            <div class="flex flex-col gap-16 tall:portrait:">
                {#each projects.projects as project, i}
                    {#if i % 2 != 0}
                        <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                        externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}
                        orientation={i % 2 != 0} />
                    {:else}
                        <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                        externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}
                        orientation={i % 2 != 0} />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    <div class="h-full w-full flex flex-col justify-items-center place-items-center">
        <div class="reveal flex flex-row items-center gap-4 mb-8 mt-8">
            <div class="border dark:border-white border-black ml-2 pr-52 -2xl:pr-36 -xl:pr-24 -lg:pr-20 -md:pr-16"></div>
                <p class="text-2xl -lg:text-lg">Other Projects</p>
            <div class="border dark:border-white border-black mr-2 pr-52 -2xl:pr-36 -xl:pr-24 -lg:pr-20 -md:pr-16"></div>
        </div>
        <div class="w-1/2 -lg:w-3/4 -md:w-10/12 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {#each otherprojects.otherprojects as project}
                <OtherProject title={project.title} techs={project.techs} githubIcon={project.githubIcon} 
                externalIcon={project.externalIcon} github={project.github} 
                link={project.link} description={project.description}/>
            {/each}
        </div>
    </div>
</section>

<style>
</style>