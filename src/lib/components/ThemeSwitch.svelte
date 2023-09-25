<script lang="ts">
  import { onMount } from "svelte";

    let darkMode: boolean = false;
    function handleSwitchDarkMode(){
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        darkMode 
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }

    onMount(() =>{
        if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.documentElement.classList.add('dark')
            darkMode = true;
        }else{
            document.documentElement.classList.remove('dark')
            darkMode = false;
        }
    })
</script>

<div>
    <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
    <label for="theme-toggle" />
</div>