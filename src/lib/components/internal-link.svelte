<script lang="ts">
    export let link: string;
</script>

<a href={link} class="
    px-1
    rounded-md
    border-x-2
    border-green-500
    hover:border-y-2
">
    <slot />
</a>