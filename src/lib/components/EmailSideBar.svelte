<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let visible = true;

    onMount(() => {
        setTimeout(raiseBar, 6750);
    });

    function raiseBar(){
        visible = true;
    }
</script>

{#if visible}
<div transition:fly="{{ y: 100, duration: 200 }}" class="flex flex-col items-center mr-16">
    <a class="email mr-2" href = "mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email">mlew3223@gmail.com</a>
    <div class="border dark:border-white pb-10 mt-2 mr-2 border-black"></div>
</div>
{/if}

<style lang="postcss">
    .email{
        writing-mode: vertical-rl;
        @apply dark:hover:text-purple-900 pb-3 hover:text-purple-600 dark:text-white text-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>