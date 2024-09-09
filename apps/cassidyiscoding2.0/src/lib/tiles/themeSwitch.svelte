<script lang="ts">
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
</script>

<div id="theme-tile" class="h-full relative group md:col-span-6 md:row-span-2 col-span-3 md:row-start-3 md:col-start-7">
    <div class="absolute inset-0 bg-secondary dark:bg-tertiary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div>
    <div class="relative flex gap-2 w-full py-8 bg-secondary dark:bg-tertiary-700 justify-around items-center h-full md:shadow-md rounded-lg md:p-4">
        <ThemeSwitch />
    </div>
  </div>