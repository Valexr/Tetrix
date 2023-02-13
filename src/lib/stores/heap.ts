import { get, writable } from "svelte/store";
import { equal } from "$lib/utils";
import type { Cell } from "$types";

function createHeap() {
    const { subscribe, set, update } = writable<Cell[]>([])

    // const initial = Array.from({ length: 5 }, (_, i) => ({ x: i, y: 19 }))
    // console.log(initial)
    // set(initial)


    function reducer(acc: { [key: string]: number }, { y }: Cell) {
        acc[y] = acc[y] || 0
        acc[y] += 1
        return acc
    }

    return {
        subscribe,
        set,
        clear() {
            set([])
        },
        add(figure: Cell[]) {
            update(heap => heap.concat(figure))
        },
        include(figure: Cell[]) {
            return get(this).some((cell) => figure.some(pixel => equal(cell, pixel)));
        },
        check() {
            let completed: number = 0
            update(heap => {
                const filled = heap.reduce(reducer, {})
                const filtered = heap.filter(({ x, y }) => filled[y] !== 10)
                completed = heap.filter(({ x, y }) => filled[y] === 10).length
                const move = (heap.length - filtered.length) / 10
                const moved = filtered.map(({ x, y }) => ({ x, y: y + move }))
                console.log(heap.length, filtered.length)
                return moved
            })
            return completed
        },
        full() {
            return get(this).some(({ x, y }) => !y)
        }
    }
}

export const heap = createHeap()