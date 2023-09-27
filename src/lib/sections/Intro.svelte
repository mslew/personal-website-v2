<script lang="ts">
    import LogoAnim from "../components/LogoAnim.svelte";
    import IntroCard from "../components/IntroCard.svelte";
    import SocialSideBar from "../components/SocialSideBar.svelte";
    import EmailSideBar from "../components/EmailSideBar.svelte";
</script>

<!--<LogoAnim />-->

<section id="intro">
    <!--<IntroCard />-->
    <div class="-lg:hidden fixed bottom-4 h-1/4 w-full flex flex-row justify-between">
        <SocialSideBar />
        <EmailSideBar />
    </div>
</section>

<style>
</style>