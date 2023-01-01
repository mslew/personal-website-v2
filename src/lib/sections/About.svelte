<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import '../../fonts.scss';
    import viewport from '../../functions/useViewportAction';
    import AboutPicture from '../components/AboutPicture.svelte';
    let opacity = '';
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="about">
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <div class="intro">
                    <p class="sectionNumberHeader">01.</p>
                    <p class="sectionHeader">About Me</p>
                    <hr class="line" />
                </div>
                <div class="card-body content">
                    <p>Growing up in Lockport, Illinois I have always enjoyed
                        technology. In high school I decided to take a couple coding classes
                        because it would be fun. Who would have thought the impact it would
                        have had on my life. I decided to major in Computer Science!
                    </p>
                    <p> Studying Computer Science and Mathematics at Lewis University
                        has been a mentally challenging, but equally intellectually 
                        stimulating time of my life. I have really enjoyed my studies so far and 
                        cannot wait to graduate in May of 2023 to pursue Software Engineering as a career! 
                    </p>
                    <p>
                        Here are a few technologies that I know and some I have been working with recently: 
                    </p>
                    <div class="lists">
                        <div class="list">
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>Go</li>
                            </ul>
                        </div>
                        <div class="list">
                            <ul>
                                <li>Vue.js</li>
                                <li>Bootstrap 5</li>
                                <li>Sass</li>
                                <li>Node.js / Express.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col picture-col">
                <AboutPicture />
            </div>
        </div>
    </div>
</section>
{/if}

<style lang="scss">
    @import '../../variables.scss';
    @import '../../fonts.scss';
    section{
        background-color: var(--background-color);
    }
    .row{
        margin-top: 25rem;
        width: 100%;
        font-family: $font-regular;
        color: $white;
    }
    .intro{
        display: flex;
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
    ul{
        font-size: 1.2rem;
        list-style-type: square;
    }
    li{
        padding-left: 1rem;
        &::marker{
            content: "\25B7";
            color: $orange;
        }
    }
    .lists{
        display: flex;
        justify-content: space-between;
    }
    .list{
        display: inline-block;
    }
    .card-body{
        font-family: $font-regular;
        color: $light-gray;
    }
    .picture-col{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>