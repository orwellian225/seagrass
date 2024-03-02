<div class="w-full h-full flex flex-row justify-start items-start px-2 gap-4">
    <section class="w-full md:w-1/5 h-full border-r-4 border-science-blue-600 flex flex-col gap-4 md:py-5 md:px-4">
        <h3 class="text-2xl">Quantum Computing</h3>

        <ul class="w-fit space-y-2">
            <li><a href="/qc" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">QC Home</a></li>
            <li><a href="/qc" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">QC Misc Notes</a></li>
            <li><a href="/qc/annotated-bibliography" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">Annotated Bibliography</a></li>
            <li><a href="/qc/literature-review" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">Literature Review</a></li>
            <li><a href="/qc/proposal" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">Research Proposal</a></li>
            <li><a href="/qc/report" class="text-lg border-x-2 px-2 border-science-blue-600 rounded-md hover:border-b-2">Research Report</a></li>
        </ul>
    </section>

    <div class="collapse md:visible w-full h-full py-5">
        <slot />
    </div>
</div>