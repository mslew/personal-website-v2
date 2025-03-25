<script lang="ts">
    import {GitHubURL, LinkedInURL, GoodReadsURL, InstagramURL} from '../../config'
    import GitHub from "./icons/GitHub.svelte";
    import LinkedIn from "./icons/LinkedIn.svelte";
    import GoodReads from "./icons/GoodReads.svelte";
    import Instagram from "./icons/Instagram.svelte";
</script>

<div class="flex flex-row items-center gap-4 mb-4">
    <div class="border dark:border-white border-black ml-2 -md:pr-12"></div>
    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={GitHubURL.url} target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub height={30}/></a>
    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={LinkedInURL.url} target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn height={30}/></a>
    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={GoodReadsURL.url} target = "_blank" rel="noreferrer" aria-label="GoodReads" title="GoodReads"><GoodReads height={30}/></a>
    <a class="dark:hover:fill-purple-900 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300" href={InstagramURL.url} target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram height={30}/></a>
    <div class="border dark:border-white border-black mr-2 -md:pr-12 "></div>
</div>
<!--NOTE: This is a temporary fix for the tailwindcss bug. @apply does not work with the class attribute in svelte-5-->