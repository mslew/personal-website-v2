<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import AboutPicture from '../components/AboutPicture.svelte';
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="about" in:fade>
    <div class="container mt-5">
        <div class="row">
            <div class="col content">
                <div class="intro">
                    <p class="sectionNumberHeader">01.</p>
                    <p class="sectionHeader">About Me</p>
                    <hr class="line" />
                </div>
                <div class="card-body content">
                    <p>Growing up in Lockport, Illinois, I have always enjoyed technology. 
                        In high school, I decided to take a couple of coding classes because it would be fun. 
                        Who would have thought the impact it would have had on my life? 
                        I decided to major in Computer Science!
                    </p>
                    <p> Studying Computer Science and Mathematics at Lewis University 
                        has been a mentally challenging, but equally intellectually stimulating time of my life. 
                        I have enjoyed my studies so far and I am extremely excited to be a recent graduate and eager to start my career!
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
                                <li>React</li>
                                <li>Bootstrap 5</li>
                                <li>Sass</li>
                                <li>Tailwind CSS</li>
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
    @import '../../scss/variables.scss';
    .row{
        margin-top: 15rem;
        width: 100%;
        color: $white;
        margin-left: 4rem;
        @include media-breakpoint-down(md){
            margin-top: 15rem;
        }
        @include media-breakpoint-down(sm){
            margin-top: 8rem;
        }
    }
    .intro{
        display: flex;
        @include media-breakpoint-down(sm){
            font-size: .8rem;
            margin-right: 5rem;
        } 
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
        @include media-breakpoint-down(md){
            font-size: .8rem;
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
        color: $light-gray;
        @include media-breakpoint-down(md){
            margin-left: 2rem;
            margin-right: 2rem;
        }
    }
    .picture-col{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content{
        @include media-breakpoint-down(xxl){
            margin-right: 5rem;
        }
        @include media-breakpoint-down(sm){
            font-size: .75rem;
        } 
    }
</style>