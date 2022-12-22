<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
	let visible = false;
    let link1 = false;
    let link2 = false;
    let link3 = false;
    let link4 = false;
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
        console.log('hello');                      
        if (i < 4) { 
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
            i++;
        dropLinks();              
        }                      
    }, 250)
    }
</script>
  
{#if visible}
<nav transition:fly="{{ y: -100, duration: 1250 }}" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {#if link1}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#">Intro</a>
        {/if}
        {#if link2}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#">About</a>
        {/if}
        {#if link3}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#">Projects</a>
        {/if}
        {#if link4}
        <a transition:fly="{{ y: -100, duration: 250 }}" class="nav-item nav-link" href="#">Contact</a>
        {/if}
      </div>
    </div>
</nav>
{/if}