<script lang="ts">
    import { Email } from "src/config";
</script>

<div class="flex flex-col items-center">
    <a class="email mr-2" href={"mailto:" + Email.name} target = "_blank" aria-label="Email" title="Email">{Email.name}</a>
    <div class="border dark:border-white pb-10 mt-2 mr-2 border-black"></div>
</div>

<style lang="postcss">
    .email{
        writing-mode: vertical-rl;
        @apply dark:hover:text-purple-900 pb-3 hover:text-purple-600 dark:text-white text-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>