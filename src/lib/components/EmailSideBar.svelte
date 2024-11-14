<script lang="ts">
    import { Email } from "src/config";
</script>

<div class="flex flex-col items-center">
    <a class="email dark:hover:text-purple-900 pb-3 hover:text-purple-600 dark:text-white text-black transition ease-in-out hover:-translate-y-1 duration-300" href={"mailto:" + Email.name} target = "_blank" aria-label="Email" title="Email">{Email.name}</a>
    <div class="border dark:border-white border-black h-12 -xl:h-8"></div>
</div>
<!--NOTE: This is a temporary fix for the tailwindcss bug. @apply does not work with the class attribute in svelte-5-->

<style lang="postcss">
    .email{
        writing-mode: vertical-rl;
    }
</style>