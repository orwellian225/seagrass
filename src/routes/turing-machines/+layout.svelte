<div class="w-full h-full flex flex-row justify-start items-start px-2 gap-4">
    <section class="w-full md:w-1/5 h-full border-r-4 border-blue-500 flex flex-col gap-4 md:py-5 md:px-4">
        <h3 class="text-2xl">Turing Machines</h3>

        <p class="md:text-sm">
            Turing Machines are the brilliant invention of Alan Turing. 'On computable numbers, with an application to the Entscheidungsproblem' 
            pretty much founded the field of Computer Science over night.
        </p>

        <p class="md:text-sm">
            With that in mind, I wanted to better explore their capabilites by building
            a simulator. The simulator is meant to serve a dual-purpose, as a simulator i.e. to mimic the behaviour of a Turing Machine, and as a
            visualizer, to see how to TM might traverse through its internal state machine.
        </p>

        <ul class="w-fit space-y-2">
            <li><a href="/turing-machines" class="text-lg border-x-2 px-2 border-blue-500 rounded-md hover:border-b-2">Info</a></li>
            <li><a href="/turing-machines/simulator" class="text-lg border-x-2 px-2 border-blue-500 rounded-md hover:border-b-2">Simulator</a></li>
            <li><a href="/turing-machines/examples" class="text-lg border-x-2 px-2 border-blue-500 rounded-md hover:border-b-2">Examples</a></li>
        </ul>
    </section>

    <div class="collapse md:visible w-full h-full">
        <slot />
    </div>
</div>