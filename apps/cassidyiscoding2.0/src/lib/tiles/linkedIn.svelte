<script lang="ts">
  import Icon from '@iconify/svelte'
</script>

<div
  id="sm-tile"
  class="relative w-full group md:col-span-2 col-start-2 lg:row-start-1 md:col-start-9 md:row-span-2"
>
  <a href="https://www.linkedin.com/in/cassidy-r-johnson/" target="_blank" class="block absolute inset-0 z-10">
    <span class="sr-only">Link to Cassidy's LinkedIn</span>
  </a>
  <div class="relative flex bg-tertiary-700 dark:bg-myWhite justify-around items-center h-full md:shadow-md rounded-lg md:p-4">
    <div class="absolute inset-0 bg-tertiary-700 dark:bg-myWhite rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div>
    <Icon icon="bxl:linkedin-square" class="text-myWhite dark:text-tertiary-700 text-6xl relative z-20" />
  </div>
</div>
