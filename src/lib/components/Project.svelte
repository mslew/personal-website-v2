<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import External from "./icons/External.svelte";
    export let title : string;
    export let techs : string[];
    export let icons : boolean;
    export let github : string;
    export let link : string;
    export let description : string[];
</script>

<div class="row">
    <div class="col title">
        <div class="title-background">
            <p class="display-6 title-text">{@html title}</p>
        </div>
        <div class="technologies">
            {#each techs as tech}
            <span class="technology">{tech}</span>
            {/each}
        </div>
        {#if icons}
        <div class=links>
            <a class="iconlink" href={github} target = "_blank" rel="noreferrer" aria-label="" title=""><GitHub height={30}/></a>
            <a class="iconlink" href={link} target = "_blank" rel="noreferrer" aria-label="" title=""><External height={30}/></a>
        </div>
        {/if}
    </div>
    <div class="col description">
        <p>
            {#each description as line}
            {@html line}
            {/each}
        </p>
    </div>
</div>

<style lang="scss">
    @import '../../scss/variables.scss';
    @import '../../scss/mixins.scss';
    .row{
        margin-bottom: 4rem;
        padding: 2rem;
        outline: .15rem solid $orange;
    }
    .col{
        color: $light-gray;
    }
    .description{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .technologies{
        padding-top: 2rem;
        justify-content: center;
    }
    .technology{
        color: $orange;
    }
    span{
        font-size: 1.25rem;
        padding-right: 2rem;
    }
    path{
        fill: $light-gray;
    }
    .links{
        float: left;
        margin-top: 2rem;
    }
    .iconlink{
        padding-left: 1rem;
        &:hover{
            path{
                fill: $orange;
            }
        }
    }
    .title-background{
        border-radius: 10px;
        background-color: $medium-gray;
        box-shadow: 3px 3px 3px black;
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
    }
</style>