<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Logo from './icons/Logo.svelte';
    let prevScrollpos = window.pageYOffset;
	let visible = false;
    let link1 = false;
    let link2 = false;
    let link3 = false;
    let link4 = false;
    let button = false;
    let i = 0; 
    onMount(() => {
        setTimeout(flyDown, 4000)
        setTimeout(dropLinks, 4500)
        window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos < prevScrollpos) {
                visible = true;
            } else {
                visible = false;
            }
            prevScrollpos = currentScrollPos;
        }
    });

    function flyDown (){
        visible = true
    }

    function dropLinks() {         
    setTimeout(function() {                      
        if (i < 5) { 
            if(!link1 && i === 0){
                link1 = true
            } 
            else if(!link2 && i === 1){
                link2 = true
            }  
            else if(!link3 && i === 2){
                link3 = true
            } 
            else if(!link4 && i === 3){
                link4 = true
            } 
            else if(!button && i === 4){
                button = true
            } 
            i++;
        dropLinks();              
        }                      
    }, 200)
    }
</script>
  
{#if visible}
<nav in:fly="{{ y: -100, duration: 1000 }}" class="navbar navbar-expand-lg navbar-dark bg-dark" out:fly="{{ y: -100, duration: 1000 }}">
    <a class="navbar-brand" href="/"><Logo /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        {#if link1}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#intro"><span class="special">00</span><span class="link align-text-bottom">Intro</span></a>
        {/if}
        {#if link2}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#about"><span class="special">01</span><span class="link align-text-bottom">About</span></a>
        {/if}
        {#if link3}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#projects"><span class="special">02</span><span class="link align-text-bottom">Projects</span></a>
        {/if}
        {#if link4}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#contact"><span class="special">03</span><span class="link align-text-bottom">Contact</span></a>
        {/if}
        {#if button}
        <a href="../../public/static/Resume.pdf" target="_blank"><button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="btn btn-outline-light">Resume</button></a>
        {/if}
      </div>
    </div>
</nav>
{/if}

<style lang="scss">
    @import '../../variables.scss';
    .navbar{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000000;
    }
    .btn{
        margin-left: 1rem;
        margin-top: .5rem;
        outline: $orange;
    }

    .btn:hover{
        background-color: $orange;
    }

    .link{
        margin-bottom: 1rem;
        margin-right: 1rem; 
    }

    .special{
        color:$orange;
        margin-right: .3rem;
        font-size: 1.6rem;
    }

    .nav-item{
        color: $white;
    }

    .nav-item:hover{
        color: $orange;
    }

    .navbar-toggler{
        margin-right: 4rem;
    }
</style>