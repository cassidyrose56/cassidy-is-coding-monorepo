<script lang="ts">
    import Icon from '@iconify/svelte';
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    let theme = {b1: {}, b2: {}}
    
    const updateGradients = () => {
      if (localStorage.theme === 'dark') {
        theme.b1 = {
          background: `
            radial-gradient(at 20% 30%, rgba(117, 13, 55, 0.9), rgba(255, 153, 102, 0.7) 50%, rgba(117, 13, 55, 0.5) 70.71%),
            linear-gradient(217deg, rgba(117, 13, 55, 0.8), rgba(255, 153, 102, 0.6) 30%, rgba(117, 13, 55, 0.4) 70.71%),
            linear-gradient(127deg, rgba(255, 153, 102, 0.7), rgba(117, 13, 55, 0.5) 40%, rgba(255, 153, 102, 0.3) 70.71%),
            linear-gradient(336deg, rgba(117, 13, 55, 0.6), rgba(255, 153, 102, 0.4) 20%, rgba(117, 13, 55, 0.2) 70.71%),
            radial-gradient(at 60% 60%, rgba(255, 153, 102, 0.8), rgba(117, 13, 55, 0.6) 30%, rgba(255, 153, 102, 0.4) 70.71%)
          `
        };
  
        theme.b2 = {
          background: `
            radial-gradient(at 80% 70%, rgba(117, 13, 55, 0.9), rgba(255, 153, 102, 0.7) 40%, rgba(117, 13, 55, 0.5) 70.71%),
            linear-gradient(17deg, rgba(255, 153, 102, 0.8), rgba(117, 13, 55, 0.6) 20%, rgba(255, 153, 102, 0.4) 70.71%),
            linear-gradient(200deg, rgba(117, 13, 55, 0.7), rgba(255, 153, 102, 0.5) 50%, rgba(117, 13, 55, 0.3) 70.71%),
            linear-gradient(336deg, rgba(255, 153, 102, 0.6), rgba(117, 13, 55, 0.4) 30%, rgba(255, 153, 102, 0.2) 70.71%),
            radial-gradient(at 40% 40%, rgba(117, 13, 55, 0.8), rgba(255, 153, 102, 0.6) 40%, rgba(117, 13, 55, 0.4) 70.71%)
          `
        };
      } else {
        theme.b1 = {
          background: `
            radial-gradient(at 20% 30%, rgba(234, 124, 191, 0.9), rgba(255, 153, 102, 0.7) 50%, rgba(234, 124, 191, 0.5) 70.71%),
            linear-gradient(217deg, rgba(234, 124, 191, 0.8), rgba(255, 153, 102, 0.6) 30%, rgba(234, 124, 191, 0.4) 70.71%),
            linear-gradient(127deg, rgba(255, 153, 102, 0.7), rgba(234, 124, 191, 0.5) 40%, rgba(255, 153, 102, 0.3) 70.71%),
            linear-gradient(336deg, rgba(234, 124, 191, 0.6), rgba(255, 153, 102, 0.4) 20%, rgba(234, 124, 191, 0.2) 70.71%),
            radial-gradient(at 60% 60%, rgba(255, 153, 102, 0.8), rgba(234, 124, 191, 0.6) 30%, rgba(255, 153, 102, 0.4) 70.71%)
          `
        };
  
        theme.b2 = {
          background: `
            radial-gradient(at 80% 70%, rgba(234, 124, 191, 0.9), rgba(255, 153, 102, 0.7) 40%, rgba(234, 124, 191, 0.5) 70.71%),
            linear-gradient(17deg, rgba(255, 153, 102, 0.8), rgba(234, 124, 191, 0.6) 20%, rgba(255, 153, 102, 0.4) 70.71%),
            linear-gradient(200deg, rgba(234, 124, 191, 0.7), rgba(255, 153, 102, 0.5) 50%, rgba(234, 124, 191, 0.3) 70.71%),
            linear-gradient(336deg, rgba(255, 153, 102, 0.6), rgba(234, 124, 191, 0.4) 30%, rgba(255, 153, 102, 0.2) 70.71%),
            radial-gradient(at 40% 40%, rgba(234, 124, 191, 0.8), rgba(255, 153, 102, 0.6) 40%, rgba(234, 124, 191, 0.4) 70.71%)
          `
        };
      }
      gsap.fromTo("#sm-tile", theme.b1, { ...theme.b2, duration: 6, ease: "none", repeat: -1, yoyo: true });
    }

  
    onMount(() => {
      window.addEventListener("storage", function(event) {
        updateGradients()
      })
    })
    
  </script>
  
  <div class="relative group">
    <div class="absolute inset-0 bg-secondary-300 dark:bg-primary-900 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div>
    <div class="relative flex gap-2 bg-secondary-300 dark:bg-primary-900 justify-around items-center lg:col-span-2 md:col-span-3 h-fit w-fit lg:col-start-11 md:col-start-10 md:row-span-1 md:shadow-md rounded-lg md:p-4">
      <a href="https://github.com/cassidyrose56" target="_blank">
        <Icon icon="bxl:github" class="md:text-myWhite text-4xl" />
      </a>
      <a href="https://www.linkedin.com/in/cassidy-r-johnson/">
        <Icon icon="bxl:linkedin-square" class="md:text-myWhite text-4xl" />
      </a>
      <a href="https://medium.com/@cassidyrose56/">
        <Icon icon="bxl:medium" class="md:text-myWhite text-4xl" />
      </a>
    </div>
  </div>