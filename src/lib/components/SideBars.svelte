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
        }, 4500);
    });
</script>

{#if sideBarVisible}
    <div transition:fly="{{ y: 50, duration: 500, easing: quintInOut}}" class="fixed -md:hidden -lg:wide:bottom-36 bottom-4 h-1/4 w-full flex flex-row justify-between">
        <SocialSideBar />
        <EmailSideBar />
    </div>
{/if}