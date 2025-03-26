<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    let visible = $state(false); //change this back
    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 0) //3750
    });
</script>

{#if visible}
<div class="h-screen w-full flex flex-col justify-items-center place-items-center items-start justify-center pl-[15%]">
    <div class="flex flex-col gap-6 -md:gap-3 -xl:w-2/3 -lg:w-3/4 -md:w-full sm:mt-32 md:mt-0">
        <p transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut}}" class="text-2xl dark:text-purple-900 text-purple-600 -lg:text-xl sm:pb-0">Hi, my name is</p>
        <div>
            <h1 transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 250 }}" class="text-7xl -lg:text-4xl -xs:text-2xl sm:pb-0">Max Lewis.</h1>
            <h1 transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 350 }}" class="text-6xl -lg:text-4xl -xs:text-2xl sm:pb-0">Software Engineer</h1>
        </div>
        <p transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 450 }}" class="text-2xl dark:text-purple-900 text-purple-600 -lg:text-lg">I am a Lewis University Computer Science graduate.</p>
        <a transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 450 }}" 
        class="text-2xl -lg:text-lg hover:text-purple-600 dark:hover:text-purple-900 transition ease-in-out duration-300 w-fit"
        href="https://blog.maxlewis.dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Blog"
        title="Blog"
        >Check out my Blog!</a>
    </div>
</div>
{/if}

<style>
</style>