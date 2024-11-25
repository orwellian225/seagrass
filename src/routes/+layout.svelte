<script lang="ts">
    import "../app.css"

    import NavLink from '$lib/components/nav-link.svelte'
    import ExternalLink from '$lib/components/external-link.svelte'
</script>

<svelte:head>
    <title>SeaGrass</title>
</svelte:head>

<svelte:body class="w-screen min-h-screen h-fit bg-stone-50 flex flex-col justify-start items-center gap-10 p-2 overflow-y-auto overflow-x-hidden" />

<header class="w-full h-fit flex flex-col md:flex-row gap-3 md:gap-20 border-b-4 justify-start items-center py-1 md:py-2 md:px-5">
    <nav class="flex flex-row items-center space-x-10 justify-center w-full py-2 md:py-0">
        <NavLink link="/">Home</NavLink>
        <NavLink link="/projects/">Projects</NavLink>

        <section class="w-1/4 hidden md:flex flex-col items-center justify-center">
            <h1 class="text-3xl">Seagrass</h1>
            <h2 class="text-lg md:text-xl">Brendan Griffiths</h2>
        </section>

        <NavLink link="/notes/">Notes</NavLink>
        <NavLink link="/blog/">Blog</NavLink>
    </nav>
</header>

<main class="w-full h-2/5 min-h-fit px-2 md:px-5 flex justify-center items-center">
    <slot />
</main>

<footer class="w-full h-fit flex flex-col border-t-4 py-1 justify-center items-center gap-2">
    <p>&copy; Brendan Griffiths 2024</p>

    <nav class="flex flex-row gap-2 h-fit">
        <ExternalLink link="https://bsky.app/profile/seagrass255.bsky.social">Bluesky</ExternalLink>
        <ExternalLink link="https://www.linkedin.com/in/brendan-griffiths-65a142226">LinkedIn</ExternalLink>
        <ExternalLink link="https://github.com/orwellian225">Github</ExternalLink>
    </nav>
</footer>