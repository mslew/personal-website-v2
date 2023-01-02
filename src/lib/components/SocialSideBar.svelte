<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import GitHub from './icons/GitHub.svelte';
    import LinkedIn from './icons/LinkedIn.svelte';
    import Handshake from './icons/Handshake.svelte';
    import Instagram from './icons/Instagram.svelte';
    let visible = false;

    onMount(() => {
        setTimeout(raiseBar, 6750);
    });

    function raiseBar(){
        visible = true;
    }
</script>

{#if visible}
<div transition:fly="{{ y: 100, duration: 200 }}" class="socials">
<a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub height={30}/></a>
<a class="item" href = "https://www.linkedin.com/in/maximus-lewis-50ba47203/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn height={30}/></a>
<a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake height={30}/></a>
<a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram height={30}/></a>
<hr />
</div>
{/if}

<style lang="scss">
    @import '../../scss/variables.scss';
    path{
        fill: $light-gray;
    }
    .socials{
        display: flex;
        position: fixed;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        bottom: 0;
        left: 3%;
        padding-bottom: 1rem;
        height: 18rem;
    }
    hr{
        border-left: .25rem solid black;
        height: 8rem;
    }
    .item{
        margin-bottom: .5rem;
        &:hover{
            animation: raise .25s linear;
            animation-fill-mode: forwards;
            path{
                fill: $orange;
            }
        }
    }
    @keyframes raise {
        to {
            transform: translateY(-3px);
        }
    }
</style>