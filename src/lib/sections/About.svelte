<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import AboutPicture from '../components/AboutPicture.svelte';
    let onLoadVisible = true; //MAKE SURE YOU CHANGE THIS BACK CHIEF
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

<style>
</style>