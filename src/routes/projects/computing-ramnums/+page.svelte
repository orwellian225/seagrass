<script lang="ts">
    import InternalLink from "$lib/components/internal-link.svelte"

</script>

<div class="w-full md:w-2/3 h-full flex flex-col justify-start items-center ">
    <h2 class='text-xl border-b-2'>Computing Ramsey Numbers</h2>

    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Table of Contents</h3>

        <ol class="list-decimal list-inside">
            <li>Report: <InternalLink link="/Computing-Ramsey-Numbers.pdf">View</InternalLink></li>
            <li>Poster: <InternalLink link="/CRN-Poster.pdf">View</InternalLink></li>
            <li>Introduction</li>
            <li>Graph Theory</li>
            <li>Ramsey Theory</li>
            <li>Ramsey Numbers as a Decision Problem</li>
            <li>Classical Algorithms</li>
            <li>Quantum Algorithms</li>
        </ol>
    </section>

    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Introduction</h3>

        <p>
            The party problem asks:
            <i>How many people must attend a party, before it can be guarenteed that at least three people have all met, or three people have never met.</i>
            In 1928, Frank Ramsey showed that at least six people would need to attend before this property could be shown, and using this problem as a basis, would invent an entire field of combinatorics and graph theory.
        </p>

        <p>
            The party problem is specifically interested in identifying the relationship of 3 party goers, but there is no reason to restrict this.
            The problem can be reformulated into a graph theory context, where each attendee is a vertex, and their relationship is an edge coloring.
            <i>How many vertices must be in a graph before it can be guarenteed that every edge-coloring has either a red 3 clique, or a blue 3 clique</i>
            This number of vertices is known as the Ramsey Number $R(3,3)$.
            Extending this further, the problem is determining a number $R(k,l)$ with a red $k$-clique or blue $l$-clique.
        </p>

        <p>
            A back of the napkin calculation quickly shows that this is not a trivial endevour.
            The number of graphs with $n$ vertices is {'$2^{n(n - 1)/2}$'}, so the brute force algorithm would need to check {'$O(2^{n^2})$'} graphs.
            A brute force approach to the problem is clearly inadequate and an investigation into the problem is required.
        </p>

        <p>
            To be more explicit, the rest of this article is an investigation into the tractibility of computing a Ramsey Number.
            The Graph Theory fundementals and the field of Ramsey Theory will be explored to identify the underlying principles of the problem.
            Then a theoretical analysis of the problem will be performed to identify the nature of the problem.
            Lastly, several classical and quantum algorithms will be designed and implemented to produce measurable metrics of any computations performance.
        </p>

    </section>

    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Graph Theory</h3>
    </section>
    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Ramsey Theory</h3>
    </section>
    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Ramsey Numbers as a Decision Problem</h3>
    </section>
    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Classical Algorithms</h3>
    </section>
    <section class="w-4/5 md:w-2/3 h-full flex flex-col justify-start items-start py-5 gap-5">
        <h3 class="text-lg border-b-2">Quantum Algorithms</h3>
    </section>
</div>