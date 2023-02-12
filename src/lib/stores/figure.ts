import { get, writable } from "svelte/store";
import { heap } from "./heap";
import type { Cell } from "$types";
import { random } from "$lib/utils";

export const figures = {
    block: [{ x: 4, y: 0 }, { x: 5, y: 0 }, { x: 4, y: 1 }, { x: 5, y: 1 }],
    line: [{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
    line_x: [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }],
    cross: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
    tet: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 1 }],
    let: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
    letr: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }],
    zet: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    zetr: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
}

function createFigure() {
    const { subscribe, set, update } = writable<Cell[]>([])
    const directions = {
        Up: { x: 0, y: -1 },
        Down: { x: 0, y: 1 },
        Left: { x: -1, y: 0 },
        Right: { x: 1, y: 0 },
    };

    set(figures['line_x'])

    return {
        subscribe,
        set,
        random() {
            const keys = Object.keys(figures)
            const figure = keys[keys.length * Math.random() << 0]
            this.get(figure as keyof typeof figures)
        },
        get(figure: keyof typeof figures) {
            set(figures[figure])
        },
        move(direction: keyof typeof directions) {
            let outboard = false
            let inheap = false
            update(figure => {
                const dir = directions[direction]
                const next = figure.map(({ x, y }) => ({ x: x + dir.x, y: y + dir.y }))
                outboard = next.some(({ x, y }) => (x < 0 || y < 0 || x >= 10 || y >= 20))
                inheap = heap.include(next)
                return inheap || outboard ? figure : next
            })
            return inheap || outboard
        },
        rotate() {

        }
    }
}

export const figure = createFigure()