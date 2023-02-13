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
