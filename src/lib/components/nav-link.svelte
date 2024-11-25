<script lang="ts">
    export let link: string;
</script>

<a href={link} class="
    px-2
    rounded-md
    border-x-2
    border-green-500
    hover:border-y-2
    text-lg
    text-center
    w-fit
    md:w-32
">
    <slot />
</a>