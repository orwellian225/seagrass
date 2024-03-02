<script lang="ts">
    import "../app.css"

    import { Github, Linkedin } from "lucide-svelte/icons";
</script>

<svelte:head>
    <title>SeaGrass</title>
</svelte:head>

<svelte:body class="w-screen min-h-screen h-fit bg-stone-50 flex flex-col justify-start items-center gap-10 p-2 overflow-y-auto overflow-x-hidden" />

<header class="w-full h-fit flex flex-col md:flex-row gap-3 md:gap-20 border-b-4 border-rose-of-sharon-700 justify-start items-center md:py-2 md:px-5">
    <a href="/" class="border-x-4 px-10 border-science-blue-600 rounded-md border-b-4 border-b-stone-50 hover:border-b-science-blue-600 flex flex-row gap-5 justify-center items-center">
        <h1 class="text-5xl w-fit">SeaGrass</h1>
        <img src="favicon.svg" width="64" height="64" alt="seagrass">
    </a>

    <section class="w-full h-full flex flex-col justify-center items-center md:items-start px-2 md:px-0">
        <h2 class="text-xl">Brendan Craig Griffiths</h2>
        <p>A stranger with too many thoughts and dreams</p>
    </section>

    <section class="w-full h-fit collapse md:visible flex flex-row gap-2 justify-end items-center">
        <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://github.com/orwellian225"><Github /></a>
        <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://www.linkedin.com/in/brendan-griffiths-65a142226"><Linkedin /></a>
    </section>
</header>

<main class="w-full h-2/5 min-h-fit md:min-h-[86vh] px-2 md:px-5">
    <slot />
</main>

<footer class="w-full h-fit flex flex-row gap-3 border-t-4 border-rose-of-sharon-700 justify-center items-center md:py-2 md:px-5">
    &copy; Brendan Craig Griffiths 2024
</footer>