import { get } from 'svelte/store'
import { board, game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import type { Directions } from '$types';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

export function controls(field: HTMLElement) {
    const RO = new ResizeObserver(([{ contentRect }]) => {
        const { width, height } = contentRect;
        const cell = Math.round(height / 20)
        board.update(board => Object.assign(board, { cell }))
    });

    // RO.observe(field);

    window.onkeydown = (e) => keyboardHandler(e);
    // field.onclick = (e) => clickHandler(e as ClickEvent);

    function keyboardHandler(e: KeyboardEvent) {
        if (get(game).state !== "play") return;
        if (e.key.includes("Arrow")) {
            const side = e.key.replace("Arrow", "");
            if (side === 'Up') figure.rotate()
            else figure.move(side as Directions);
        } else if (e.key.includes("Escape")) {
            e.preventDefault();
            game.pause();
        }
    }
    // function clickHandler(e: ClickEvent) {
    //     // if ($game.state !== "play") return;
    //     const { dataset } = e.target;
    //     if (Object.keys(dataset).length) {
    //         const axis = !snake.direction.x ? "x" : "y";
    //         const back = Number(dataset[axis]) < snake.head[axis];
    //         const vert = back ? "Up" : "Down";
    //         const horz = back ? "Left" : "Right";
    //         const side = axis === "x" ? horz : vert;

    //         figure.move(side);
    //     }
    // }

    // return {
    //     destroy() {
    //         RO.disconnect();
    //     },
    // };
}