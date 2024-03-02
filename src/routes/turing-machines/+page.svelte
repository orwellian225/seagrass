<script lang="ts">
    import Katex from 'svelte-katex';
</script>

<article class="w-full h-full p-2 flex justify-start items-start flex-col gap-2">
    <h3 class="text-3xl">Information</h3>

    <section>
        <h4 class="text-xl">The Turing Machine</h4>
    </section>

    <section>
        <h4 class="text-xl">Conventions</h4>

        <ol class="w-full pl-4 list-inside list-[upper-roman]">
            <li>2-Way Tape - - <a href="/turing-machines/misc/one-way" class="border-x-2 px-2 border-rose-of-sharon-700 rounded-md hover:border-b-2">1-Way Equivalence Proof</a></li>
            <li>
                Tapehead Movement: <Katex>D = \left{'{'} L, R, S \right{'}'}</Katex>
                <ul class="pl-2 list-inside list-none">
                    <li><Katex>L</Katex> - Move Tapehead Left</li>
                    <li><Katex>R</Katex> - Move Tapehead Left</li>
                    <li><Katex>S</Katex> - Keep Tapehead Stationary - <a href="/turing-machines/misc/stationary-tapehead" class="border-x-2 px-2 border-rose-of-sharon-700 rounded-md hover:border-b-2">Equivalence Proof</a></li>
                </ul>
            </li>
        </ol>
    </section>

    <section>
        <h4 class="text-xl">Encoding</h4>
    </section>

    <section>
        <h4 class="text-xl">Resources</h4>

        <ul class="w-full list-inside list-disc">
            <li><a class="underline text-rose-of-sharon-700 hover:text-rose-of-sharon-900" href="https://en.wikipedia.org/wiki/Turing_machine">Turing Machines</a> - Wikipedia</li>
            <li><a class="underline text-rose-of-sharon-700 hover:text-rose-of-sharon-900" href="https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf">'On computable numbers...'</a> - Alan Turing</li>
        </ul>
    </section>

</article>