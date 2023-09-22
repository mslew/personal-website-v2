<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import BottomSocials from '../components/BottomSocials.svelte';
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="contact" in:fade>
    <div class="container top-container">
        <div class="row top justify-content-center">
            <div class="col">
                <div class="intro">
                    <p class="sectionNumberHeader">03.</p>
                    <p class="sectionHeader">Contact</p>
                    <hr class="line" />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <p class="contact-text">
                        I am looking for full time software engineering opportunities.  
                        If you are interested, do not hesitate to contact me!
                    </p>
                    <a href="mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email"><button class="btn btn-outline-light">Contact</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <BottomSocials />
                <div class="wrapper">
                    <a href="https://github.com/mslew/personal-website-v2" target="_blank" rel="noreferrer" aria-label="Repo" title="Repo"><p class="credits">Designed and Built by Maximus Lewis</p></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/if}

<style>
</style>