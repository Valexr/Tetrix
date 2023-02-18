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
            else {
                const fig = get(figure)
                const side = fig.every(({ x, y }) => x < pixel.x)
                    ? 'Right' : fig.every(({ x, y }) => y < pixel.y)
                        ? 'Down' : 'Left'
                figure.move(side);
            }
        }
    }

    let dx = 0, dy = 0

    function pointerDown(e: PointerEvent) {
        dx = e.clientX
        dy = e.clientY
        field.onpointermove = (e) => pointerMove(e as PEvent);
        field.onpointerup = () => pointerUp();
        field.onpointerleave = () => pointerUp();
    }
    function pointerMove(e: PEvent) {
        const { clientX, clientY, currentTarget } = e
        const { offsetWidth } = currentTarget.querySelector('.pixel') as HTMLElement
        const x = clientX - dx
        const y = clientY - dy
        dx = e.clientX
        dy = e.clientY

        figure.move({
            x: clamp(-1, Math.round(x / offsetWidth), 1),
            y: clamp(0, Math.round(y / offsetWidth), 1)
        })
    }
    function pointerUp() {
        field.onpointermove = null
    }
}