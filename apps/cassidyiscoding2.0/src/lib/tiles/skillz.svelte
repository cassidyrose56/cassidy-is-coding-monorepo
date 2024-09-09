<script lang="ts">
  import { gsap } from 'gsap'
  import { onMount } from 'svelte'

  let darkMode = false

  onMount(() => {
    const tsSelector = document.getElementById('typescript-text')
    tsSelector?.addEventListener('mouseover', () => {
      gsap.to(tsSelector, { yPercent: -70, duration: 0.3, ease: 'sine.in' })
    })
  })

  // const updateGradients = () => {
  //   if (darkMode) {
  //     b1 = {
  //       background: `
  //       radial-gradient(circle at 25% 35%, rgba(255, 153, 102, 0.7), rgba(255, 153, 102, 0) 20%),
  //         radial-gradient(circle at 65% 25%, rgba(234, 124, 191, 0.6), rgba(234, 124, 191, 0) 25%),
  //         radial-gradient(circle at 45% 75%, rgba(76, 243, 255, 1)),
  //         radial-gradient(circle at 40% 70%, rgba(76, 243, 255, 1))
  //       `
  //     };
  //     b2 = {
  //       background: `
  //         radial-gradient(circle at 35% 45%, rgba(234, 124, 191, 0.6), rgba(234, 124, 191, 0) 30%),
  //     radial-gradient(circle at 75% 35%, rgba(255, 153, 102, 0.7), rgba(255, 153, 102, 0) 25%),
  //     radial-gradient(circle at 55% 85%, rgba(76, 243, 255, 1)),
  //     radial-gradient(circle at 40% 70%, rgba(76, 243, 255, 1))
  //       `
  //     };
  //     b3 = {
  //       background: `
  //         radial-gradient(circle at 20% 30%, rgba(234, 124, 191, 0.6), rgba(234, 124, 191, 0) 20%),
  //         radial-gradient(circle at 60% 20%, rgba(255, 153, 102, 0.7), rgba(255, 153, 102, 0) 25%),
  //         radial-gradient(circle at 40% 70%, rgba(76, 243, 255, 1))
  //       `
  //     };
  //   } else {
  //     b1 = {
  //       background: `
  //         radial-gradient(circle at 25% 35%, rgba(76, 243, 255, 0.9), rgba(76, 243, 255, 0) 35%),
  //         radial-gradient(circle at 65% 25%, rgba(255, 153, 102, 0.6), rgba(255, 153, 102, 0) 45%),
  //         radial-gradient(circle at 45% 75%, rgba(234, 124, 191, 0.7), rgba(234, 124, 191, 0) 55%),
  //         radial-gradient(circle at 85% 65%, rgba(76, 243, 255, 0.8), rgba(76, 243, 255, 0) 65%)
  //       `
  //     };
  //     b2 = {
  //       background: `
  //         radial-gradient(circle at 35% 45%, rgba(76, 243, 255, 0.9), rgba(76, 243, 255, 0) 45%),
  //         radial-gradient(circle at 75% 35%, rgba(234, 124, 191, 0.6), rgba(234, 124, 191, 0) 55%),
  //         radial-gradient(circle at 55% 85%, rgba(255, 153, 102, 0.7), rgba(255, 153, 102, 0) 65%),
  //         radial-gradient(circle at 95% 75%, rgba(76, 243, 255, 0.8), rgba(76, 243, 255, 0) 75%)
  //       `
  //     };
  //     b3 = {
  //       background: `
  //         radial-gradient(circle at 20% 30%, rgba(76, 243, 255, 0.9), rgba(76, 243, 255, 0) 40%),
  //         radial-gradient(circle at 60% 20%, rgba(234, 124, 191, 0.6), rgba(234, 124, 191, 0) 50%),
  //         radial-gradient(circle at 40% 70%, rgba(76, 243, 255, 0.8), rgba(76, 243, 255, 0) 60%),
  //         radial-gradient(circle at 80% 60%, rgba(255, 153, 102, 0.7), rgba(255, 153, 102, 0) 70%)
  //       `
  //     };
  //   }

  //   gsap.fromTo("#skillz-tile", b1, {
  //     ...b2,
  //     duration: 6,
  //     yoyoEase: "power1.inOut",
  //     repeat: -1,
  //     onRepeat: () => {
  //       gsap.fromTo("#skillz-tile", b2, {
  //         ...b3,
  //         duration: 6,
  //         yoyoEase: "power1.inOut",
  //         repeat: 1,
  //       });
  //     }
  //   });
  // }

  // let b1 = {};
  // let b2 = {};
  // let b3 = {};

  // const handleDarkModeToggle = (event: CustomEvent) => {
  //   darkMode = event.detail;
  //   updateGradients();
  // }

  // onMount(() => {
  //   darkMode = document.documentElement.classList.contains('dark');
  //   updateGradients();
  //   window.addEventListener('dark-mode-toggle', handleDarkModeToggle as EventListener);
  //   return () => {
  //     window.removeEventListener('dark-mode-toggle', handleDarkModeToggle as EventListener);
  //   };
  // });
</script>

<div
  id="skillz-tile"
  class="md:col-span-4 md:row-span-6 md:row-start-5 col-span-3 md:col-start-1 relative group"
>
  <div
    class="absolute inset-0 bg-tertiary-100 dark:bg-quaternary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"
  ></div>
  <div
    class="relative flex flex-col h-full gap-3 pt-10 bg-tertiary-100 dark:bg-quaternary-700 min-h-fit shadow-md rounded-lg p-6"
  >
    <h2 class="font-June text-4xl">Skills</h2>
    <ul class="font-Hatch font-light text-xl flex flex-col gap-5">
      <li>TypeScript</li>
      <li>React</li>
      <li>Web Accessibility</li>
      <li>Tailwind CSS</li>
      <li>UX/UI Design</li>
      <li>REST APIs</li>
      <li>Node.js</li>
      <li>Responsive Web Design</li>
      <li>Jotai</li>
      <li>Mobile-First Development</li>
      <li>GSAP</li>
      <li>Framer Motion</li>
      <li>Atomic Design System</li>
      <li>GraphQL</li>
      <li>Svelte</li>
    </ul>
  </div>
</div>
