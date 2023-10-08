<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let nameVisible = false; //change this back
    let subtitleVisible = false; //change this back
    let contentVisible = false; //change this back

    onMount(() => {
        setTimeout(dropName, 4000)
        setTimeout(dropSubtitle, 4250)
        setTimeout(dropContent, 4500)
    });

    function dropName (){
        nameVisible = true;
    }
    
    function dropSubtitle (){
        subtitleVisible = true;
    }

    function dropContent (){
        contentVisible = true;
    }

</script>

<div class="h-screen w-full grid grid-cols-4 grid-rows-2 justify-items-center place-items-center">
    <div class="row-span-2 col-span-3 -2xl:col-span-4 -xl:w-2/3 -lg:w-3/4 -md:w-full sm:mt-32 md:mt-0">
        {#if nameVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="text-2xl pl-6 pt-4 dark:text-purple-900 text-purple-600 -lg:text-xl sm:pb-0">Hi, my name is</p>
        {/if}
        {#if nameVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="text-7xl pl-6 pt-4 -lg:text-4xl sm:pb-0">Maximus Lewis.</h1>
        {/if}
        {#if subtitleVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="text-6xl pl-6 pt-4 -lg:text-4xl sm:pb-0">Software Engineer</h1>
        {/if}
        {#if contentVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="text-2xl pl-6 pt-4 dark:text-purple-900 text-purple-600 -lg:text-xl">I am a recent Lewis University Computer Science graduate.</p>
        {/if}
    </div>
</div>

<style>
</style>