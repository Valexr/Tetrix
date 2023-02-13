import { get, readable, writable } from "svelte/store";
import { figure } from "./figure";
import { heap } from "./heap";
import { clamp } from "$lib/utils";
import type { Board, Game } from "$types";

export const board = readable<Board>({
    width: 10,
    height: 20
});

function createGame() {
    const { subscribe, set, update } = writable<Game>()
    set({
        state: '',
        score: 0,
        speed: 1
    })
    function state(state: Game["state"]) {
        update(game => Object.assign(game, { state }))
    }
    function score(score: number) {
        update(game => Object.assign(game, { score }))
    }
    return {
        subscribe, state, score, set,
        start() {
            score(0)
            state('play');
            heap.clear()
            figure.random();
            tick();
        },
        pause() {
            state('pause');
        },
        resume() {
            state('play');
            tick();
        },
        stop() {
            state('stop');
        },
        scoreup() {
            update(game => Object.assign(game, { score: game.score + completed * game.speed }))
        },
        speedup() {
            update(game => Object.assign(game, { speed: clamp(1, game.speed + 1, 10) }))
        }
    }
}

export const game = createGame()

let inheap = false, completed = 0

function tick() {
    setTimeout(() => {
        if (get(game).state === 'play') {
            move()
            tick();
        }
    }, 900 - (80 * get(game).speed));
}

function move() {
    if (heap.full()) game.stop()
    inheap = figure.move('Down');
    if (inheap) {
        heap.add(get(figure))
        completed = heap.check()
        game.scoreup()
        completed && !(get(game).score % 100) && game.speedup()
        figure.random()
    }
}
