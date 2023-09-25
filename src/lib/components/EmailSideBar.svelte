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
<div transition:fly="{{ y: 100, duration: 200 }}" class="email">
    <a class="text" href = "mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email">mlew3223@gmail.com</a>
    <hr />
</div>
{/if}

<style>
</style>