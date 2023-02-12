<script lang="ts" context="module">
    import { game, field } from "$lib/stores/game";
    import { figure, figures } from "$lib/stores/figure";
    // import { snake } from "$lib/snake";
</script>

<script lang="ts">
    let sizes = [
        ["full", 1],
        ["half", 1.5],
        ["quart", 2],
    ];

    // function snakeLength(e: any) {
    //     if ($snake.length < e.target.value) {
    //         snake.unshift({ x: e.target.value - 1, y: 0 });
    //     } else {
    //         snake.pop();
    //     }
    // }
</script>

<nav class:playing={$game.state === "play"}>
    {#if $game.state === "play"}
        <button on:click={game.pause}>Pause</button>
        <button on:click={game.stop}>Stop</button>
    {:else}
        <button
            class="lg"
            on:click={$game.state === "pause" ? game.resume : game.start}
        >
            {$game.state === "pause" ? "Resume" : "Start"}
        </button>
        {#if $game.state !== "pause"}
            <fieldset>
                <label>
                    Speed
                    <input
                        type="number"
                        bind:value={$game.speed}
                        min="1"
                        max="10"
                        maxlength="2"
                        size="3"
                    />
                </label>
                <label>
                    Fugure
                    <select bind:value={$figure}>
                        {#each Object.entries(figures) as [name, value]}
                            <option {value}>{name}</option>
                        {/each}
                    </select>
                </label>
            </fieldset>
        {/if}
    {/if}
</nav>
