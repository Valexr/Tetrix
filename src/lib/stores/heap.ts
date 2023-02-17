import { get, writable } from "svelte/store";
import { equal } from "$lib/utils";
import { board } from "./game";
import type { Cell } from "$types";

function createHeap() {
    const { subscribe, set, update } = writable<Cell[]>([])

    // const initial = Array.from({ length: 5 }, (_, i) => ({ x: i, y: 19 }))
    // console.log(initial)
    // set(initial)

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
            let completed: number[] = []
            function counter(acc: { [key: string]: number }, { y }: Cell) {
                acc[y] = acc[y] || 0
                acc[y] += 1
                return acc
            }
            update(heap => {
                const rows = heap.reduce(counter, {})
                completed = Object.keys(rows).filter(y => rows[y] === get(board).width).map(Number)
                if (completed.length) {
                    let moved = heap.filter(({ y }) => !completed.includes(y))
                    for (const row of completed) {
                        moved = moved.map(({ x, y }) => {
                            const before = row > y
                            y = before ? y + 1 : y
                            return { x, y }
                        })
                    }
                    return moved
                }
                return heap
            })
            return completed.length
        },
        full() {
            return get(this).some(({ y }) => !y)
        }
    }
}

export const heap = createHeap()