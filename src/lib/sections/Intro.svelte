<script lang="ts">
    import { draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Logo from "../components/icons/Logo.svelte"
</script>

<p><Logo /></p>

<style>
    p{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
</style>