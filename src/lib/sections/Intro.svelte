<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import IntroCard from "@components/IntroCard.svelte";
    let visible = false;

    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 4500);
    });
</script>

<section id="intro">
    <IntroCard />
</section>