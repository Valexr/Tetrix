import { get } from 'svelte/store'
import { field, game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import type { Directions } from '$types';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

export function controls(board: HTMLElement) {
    // const RO = new ResizeObserver(([{ contentRect }]) => {
    //     const { width, height } = contentRect;
    //     const cell = $field.cell + $field.gap;
    //     field.set({
    //         width: Math.round(width / cell),
    //         height: Math.round(height / cell),
    //         cell: $field.cell,
    //         gap: $field.gap,
    //     });
    // });

    // RO.observe(area);

    window.onkeydown = (e) => keyboardHandler(e);
    // board.onclick = (e) => clickHandler(e as ClickEvent);

    function keyboardHandler(e: KeyboardEvent) {
        if (get(game).state !== "play") return;
        if (e.key.includes("Arrow")) {
            const side = e.key.replace("Arrow", "") as Directions;
            figure.move(side);
        } else if (e.key.includes(" ")) {
            e.preventDefault();
            figure.rotate()

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