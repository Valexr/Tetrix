<script lang="ts" module>
    import { equal } from "$lib/utils";
    import type { Cell } from "$types";

    interface Props {
        filled: Cell[];
        pixel: Cell;
    }
</script>

<script lang="ts">
    let { filled, pixel }: Props = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<span
    class="pixel"
    data-x={pixel.x}
    data-y={pixel.y}
    class:fill={filled.some((cell) => equal(pixel, cell))}
/>
