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
<div transition:fly="{{ y: 100, duration: 200 }}" class="fixed flex flex-row items-center rotate-90">
    <a class="text mr-4" href = "mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email">mlew3223@gmail.com</a>
    <div class="border border-white pr-10"></div>
</div>
{/if}

<style>
</style>