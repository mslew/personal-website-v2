<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let nameVisible = true; //change this back
    let subtitleVisible = true; //change this back
    let contentVisible = true; //change this back

    onMount(() => {
        setTimeout(dropName, 6000)
        setTimeout(dropSubtitle, 6250)
        setTimeout(dropContent, 6500)
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

<div class="border h-screen w-full grid grid-cols-3 grid-rows-2 justify-items-center place-items-center">
    <div class="row-span-2 col-span-2 -2xl:col-span-3">
        {#if nameVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="text-2xl p-6 dark:text-purple-900 text-purple-600 -lg:text-xl -sm:pb-0">Hi, my name is</p>
        {/if}
        {#if nameVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="text-7xl p-6 -lg:text-4xl -sm:pb-0">Maximus Lewis.</h1>
        {/if}
        {#if subtitleVisible}
        <h1 transition:fly="{{ y: -100, duration: 100 }}" class="text-6xl p-6 -lg:text-4xl -sm:pb-0">Software Engineer</h1>
        {/if}
        {#if contentVisible}
        <p transition:fly="{{ y: -100, duration: 100 }}" class="text-2xl p-6 dark:text-purple-900 text-purple-600 -lg:text-xl">I am a recent Lewis University Computer Science graduate.</p>
        {/if}
    </div>
</div>

random stuff here just to test heheheh

<style>
</style>