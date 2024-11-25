<script lang="ts">
    import InternalLink from "$lib/components/internal-link.svelte"
    import ExternalLink from "$lib/components/external-link.svelte"
</script>

<div class="w-full md:w-2/3 h-full flex flex-col justify-start items-center ">
    <section class="w-2/3 flex md:hidden flex-col justify-center items-center border-b-4">
        <h1 class="text-3xl">Seagrass</h1>
        <h2 class="text-lg md:text-xl">Brendan Griffiths</h2>
    </section>

    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-center py-5 gap-5">
        <article class="flex flex-col gap-2">
            <h3 class="text-lg border-b-2">Who am I</h3>

            <p>
                I am a South African programmer born and raised in the Value.
                I enjoy reading, video games, rock climbing and other stereotypical hobbies.
            </p>

            <p>
                My research interests are in computation and complexity theory.
                I'd like to one day solve <ExternalLink link="https://en.wikipedia.org/wiki/P_versus_NP_problem">P vs NP</ExternalLink>, but until that point I am focusing on Reinforcement Learning and other Machine Learning.
            </p>
        </article>

        <article class="flex flex-col gap-2">
            <h3 class="text-lg border-b-2">What I am doing</h3>

            <p>
                My Masters in CS is focused on teaching RL agents how NOT to do an action, without it first learning to do it.
                This has applications in agent safety and control, but it also helps better understand the dymanics of World Value Functions and how an agent learns.
            </p>

            <p>
                I am also actively researching Complexity Theory both for classical and quantum computers.
                The numerous open questions about everything is awfully tantalizing.
            </p>

            <p>
                In the interrim, I am a freelance software developer, building websites, mobile apps and whatever else strikes my fancy.
                I enjoy systems and game development mostly however, with hobby projects in both fields.
            </p>
        </article>

        <article class="flex flex-col gap-2 w-full">
            <h3 class="text-lg border-b-2">What I have done</h3>

            <ul class="list-disc list-inside">
                <li>BSc (Hons) Thesis: <InternalLink link='/projects/computing-ramnums'>Computing Ramsey Numbers</InternalLink></li>
                <li>BSc Software Design Project: <InternalLink link='/projects/recipio'>Recipio</InternalLink></li>
                <li>BSc Graphics Project: <InternalLink link='/projects/the-magic-library'>The Magic Library</InternalLink></li>
                <li>ThreeJS & AmmoJS Game Engine: <InternalLink link='/projects/w3ads'>W3ads</InternalLink></li>
            </ul>
        </article>

        <article class="flex flex-col gap-2 w-full">
            <h3 class="text-lg border-b-2">Quick Links</h3>

            <ul class="flex flex-row justify-start items-center gap-3 flex-wrap">
                <li><InternalLink link="">Scientific Work</InternalLink></li>
                <li><InternalLink link="">Curriculum Vitae</InternalLink></li>
            </ul>
        </article>
    </section>
</div>