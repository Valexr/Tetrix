import { game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import { clamp } from '$lib/utils';
import type { Directions } from '$types';

type ClickEvent = MouseEvent & {
    target: EventTarget & { dataset: DOMStringMap };
};

type PEvent = PointerEvent & { currentTarget: EventTarget & HTMLElement }

export function controls(field: HTMLElement, state: string) {

    function update(state?: string) {
        if (state === 'play') {
            window.onkeydown = (e) => keyboardHandler(e);
            field.onclick = (e) => clickHandler(e as ClickEvent);
            field.onpointerdown = (e) => pointerDown(e);
        } else destroy()
    }

    function destroy() {
        window.onkeydown = null
        field.onclick = null
        field.onpointerdown = null
    }

    function keyboardHandler(e: KeyboardEvent) {
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
        const { dataset: { x, y } } = e.target;
        if (x && y) {
            const pixel = { x: Number(x), y: Number(y) }
            if (figure.include(pixel)) figure.rotate()
        }
    }

    let dx = 0, dy = 0

    function pointerDown(e: PointerEvent) {
        const { pageX, pageY } = e

        dx = pageX
        dy = pageY

        field.onpointermove = (e) => pointerMove(e as PEvent);
        field.onpointerup = () => pointerUp();
        field.onpointerleave = () => pointerUp();
    }
    function pointerMove(e: PEvent) {
        const { pageX, pageY } = e
        const { offsetWidth, offsetHeight } = field.querySelector('.pixel') as HTMLElement

        const x = pageX - dx
        const y = pageY - dy

        if (Math.abs(x) >= offsetWidth) {
            dx = pageX
            figure.move({ x: clamp(-1, x, 1), y: 0 })
        } else if (Math.abs(y) >= offsetHeight) {
            dy = pageY
            figure.move({ x: 0, y: clamp(0, y, 1) })
        }

    }
    function pointerUp() {
        field.onpointermove = null
    }

    return {
        update,
        destroy
    }
}