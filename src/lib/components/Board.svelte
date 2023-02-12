<script lang="ts" context="module">
    import { equal } from "$lib/utils";
    import { writable } from "svelte/store";
    import { field } from "$lib/stores/game";
    import { heap } from "$lib/stores/heap";
    import { figure } from "$lib/stores/figure";
    import { controls } from "$lib/actions/controls";

    import Pixel from "./Pixel.svelte";
    import { game } from "$lib/stores/game";
</script>

<script lang="ts">
    // game.start();
</script>

<main>
    <section id="board" use:controls style="--cols: {$field.width}">
        {#each { length: $field.height } as _, y}
            {#each { length: $field.width } as _, x}
                {@const pixel = { x, y }}
                <Pixel {pixel} filled={[...$figure, ...$heap]} />
            {/each}
        {/each}
    </section>
</main>

<style>
    main {
        padding: 0 1rem;
    }
    #board {
        display: grid;
        grid-template-columns: repeat(var(--cols), auto);
        max-inline-size: 19rem;
        max-block-size: 38rem;
        position: absolute;
        inset: 4rem 0;
        margin: auto;
        gap: 2px;
        user-select: none;
        -webkit-user-select: none;
    }
</style>
