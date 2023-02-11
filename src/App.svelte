<script lang="ts" context="module">
    import gh from "$svg/gh.svg";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<header>
    <button>Some</button>
    <h1>
        <a href={repository.url} target="_blank" rel="noreferrer" id="gh">
            {@html gh}
        </a>
        {name}
    </h1>
    <button>Else</button>
</header>

<main>
    <p>Main</p>
</main>

<footer><p>Footer</p></footer>

<style>
    @import "app.css";
</style>
