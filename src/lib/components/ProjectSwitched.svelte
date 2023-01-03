<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    export let title : string;
    export let techs : string[];
    export let githubIcon : boolean;
    export let externalIcon : boolean; 
    export let github : string;
    export let link : string;
    export let description : string[];
</script>

<div class="row">
    <div class="col-lg-6 description order-2">
        <p>
            {#each description as line}
            {@html line}
            {/each}
        </p>
    </div>
    <div class="col title order-1">
        <div class="title-background">
            <p class="title-text">{@html title}</p>
        </div>
        <div class="technologies">
            <p class="technology">
                {#each techs as tech}
                <p class = "tech">{tech}</p>
                {/each}
            </p>
        </div>
    </div>
    <div class="links order-3">
        {#if externalIcon}
        <a class="iconlink" href={link} target = "_blank" rel="noreferrer" aria-label="" title=""><External class="icon" height={30}/></a>
        {/if}
        {#if githubIcon}
        <a class="iconlink" href={github} target = "_blank" rel="noreferrer" aria-label="" title=""><GitHub class="icon" height={30}/></a>
        {/if}
    </div>
</div>

<style lang="scss">
    @import '../../scss/variables.scss';
    @import '../../scss/mixins.scss';
    .row{
        margin-bottom: 4rem;
        padding: 2rem;
        outline: .15rem solid $orange;
        margin-left: 2.75rem;
        margin-right: 1.25rem;
    }
    .col, .col-lg-6{
        color: $light-gray;
    }
    .description{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .technologies{
        display: flex;
        float: center;
        padding-top: 2rem;
        margin-left: 2rem;
        justify-content: center;
        align-items: center;
        @include media-breakpoint-down(sm){
            float: center;
            margin-right: 2rem;
        }
    }
    .technology{
        display: flex;
        color: $orange;
        margin-left: .5rem;
        font-size: 1.1rem;
        margin-right: .5rem;
        @include media-breakpoint-down(sm){
            display: block;
            text-align: center;
        }
    }
    .tech{
        margin-left: .25rem;
        margin-right: .25rem;
    }
    .links{
        float: right;
        margin-top: 2rem;
    }
    .iconlink{
        padding-left: 1rem;
        float: right;
        &:hover{
            :global(.icon){
                fill: $orange;
            }
        }
    }
    .title-background{
        border-radius: 10px;
        background-color: $medium-gray;
        box-shadow: 3px 3px 3px black;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .title-text{
        font-size: 1.75rem;
        text-align: center;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        color: $white;
        @include media-breakpoint-down(lg){
            font-size: 1.25rem;
        }
        @include media-breakpoint-down(sm){
            font-size: 1.1rem;
        }
    }
</style>