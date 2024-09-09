
<script lang="ts">
    export let link: string
    export let svg: string
    export let altText: string
    export let title: string
    export let date: string
    export let description: string
</script>

<div class="flex gap-6">
    <a href={link} target="_blank" tabindex="-1">
         <div class="h-16 w-16 bg-primary-700 dark:bg-secondary-500 flex items-center justify-center rounded-md shadow-light-icon shadow-primary-500 dark:shadow-secondary-700">
             <img src={svg} alt={altText} class="h-8 w-auto" />
         </div>
     </a> 
     <div class="flex flex-col gap-2">
        <div class="flex flex-col">
            <a href={link} target="_blank">
                <h4 class="font-Hatch font-semibold text-xl tracking-wide">{title}</h4>
            </a>
            <p class="uppercase font-Hatch text-sm">{date}</p>
        </div>
        <p class="font-Hatch font-light">{description}</p>
     </div>
 </div>