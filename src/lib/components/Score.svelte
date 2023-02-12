<script lang="ts" context="module">
    import { game } from "$lib/stores/game";
    import gh from "$svg/gh.svg";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<header>
    <p>Score: {$game.score}</p>
    <h1>
        <a href={repository.url} target="_blank" rel="noreferrer" id="gh">
            {@html gh}
        </a>
        {name}
    </h1>
    <p>Speed: {$game.speed}</p>
</header>
