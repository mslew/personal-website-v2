<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import LogoAnim from "@components/LogoAnim.svelte";
    import IntroCard from "@components/IntroCard.svelte";
    import SocialSideBar from "@components/SocialSideBar.svelte";
    import EmailSideBar from "@components/EmailSideBar.svelte";
    let visible = false;

    onMount(() => {
        setTimeout(() => {
            visible = true
        }, 4500);
    });
</script>

<LogoAnim />

<section id="intro">
    <IntroCard />
    {#if visible}
        <div transition:fly="{{ y: 50, duration: 500, easing: quintInOut}}" class="fixed -md:hidden -lg:wide:bottom-36 bottom-4 h-1/4 w-full flex flex-row justify-between">
            <SocialSideBar />
            <EmailSideBar />
        </div>
    {/if}
</section>