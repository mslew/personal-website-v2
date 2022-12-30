<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import '../../fonts.scss';
</script>

<div class="container mt-5">
    <div class="card-body">
        <p class="intro">Hi, my name is</p>
        <h1 class="display-1 name">Maximus Lewis.</h1>
        <h1 class="display-3 subtitle">Computer Science Student</h1>
        <p class="content mt-4">I am a software engineer finishing up my studies at Lewis University.</p>
    </div>
</div>

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    .card-body{
        margin-top: 30rem;
        font-family: $font-regular;
    }
</style>