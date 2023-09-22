<script lang="ts">
    let darkMode: boolean = true;
    function handleSwitchDarkMode(){
        darkMode != darkMode;
        darkMode 
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }
</script>

<div>
    <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
    <label for="theme-toggle" />
</div>