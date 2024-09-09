<script lang="ts">
    import WorkSection from "$lib/components/WorkSection.svelte";
</script>

<div id="work-tile" class="md:col-span-8 md:col-start-5 col-span-3 md:row-span-6 relative group h-full">
    <div class="absolute inset-0 bg-primary-300 dark:bg-secondary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div>
    <div  class="relative h-full flex flex-col md:gap-6 gap-4 md:p-12 p-6 bg-primary-300 dark:bg-secondary-700 shadow-md rounded-lg">
        <h2 class="font-June md:text-6xl text-4xl">Work</h2>
        <div class="flex flex-col md:gap-6 gap-3">
            <h3 class="font-Hatch md:text-3xl text-2xl font-bold">Professional Experience</h3>
            <WorkSection link="https://lifecloud.com/" svg="/svg/LifeCloudLogo.svg" altText="LifeCloud Logo" title="LifeCloud" date="March 2023 - Present" description="A platform to organize your important documents and financial assets to make life easier for your loved ones when you pass." />
            <WorkSection link="https://www.intern.house/" svg="/svg/InternHouseLogo.svg" altText="Intern.House Logo" title="Intern.House" date="April 2022 - March 2023" description="A startup specializing in helping tech interns find flexible, shared housing in Austin." />
        </div>
        <div class="flex flex-col md:gap-6 gap-3">
            <h3 class="font-Hatch md:text-3xl text-2xl font-bold">Volunteering</h3>        
            <WorkSection link="https://foundcom.org/home-for-the-holidays/" svg="/svg/FoundcomLogo.svg" altText="FoundCom Logo" title="Foundation Communities" date="August 2023 - Present" description="A public-facing app to help nonprofit with their Home for the Holidays project, connecting families in need with sponsors in the community for holiday gifts." />
        </div>
        <div class="flex flex-col md:gap-6 gap-3">
            <h3 class="font-Hatch md:text-3xl text-2xl font-bold">Projects</h3>        
            <WorkSection link="https://www.lightql.com/" svg="/svg/LightQLLogo.svg" altText="LightQL Logo" title="LightQL" date="2022" description="An Open Source Project composed of a lightweight client-side caching library for GraphQL, similar to Apollo Client." />
        </div>
    </div>
</div>
