<script lang="ts">
    import "../app.css"

    import { Github, Linkedin } from "lucide-svelte/icons";
</script>

<svelte:head>
    <title>SeaGrass</title>
</svelte:head>

<svelte:body class="w-screen min-h-screen h-fit bg-stone-50 flex flex-col justify-start items-center gap-10 p-2 overflow-y-auto overflow-x-hidden" />

<header class="w-full h-fit flex flex-col md:flex-row gap-3 md:gap-10 border-b-4 border-rose-of-sharon-700 justify-start items-center md:py-2 md:px-5">
    <h1 class="text-4xl w-fit"><a href="/">SeaGrass</a></h1>

    <section class="w-full h-full flex flex-col justify-center items-center md:items-start px-2 md:px-0">
        <h2 class="text-xl">Brendan Craig Griffiths</h2>
        <p>A stranger with too many thoughts and dreams</p>
    </section>

    <section class="w-full h-fit collapse md:visible flex flex-row gap-2 justify-end items-center">
        <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://github.com/orwellian225"><Github /></a>
        <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://www.linkedin.com/in/brendan-griffiths-65a142226"><Linkedin /></a>
    </section>
</header>

<main class="w-full h-2/5 min-h-fit md:min-h-[88vh] px-2 md:px-5">
    <slot />
</main>

<footer class="w-full h-fit flex flex-row gap-3 border-t-4 border-rose-of-sharon-700 justify-center items-center md:py-2 md:px-5">
    &copy; Brendan Craig Griffiths 2024
</footer>