<script lang="ts" module>
    import { game } from "$lib/stores/game";
    import gh from "$svg/gh.svg";
    import type { Name, Repository } from "$types";

    interface Props {
        name: Name;
        repository: Repository;
    }
</script>

<script lang="ts">
    let { name, repository }: Props = $props();
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
