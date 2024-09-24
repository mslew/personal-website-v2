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
        }, 0); //4500
    });
</script>

{#if sideBarVisible}
    <div transition:fly="{{ y: 50, duration: 500, easing: quintInOut}}" class="fixed flex flex-col justify-end items-center -md:hidden bottom-0 h-screen w-screen">
        <div class="flex flex-row w-[95%] justify-between mb-4 ">
            <SocialSideBar />
            <EmailSideBar />
        </div>
    </div>
{/if}