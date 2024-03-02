<article class="flex flex-col gap-5">
    <h3 class="text-3xl">Universal Quantum Simulator</h3>

    <ul>
        <li><i>Authors</i>: Seth Lloyd</li>
        <li><i>Date</i>: 23/08/1996</li>
        <li><i>Link</i>: <a href="https://doi.org/10.1126/science.273.5278.1073" class="underline text-rose-of-sharon-700 hover:text-rose-of-sharon-900">Science.org</a></li>
        <li><i>Style</i>: Journal Article, Theoretical</li>
    </ul>

    <section>
        <h4 class="text-xl">Aim</h4>

        <p>To showcase the capability and efficacy of a Universal Quantum Simulator as a Quantum Computing mechanism to solve classically hard computation problems.</p>
    </section>

    <section>
        <h4 class="text-xl">Cross Reference</h4>

        <p>
            It stands to reason, that if you can construct an algorithm that exploits the local quantum system interaction to solve the problem, you could generate an
            exponential speed in calculating some problem. Examples of this can be seen in Wang and Gaiten, Clark where both reports convert an optimisation problem
            into a local quantum system using Hamiltonian time evolution of a qubit register representing a graph, where they take a classicaly super-exponential problem
            and convert into quantum polynomial.
        </p>
    </section>

    <section class="flex flex-col gap-2">
        <h4 class="text-xl">Summary</h4>

        <p>
            Quantum computers can be used as a simulator for quantum systems. A quantum computer can mimic the dynamics of a quantum system under
            evolution. For example, it is possible to simulate a N-spin1/2 quantum system over time using N-qubits.
        </p>

        <p>
            The QC's simulations work by repeatedly applying Hamiltonians onto a system by a controlled distance. This means that in spite of the Hamiltonian's
            fixed direction evolution, we can apply several different Hamiltonians for small distances to coerce the system into the direction we need.
        </p>

        <p>
            Although a simulation appears to provide an exponential compression for an arbitary mxm unitary operator U when compared to classical computing, this
            is not true as it requires the same amount of elementary gate (logic or quantum) operations to construct U. Any large, arbitary operater therefore 
            has the same order of magnitude in complexity for both classical and quantum computing.
        </p>

        <p>
            However, quantum computing is more efficient for local interaction systems, not arbitary systems. All systems that are consistent with special
            and general relativity evolve by local interactions, and thus a quantum computer can be used to model these local systems. A local systems
            requires resources that are proportional to the system for the simulation, but a classical computer requires an exponential amount of resources.
        </p>
    </section>
</article>