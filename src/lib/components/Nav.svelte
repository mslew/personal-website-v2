<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Logo from './icons/Logo.svelte';
	let visible = false;
    let link1 = false;
    let link2 = false;
    let link3 = false;
    let link4 = false;
    let button = false;
    let i = 0; 
    onMount(() => {
        setTimeout(flyDown, 4000)
        setTimeout(dropLinks, 5000)
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
<nav transition:fly="{{ y: -100, duration: 1250 }}" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><Logo /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        {#if link1}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="/"><span><span class="special">00</span>Intro</span></a>
        {/if}
        {#if link2}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="/"><span><span class="special">01</span>About</span></a>
        {/if}
        {#if link3}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="/"><span><span class="special">02</span>Projects</span></a>
        {/if}
        {#if link4}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="/"><span><span class="special">03</span>Contact</span></a>
        {/if}
        {#if button}
        <button transition:fly="{{ y: -100, duration: 250 }}" type="button" class="btn btn-outline-light">Resume</button>
        {/if}
      </div>
    </div>
</nav>
{/if}

<style>
    .btn{
        margin-left: 2rem;
        outline: #CC5500;
    }

    .btn:hover{
        background-color: #CC5500;
    }

    span{
        margin-left: 1rem;
        margin-right: .25rem; 
    }

    .special{
        color:#CC5500;
    }

    .nav-item{
        color: aliceblue;
    }

    .nav-item:hover{
        color: #CC5500;
    }

    .navbar-toggler{
        margin-right: 4rem;
    }

    .navbar-toggler-icon{
        margin-right: 1rem;
    }
</style>