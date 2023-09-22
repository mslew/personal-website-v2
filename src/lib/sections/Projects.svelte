<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import projects from '../projects/projects.json'
    import Project from '../components/Project.svelte';
    import ProjectSwitched from '../components/ProjectSwitched.svelte';
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="projects" in:fade>
    <div class="container mt-5">
        <div class="row top">
            <div class="col">
                <div class="intro">
                    <p class="sectionNumberHeader">02.</p>
                    <p class="sectionHeader">My Projects</p>
                    <hr class="line" />
                </div>
            </div>
        </div>
        {#each projects.projects as project, i}
            {#if i % 2 === 0}
                <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}/>
            {:else}
                <ProjectSwitched title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}/>
            {/if}
        {/each}
    </div>
</section>
{/if}

<style>
</style>