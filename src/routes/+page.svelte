<script lang="ts">
    import { Github, Linkedin } from "lucide-svelte/icons";
</script>

<div class="w-full h-full flex flex-col md:flex-row gap-5 justify-between items-start px-2 md:px-32 py-5">
    <section class="home-section">
        <h2>Me Things</h2>

        <ul class="w-full space-y-2">
          <li>I'm a South African programmer, born and raised in the Vale. I spend my time programming, reading, and watching movies in far too expensive IMAX cinemas.</li>
          <li>SeaGrass comes from my initials and all round pretentious cleverness. It's just an easy reference for people to find my website! Which you've done a great job of btw :)</li>
          <li class="flex flex-row md:hidden py-1 gap-2 justify-start items-center">
            Useful stuff:
            <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://github.com/orwellian225"><Github /></a>
            <a class="p-1 rounded-xl border-2 border-black hover:border-rose-of-sharon-800" href="https://www.linkedin.com/in/brendan-griffiths-65a142226"><Linkedin /></a>
          </li>
        </ul>
    </section>

    <section class="home-section">
        <h2>Thought Things</h2>

    </section>

    <section class="home-section">
        <h2>Doing Things</h2>

        <ul class="w-full space-y-2">
          <li>BSc Hons Computer Science @ <a class="underline text-rose-of-sharon-900 hover:text-rose-of-sharon-950" href="https://www.wits.ac.za/course-finder/postgraduate/science/computer-science/">Wits</a></li>
          <li>Research Project:<br><a class="border-x-2 px-2 border-rose-of-sharon-700 rounded-md hover:border-b-2" href="/qc">Quantum Computing and Graph Theory</a></li>
        </ul>
    </section>

    <section class="home-section">
        <h2>Done Things</h2>

        <ul class="w-full space-y-2">
          <li>BSc Computer Science @ <a class="underline text-rose-of-sharon-900 hover:text-rose-of-sharon-950" href="https://www.wits.ac.za/course-finder/undergraduate/science/computer-science/">Wits</a></li>
          <li>Made a <a class="underline text-rose-of-sharon-900 hover:text-rose-of-sharon-950" href="https://wits-sg.github.io/CGV-Project/">video game</a> with some friends and for some marks</li>
          <li>Built a <a class="underline text-rose-of-sharon-900 hover:text-rose-of-sharon-950" href="https://recipio.co.za">food and recipe social media</a> with the same friends. We won the best project for it even</li>
        </ul>
    </section>

    <section class="home-section">
        <h2>Cool Things</h2>
    </section>

    <section class="home-section">
        <h2>Stray Things</h2>
    </section>
</div>