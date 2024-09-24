<script lang="ts">
    import { Email } from "src/config";
</script>

<div class="flex flex-col items-center">
    <a class="email" href={"mailto:" + Email.name} target = "_blank" aria-label="Email" title="Email">{Email.name}</a>
    <div class="border dark:border-white h-full mt-2 mr-2 border-black pb-14 -xl:pb-10"></div>
</div>

<style lang="postcss">
    .email{
        writing-mode: vertical-rl;
        @apply dark:hover:text-purple-900 pb-3 hover:text-purple-600 dark:text-white text-black transition ease-in-out hover:-translate-y-1 duration-300
    }
</style>