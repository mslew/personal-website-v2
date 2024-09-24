<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import SocialSideBar from "./SocialSideBar.svelte";
    import EmailSideBar from "./EmailSideBar.svelte";
    let sideBarVisible: boolean = false;
    onMount(() => {
        setTimeout(() => {
            sideBarVisible = true
        }, 4500); //4500
    });
</script>

{#if sideBarVisible}
    <div transition:fly="{{ y: 50, duration: 500, easing: quintInOut}}" class="fixed flex flex-col justify-end mb-4 ml-8 -md:hidden bottom-0 h-screen">
        <SocialSideBar />
    </div>
    <div transition:fly="{{ y: 50, duration: 500, easing: quintInOut}}" class="fixed flex flex-col justify-end mb-4 mr-8 -md:hidden bottom-0 right-0 h-screen">
        <EmailSideBar />
    </div>
{/if}