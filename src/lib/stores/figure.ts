import { get, writable } from "svelte/store";
import { heap } from "./heap";
import { equal, random } from "$lib/utils";
import type { Cell } from "$types";

export const figures = {
    B: [{ x: 4, y: -2 }, { x: 5, y: -2 }, { x: 4, y: -1 }, { x: 5, y: -1 }],
    I: [{ x: 4, y: -4 }, { x: 4, y: -3 }, { x: 4, y: -2 }, { x: 4, y: -1 }],
    T: [{ x: 3, y: -2 }, { x: 4, y: -2 }, { x: 5, y: -2 }, { x: 4, y: -1 }],
    L: [{ x: 4, y: -3 }, { x: 4, y: -2 }, { x: 4, y: -1 }, { x: 5, y: -1 }],
    J: [{ x: 5, y: -3 }, { x: 5, y: -2 }, { x: 5, y: -1 }, { x: 4, y: -1 }],
    Z: [{ x: 3, y: -2 }, { x: 4, y: -2 }, { x: 4, y: -1 }, { x: 5, y: -1 }],
    S: [{ x: 3, y: -1 }, { x: 4, y: -1 }, { x: 4, y: -2 }, { x: 5, y: -2 }],
    // X: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }],
}

function createFigure() {
    const { subscribe, set, update } = writable<Cell[]>([])
    const directions = {
        Up: { x: 0, y: -1 },
        Down: { x: 0, y: 1 },
        Left: { x: -1, y: 0 },
        Right: { x: 1, y: 0 },
    };

    let name: string = ''

    return {
        subscribe,
        set,
        name,
        random() {
            const keys = Object.keys(figures)
            name = keys[random(keys.length)]
            this.get(name as keyof typeof figures)
        },
        get(figure: keyof typeof figures) {
            set(figures[figure])
        },
        move(direction: string | Cell) {
            let outboard = false
            let inheap = false
            update(figure => {
                const coord = typeof direction === 'object'
                const dir = coord ? direction : directions[direction as keyof typeof directions]
                const next = figure.map(({ x, y }) => ({ x: x + dir.x, y: y + dir.y }))
                outboard = next.some(({ x, y }) => (x < 0 || x >= 10 || y >= 20))
                inheap = heap.include(next) || next.some(({ x, y }) => (y >= 20))
                return inheap || outboard ? figure : next
            })
            return inheap
        },
        rotate() {
            const point = get(this)[1]
            const xR = (cell: Cell) => point.y - cell.y + point.x
            const yR = (cell: Cell) => point.y - point.x + cell.x
            if (name !== 'B')
                update(figure => {
                    const rotated = figure.map(cell => ({ x: xR(cell), y: yR(cell) }))
                    const outboard = rotated.some(({ x, y }) => (x < 0 || x >= 10 || y >= 20))
                    const inheap = heap.include(rotated)
                    return outboard || inheap ? figure : rotated
                })
        },
        include(cell: Cell) {
            return get(this).some((pixel) => equal(cell, pixel));
        },
    }
}

export const figure = createFigure()