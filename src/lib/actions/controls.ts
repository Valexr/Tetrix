import { game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import { clamp } from '$lib/utils';
import type { Directions } from '$types';

export function controls(field: HTMLElement, state: string) {

    function update(state?: string) {
        if (state === 'play') {
            window.onkeydown = keyboardHandler
            // field.onclick = clickHandler
            field.onpointerdown = pointerDown
            field.onpointerup = pointerUp
        } else destroy()
    }

    function destroy() {
        window.onkeydown = null
        // field.onclick = null
        field.onpointerdown = null
        field.onpointerup = null
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
    // function clickHandler(e: MouseEvent) {
    //     const { dataset: { x, y } } = e.target as HTMLElement;
    //     if (x && y) {
    //         const pixel = { x: Number(x), y: Number(y) }
    //         if (figure.include(pixel)) figure.rotate()
    //     }
    // }

    let dx = 0, dy = 0, moved = false

    function pointerDown(e: PointerEvent) {
        const { pageX, pageY, pointerId } = e

        dx = pageX
        dy = pageY

        field.onpointermove = pointerMove
        field.setPointerCapture(pointerId);
    }
    function pointerMove(e: PointerEvent) {
        const { pageX, pageY } = e
        const { offsetWidth, offsetHeight } = field.firstChild as HTMLElement
        const x = pageX - dx
        const y = pageY - dy

        moved = true

        if (Math.abs(x) >= offsetWidth) {
            dx = pageX
            figure.move({ x: clamp(-1, x, 1), y: 0 })
        } else if (Math.abs(y) >= offsetHeight) {
            dy = pageY
            figure.move({ x: 0, y: clamp(0, y, 1) })
        }
    }
    function pointerUp(e: PointerEvent) {
        if (!moved) figure.rotate()
        moved = false
        field.onpointermove = null
        field.releasePointerCapture(e.pointerId);
    }

    return {
        update,
        destroy
    }
}