<script lang="ts">
    import { setContext } from "svelte";
    export let y: number = 0

    setContext(y, {
        addItem
    })
</script>