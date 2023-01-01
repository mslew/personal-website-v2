<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="contact">
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
                        If you are interested, do not be afraid to contact me!
                    </p>
                    <a href="mailto:mlew3223@gmail.com" target = "_blank" aria-label="Email" title="Email"><button class="btn btn-outline-light">Contact</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div class="wrapper">
                    <a href="https://github.com/mslew/personal-website-v2" target="_blank" rel="noreferrer" aria-label="Repo" title="Repo"><p class="credits">Designed and Built by Maximus Lewis</p></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/if}

<style lang="scss">
    @import '../../scss/variables.scss';
    .top-container{
        margin-bottom: 20rem;
    }
    .top{
        margin-top: 25rem;
        width: 100%;
        color: $white;
    }
    .intro{
        display: flex;
        justify-content: center;
    }
    .contact-text{
        text-align: center;
        color: $light-gray;
    }
    .sectionNumberHeader{
        color: $orange;
        font-size: 1.5rem;
        padding-right: 1rem;
    }
    .sectionHeader{
        color: $white;
        font-size: 1.5rem;
    }
    hr{
        color: $white;
        border: .1rem solid $white;
        width: 50%;
        height: 100%;
        margin-left: 1rem;
    }
    .credits{
        position: relative;
        text-align: center;
        color: $light-gray;
        margin-bottom: 1rem;
        text-decoration: none;
        &::before{
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $orange;
            transform: scaleX(0);
            transition: transform 0.5s ease;
        }
        &:hover{
            color: $orange;
            &::before{
                transform: scaleX(1);
            }
        }
    }
    .btn{
        margin-top: 3rem;
        height: auto;
        width: 10rem;
        margin: 0 auto;
        display:block;
        text-decoration: none;
        &:hover{
            background-color: $orange;
        }
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: auto;
    }
    a{
        text-decoration: none;
    }
</style>