<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import LogoAnim from "@components/LogoAnim.svelte";
    import IntroCard from "@components/IntroCard.svelte";
    import SocialSideBar from "@components/SocialSideBar.svelte";
    import EmailSideBar from "@components/EmailSideBar.svelte";
    let visible = true;

    onMount(() => {
        setTimeout(raiseBar, 6750);
    });

function raiseBar(){
    visible = true;
}
</script>

<!--<LogoAnim />-->

<section id="intro">
    <IntroCard />
    {#if visible}
        <div transition:fly="{{ y: 100, duration: 200 }}" class="fixed -md:hidden bottom-4 h-1/4 w-full flex flex-row justify-between">
            <SocialSideBar />
            <EmailSideBar />
        </div>
    {/if}
</section>

<style>
</style>