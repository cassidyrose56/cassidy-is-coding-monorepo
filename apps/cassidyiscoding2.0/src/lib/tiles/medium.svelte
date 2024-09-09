<script lang="ts">
  import Icon from '@iconify/svelte'
</script>

<div
  id="sm-tile"
  class="relative group w-full md:col-span-2 col-start-3 lg:row-start-1 md:col-start-11 md:row-span-2"
>
  <a href="https://medium.com/@cassidyrose56/" target="_blank" class="block absolute inset-0 z-10">
    <span class="sr-only">Link to Cassidy's Medium</span>
  </a>
  <div
    class="relative flex bg-myBlack dark:bg-myWhite justify-around items-center h-full md:shadow-md rounded-lg md:p-4"
  >
    <div
      class="absolute inset-0 bg-myBlack dark:bg-myWhite rounded-lg blur-sm opacity-75 transition duration-1000"
    ></div>
    <Icon icon="bxl:medium" class="text-myWhite dark:text-myBlack text-6xl relative z-20" />
  </div>
</div>
