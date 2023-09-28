<script lang="ts">
    import { onMount } from 'svelte';
    import BottomSocials from '../components/BottomSocials.svelte';
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section class="h-screen w-full" id="contact">
    <div class="">
        <p class="">03.</p>
        <p class="">Contact</p>
        <hr class="" />
    </div>
    <div class="">
        <p class="">
            I am looking for full time software engineering opportunities.  
            If you are interested, do not hesitate to contact me!
        </p>
        <a href="mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email"><button class="btn btn-outline-light">Contact</button></a>
    </div>
    <div class="">
        <BottomSocials />
        <div class="">
            <a href="https://github.com/mslew/personal-website-v2" target="_blank" rel="noreferrer" aria-label="Repo" title="Repo"><p class="credits">Designed and Built by Maximus Lewis</p></a>
        </div>
    </div>
</section>
{/if}

<style>
</style>