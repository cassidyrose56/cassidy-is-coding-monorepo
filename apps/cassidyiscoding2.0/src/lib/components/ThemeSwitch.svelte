<script lang="ts">
    import { browser } from '$app/environment';
  
    let darkMode = true;
  
    const handleSwitchDarkMode = () => {
      darkMode = !darkMode;
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      window.dispatchEvent(new CustomEvent('dark-mode-toggle', { detail: darkMode }));
    }
  
    if (browser) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkMode = true;
      } else {
        document.documentElement.classList.remove('dark');
        darkMode = false;
      }
    }
  </script>
  
  <div class="w-fit h-fit relative">
    <input checked={darkMode} tabindex="0" on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" class="sr-only" />
    <label for="theme-toggle" class="block"><span class="text-[0]">Toggle Dark Mode</span></label>
  </div>

  <style lang="postcss">
    #theme-toggle + label {
        @apply inline-block cursor-pointer h-12 w-12 rounded-full duration-300 content-[''] focus-visible:border-2 focus-visible:border-primary focus-visible:border-solid;
    }

    #theme-toggle:not(:checked) + label {
        @apply bg-primary-500;
    }

    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -18px -16px 1px 1px #ddd;
    }
</style>