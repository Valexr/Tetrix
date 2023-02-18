import { get } from 'svelte/store'
import { board, game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import type { Directions } from '$types';
import { clamp, throttle } from '$lib/utils';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

type PEvent = PointerEvent & { currentTarget: EventTarget & HTMLElement }

export function controls(field: HTMLElement) {
    window.onkeydown = (e) => keyboardHandler(e);
    field.onclick = (e) => clickHandler(e as ClickEvent);
    field.onpointerdown = (e) => pointerDown(e);

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
        }
    }

    let dx = 0, dy = 0

    function pointerDown(e: PointerEvent) {
        if (get(game).state !== "play") return;
        dx = e.clientX
        dy = e.clientY
        field.onpointermove = (e) => pointerMove(e as PEvent);
        field.onpointerup = () => pointerUp();
        field.onpointerleave = () => pointerUp();
    }
    function pointerMove(e: PEvent) {
        const { clientX, clientY, currentTarget } = e
        const { offsetWidth, offsetHeight } = currentTarget.querySelector('.pixel') as HTMLElement

        const x = clientX - dx
        const y = clientY - dy

        if (Math.abs(x) > offsetWidth) {
            dx = clientX
            figure.move({ x: clamp(-1, x, 1), y: 0 })
        } else if (Math.abs(y) > offsetHeight) {
            dy = clientY
            figure.move({ x: 0, y: clamp(0, y, 1) })
        }

    }
    function pointerUp() {
        field.onpointermove = null
    }
}