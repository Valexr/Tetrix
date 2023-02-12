import { get, writable } from "svelte/store";
import { equal } from "$lib/utils";
import type { Cell } from "$types";

function createHeap() {
    const { subscribe, set, update } = writable<Cell[]>([])

    // const initial = Array.from({ length: 5 }, (_, i) => ({ x: i, y: 19 }))
    // console.log(initial)
    // set(initial)

    return {
        subscribe,
        set,
        // get(figure: keyof typeof figures) {
        //     set(figures[figure])
        // },
        clear() {
            set([])
        },
        add(figure: Cell[]) {
            update(heap => [...heap, ...figure])
        },
        include(figure?: Cell[]) {
            return get(this).some((cell) => figure?.some(pixel => equal(cell, pixel)));
        },
        full() {
            return get(this).some(({ x, y }) => !y)
        }
    }
}

export const heap = createHeap()