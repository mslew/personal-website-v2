<script>
    import { onMount } from 'svelte';
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
<section class="h-screen pl-44 pr-44 w-full grid grid-cols-2 grid-rows-1 justify-items-center gap-10" id="about">
    <div class="ml-10">
        <div class="flex flex-row items-center gap-4">
            <p class="text-3xl dark:text-purple-900 p-1 object-bottom text-purple-600">01.</p>
            <p class="text-2xl">About Me</p>
            <div class="border dark:border-white border-black ml-2 pr-72"></div>
        </div>
        <div class="text-xl flex flex-col gap-4">
            <p>
                Growing up in Lockport, Illinois, I have always enjoyed technology. 
                In high school, I decided to take a couple of coding classes because it would be fun. 
                Who would have thought the impact it would have had on my life? 
                I decided to major in Computer Science!
            </p>
            <p> 
                Studying Computer Science and Mathematics at Lewis University 
                has been a mentally challenging, but equally intellectually stimulating time of my life. 
                I have enjoyed my studies so far and I am extremely excited to be a recent graduate and eager to start my career!
            </p>
            <p>
                Here are a few technologies that I know and some I have been working with recently: 
            </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-1 justify-items-center place-items-center text-xl">
            <div class="">
                <ul class="list-square">
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Go</li>
                </ul>
            </div>
            <div class="">
                <ul class="list-square">
                    <li>React</li>
                    <li>Bootstrap 5</li>
                    <li>Sass</li>
                    <li>Tailwind CSS</li>
                </ul>
        </div>
    </div>
    </div>
    <div>
        <div><AboutPicture /></div>
        <p>Me in San Diego!</p>
    </div>
</section>
{/if}

<style lang="postcss">
    li{
        @apply pl-2
    }
    li::marker{
        content: "\25B7";
        @apply dark:text-purple-900 text-purple-600
    }
</style>