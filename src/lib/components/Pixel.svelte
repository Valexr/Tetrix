<script lang="ts" context="module">
    import { equal } from "$lib/utils";
    import type { Cell } from "$types";
</script>

<script lang="ts">
    export let filled: Cell[];
    export let pixel: Cell;

    $: fill = filled.some((cell) => equal(pixel, cell));
</script>

<span class="pixel" data-x={pixel.x} data-y={pixel.y} class:fill />

<style>
    .pixel {
        aspect-ratio: 1;
        background-color: var(--back);
    }
    .pixel.fill {
        position: relative;
        background-color: var(--active);
    }
    .pixel.fill::before,
    .pixel.fill::after {
        position: absolute;
        font-size: smaller;
        color: var(--back);
    }
    .pixel.fill::before {
        content: attr(data-x);
        bottom: 3px;
        left: 3px;
    }
    .pixel.fill::after {
        content: attr(data-y);
        top: 3px;
        right: 3px;
    }
</style>
