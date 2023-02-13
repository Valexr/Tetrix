import { get } from 'svelte/store'
import { board, game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import type { Directions } from '$types';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

export function controls(field: HTMLElement) {
    // const RO = new ResizeObserver(([{ contentRect }]) => {
    //     const { width, height } = contentRect;
    //     const cell = Math.round(height / 20)
    //     board.update(board => Object.assign(board, { cell }))
    // });

    // RO.observe(field);

    window.onkeydown = (e) => keyboardHandler(e);
    field.onclick = (e) => clickHandler(e as ClickEvent);
    // field.onpointerdown = (e) => pointerDown(e);
    // field.onpointermove = (e) => pointerMove(e);
    // field.onpointerup = (e) => pointerUp(e);

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
    function clickHandler(e: ClickEvent) {
        if (get(game).state !== "play") return;
        const { dataset: { x, y } } = e.target;
        if (x && y) {
            const pixel = { x: Number(x), y: Number(y) }
            if (figure.include(pixel)) figure.rotate()
            else {
                let side
                const fig = get(figure)
                side = fig.every(({ x, y }) => x < pixel.x) ? 'Right' : fig.every(({ x, y }) => y < pixel.y) ? 'Down' : 'Left'
                figure.move(side);
            }
        }
    }

    let dx = 0, dy = 0, pressed = false
    function pointerDown(e: PointerEvent) {
        const { dataset: { x, y } } = e.target as HTMLElement;
        const pixel = { x: Number(x), y: Number(y) }
        dx = e.clientX
        dy = e.clientY
        pressed = figure.include(pixel)
    }
    function pointerMove(e: PointerEvent) {
        const side = dy < e.clientY ? 'Down' : dx < e.clientX ? 'Right' : 'Left'
        pressed && setTimeout(() => figure.move(side), 500);
    }
    function pointerUp(e: PointerEvent) {
        pressed = false
    }

    // return {
    //     destroy() {
    //         RO.disconnect();
    //     },
    // };
}