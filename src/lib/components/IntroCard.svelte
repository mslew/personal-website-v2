<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    let visible = $state(false); //change this back
    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 3750)
    });
</script>

{#if visible}
<div class="h-screen w-full grid grid-cols-4 grid-rows-2 justify-items-center place-items-center">
    <div class="row-span-2 col-span-3 -2xl:col-span-4 -xl:w-2/3 -lg:w-3/4 -md:w-full sm:mt-32 md:mt-0">
        <p transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut}}" class="text-2xl pl-6 pt-4 dark:text-purple-900 text-purple-600 -lg:text-xl sm:pb-0">Hi, my name is</p>
        <h1 transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 250 }}" class="text-7xl pl-6 pt-4 -lg:text-4xl -xs:text-2xl sm:pb-0">Max Lewis.</h1>
        <h1 transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 350 }}" class="text-6xl pl-6 pt-4 -lg:text-4xl -xs:text-2xl sm:pb-0">Software Engineer</h1>
        <p transition:fly|global="{{ y: 20, duration: 500, easing: quintInOut, delay: 450 }}" class="text-2xl pl-6 pt-4 dark:text-purple-900 text-purple-600 -lg:text-lg">I am a recent Lewis University Computer Science graduate.</p>
    </div>
</div>
{/if}

<style>
</style>