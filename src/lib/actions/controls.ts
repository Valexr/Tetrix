import { get } from 'svelte/store'
import { board, game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import type { Directions } from '$types';
import { clamp, throttle } from '$lib/utils';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

export function controls(field: HTMLElement) {
    window.onkeydown = (e) => keyboardHandler(e);
    field.onclick = (e) => clickHandler(e as ClickEvent);
    // field.onpointerdown = (e) => pointerDown(e);
    // field.onpointermove = (e) => throttle(pointerMove, 500, true);
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
                const fig = get(figure)
                const side = fig.every(({ x, y }) => x < pixel.x)
                    ? 'Right' : fig.every(({ x, y }) => y < pixel.y)
                        ? 'Down' : 'Left'
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
        if (pressed) {
            const { clientX, clientY } = e
            const x = (clientX - dx) % 50
            const y = (clientY - dy)
            console.log(x, y)
            const coords = { x, y }
            figure.move({ x, y: 0 })
        }
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