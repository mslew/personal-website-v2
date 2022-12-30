<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import '../../fonts.scss';
    let visible = false;

    onMount(() => {
        setTimeout(raiseBar, 7250);
    });

    function raiseBar(){
        visible = true;
    }
</script>

{#if visible}
<div transition:fly="{{ y: 100, duration: 200 }}" class="email">
    <a class="text" href = "mailto:max@maximuslewis.com" target = "_blank">mlew3223@gmail.com</a>
    <hr />
</div>
{/if}

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    .email{
        display: flex;
        position: fixed;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        bottom: 0;
        right: 3%;
        padding-bottom: 1rem;
        height: 18rem;
    }
    .text{
        color: $light-gray;
        font-family: $font-regular;
        writing-mode: vertical-rl;
        font-size: 1.1rem;
        text-decoration: none;
        &:hover{
            animation: raise .25s linear;
            animation-fill-mode: forwards;
            color: $orange;
        }
    }
    hr{
        border-left: .25rem solid black;
        height: 8rem;
    }
    @keyframes raise {
        to {
            transform: translateY(-3px);
        }
    }
</style>