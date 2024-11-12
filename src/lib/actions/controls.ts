import { game } from '$lib/stores/game'
import { figure } from '$lib/stores/figure'
import { clamp } from '$lib/utils';
import type { Directions } from '$types';

export function controls(board: HTMLElement, state: string) {

    function update(state?: string) {
        if (state === 'play') {
            window.onkeydown = keyboardHandler
            board.onpointerdown = pointerDown
            board.onpointerup = pointerUp
            board.onclick = (e) => e.preventDefault()
        } else destroy()
    }

    function destroy() {
        window.onkeydown = null
        board.onpointerdown = null
        board.onpointerup = null
        // board.onclick = null
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

    let dx = 0, dy = 0, moved = false

    function pointerDown(e: PointerEvent) {
        const { pageX, pageY, pointerId } = e

        dx = pageX
        dy = pageY

        board.onpointermove = pointerMove
        board.setPointerCapture(pointerId);
    }
    function pointerMove(e: PointerEvent) {
        const { pageX, pageY, width } = e
        const { offsetWidth } = board.firstElementChild as HTMLElement
        const pointer = width === 1 ? offsetWidth : width / devicePixelRatio
        const x = pageX - dx
        const y = pageY - dy

        moved = true

        if (Math.abs(x) >= pointer) {
            dx = pageX
            figure.move({ x: clamp(-1, x, 1), y: 0 })
        } else if (Math.abs(y) >= pointer) {
            dy = pageY
            figure.move({ x: 0, y: clamp(0, y, 1) })
        }
    }
    function pointerUp(e: PointerEvent) {
        if (!moved) figure.rotate()
        moved = false
        board.onpointermove = null
        board.releasePointerCapture(e.pointerId);
    }

    return { update, destroy }
}