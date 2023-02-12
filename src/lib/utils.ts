import type { Cell } from "$types"

function clamp(min: number, num: number, max: number): number {
    return Math.min(Math.max(num, min), max)
};

function random(max: number): number {
    return Math.floor(Math.random() * max)
}

function equal(field: Cell, pixel: Cell) {
    return field.x === pixel.x && field.y === pixel.y
}

export { clamp, random, equal }