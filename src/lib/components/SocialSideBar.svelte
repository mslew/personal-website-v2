<script lang="ts">
    import { XTwitterURL, GitHubURL, LinkedInURL, InstagramURL } from 'src/config';
    import GitHub from './icons/GitHub.svelte';
    import LinkedIn from './icons/LinkedIn.svelte';
    import X from './icons/X.svelte';
    import Instagram from './icons/Instagram.svelte';
</script>

<div class="flex flex-col items-center">
    <a class="item" href={GitHubURL.url} target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub height={30}/></a>
    <a class="item" href={LinkedInURL.url} target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn height={30}/></a>
    <a class="item" href={XTwitterURL.url} target = "_blank" rel="noreferrer" aria-label="X/Twitter" title="X/Twitter"><X height={30}/></a>
    <a class="item" href={InstagramURL.url} target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram height={30}/></a>
    <div class="border dark:border-white pb-14 mt-2 border-black wide:landscape:pb-20"></div>
</div>

<style lang="postcss">
    .item{
        @apply dark:hover:fill-purple-900 pb-3 hover:fill-purple-600 dark:fill-white fill-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>