<script lang="ts">
    import "../app.css"
</script>

<svelte:head>
    <title>SeaGrass</title>
</svelte:head>

<svelte:body class="w-screen min-h-screen h-fit bg-stone-50 flex flex-col justify-start items-center gap-10 p-2 overflow-y-auto overflow-x-hidden" />

<header class="w-full h-fit flex flex-col md:flex-row gap-3 md:gap-20 border-b-4 justify-start items-center py-1 md:py-2 md:px-5">
    <nav class="flex flex-row items-center space-x-20 justify-center w-full">
        <a href="/">Home</a>
        <a href="/projects/">Projects</a>

        <section class="w-1/4 hidden md:flex flex-col items-center justify-center">
            <h1 class="text-3xl">Seagrass</h1>
            <h2 class="text-lg md:text-xl">Brendan Griffiths</h2>
        </section>

        <a href="/notes/">Notes</a>
        <a href="/blog/">Blog</a>
    </nav>
</header>

<main class="w-full h-2/5 min-h-fit px-2 md:px-5 flex justify-center items-center">
    <slot />
</main>

<footer class="w-full h-fit flex flex-col border-t-4 py-1 justify-center items-center">
    <p>&copy; Brendan Griffiths 2024</p>

    <ul class="flex flex-row gap-2">
        <li>Bluesky</li>
        <li>Twitter</li>
        <li>Github</li>
        <li>Email</li>
    </ul>
</footer>