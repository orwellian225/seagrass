<article class="flex flex-col gap-5">
    <h3 class="text-3xl">Strengths and Weaknesses of Quantum Computing</h3>

    <ul>
        <li><i>Authors</i>: Charles H. Bennet, Ethan Bernstein, Gilles Brassard, Umesh Vazirani</li>
        <li><i>Date</i>: 12/12/1996</li>
        <li><i>Link</i>: <a href="https://doi.org/10.1137/S0097539796300933" class="underline text-rose-of-sharon-700 hover:text-rose-of-sharon-900">SIAM Journal on Computing</a></li>
        <li><i>Style</i>: Journal article, theoretical</li>
    </ul>

    <section>
        <h4 class="text-xl">Aim</h4>

        <p>
            To show that Quantum Computers do not exhaustively solve all the classical NP problems, and that there exists a set of intractable problems
            for both quantum and classical computing.
        </p>
    </section>

    <section>
        <h4 class="text-xl">Cross Reference</h4>
    </section>

    <section class="flex flex-col gap-2">
        <h4 class="text-xl">Summary</h4>

        <p>
            Quantum Computers can solve classical BPP (bounded-error probablistic polynomial) problems in certain polynomial time with the use of an oracle. It is important to note that
            the problems are in BPP which means they can be solved in polynomial time with a classical TM. A result of this is that BPP is likely
            not equal to BQP (bounded-error probablistic quantum polynomial), and that Quantum Turing Machines are more powerful than Classical Turing Machines.
            An example of this power difference can be seen in Shor's Factorisation Algorithm.
        </p>

        <p>
            An oracle is a proof device that makes it possible to show that if some algorithm A is solvable in polynomial time,(say if A was part of NP) then
            the use of oracle M^A can show that another algorithm B that depends on A can be solved in polynomial time on M^B. An oracle works by existing as a black
            box TM that takes only one time step to invoke and read from.
        </p>

        <p>
            Non-determinism is not simulatable on a QTM. Although it allows for some parrallelism, it is not infinite because of quantum mechanics constraints.
            However, it is possible to gain some speed up, but it is at most quadratic through quantum inference (o(2^n) in classical becomes o(sqrt(2^n)) in quantum).
        </p>

        <p>
            The set of problems probabilistically solvable BQTime by a QTM does not contain any problems from NP. By using an oracle, it is possible to show
            that the probability of deciding a problem in NP is less than 1/8 which falls under BQTime's definition of success 2/3's of the time. Therefore
            any problems that are found in BQTime (and therefore reasonably solvable by a QTM) are not in NP.
        </p>

    </section>
</article>