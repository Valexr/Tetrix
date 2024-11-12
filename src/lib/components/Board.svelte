<script lang="ts" module>
    import { board, game } from "$lib/stores/game";
    import { heap } from "$lib/stores/heap";
    import { figure } from "$lib/stores/figure";
    import { controls } from "$lib/actions/controls";
    import Pixel from "./Pixel.svelte";
</script>

<main>
    <section
        id="board"
        use:controls={$game.state}
        style="--cols: {$board.width}; --rows: {$board.height}"
    >
        {#each { length: $board.height } as _, y}
            {#each { length: $board.width } as _, x}
                <Pixel pixel={{ x, y }} filled={[...$figure, ...$heap]} />
            {/each}
        {/each}
    </section>
</main>
