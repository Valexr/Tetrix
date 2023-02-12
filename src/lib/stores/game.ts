import { get, writable } from "svelte/store";
import { figure } from "./figure";
import { heap } from "./heap";
import type { Game } from "$types";
import { clamp } from "$lib/utils";

export const field = writable({
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
            // figure.random();
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
            // snake.set([{ x: 0, y: 0 }])
        },
        scoreup() {
            update(game => Object.assign(game, { score: game.score + 10 * game.speed }))
        },
        speedup() {
            update(game => Object.assign(game, { speed: clamp(1, game.speed + 1, 10) }))
        }
    }
}

export const game = createGame()

let stop = false
function tick() {
    setTimeout(() => {
        if (get(game).state === 'play') {
            if (heap.full()) game.stop()
            stop = figure.move('Down');
            if (stop) {
                heap.add(get(figure))
                figure.random()
                // game.stop()
            }
            console.log(stop)
            tick();
        }
    }, 900 - (80 * get(game).speed));
}
