import type { Cell } from "$types"

function clamp(min: number, num: number, max: number): number {
    return Math.min(Math.max(num, min), max)
};

function random(max: number): number {
    return Math.floor(Math.random() * max)
}

function equal(cell: Cell, pixel: Cell) {
    return cell.x === pixel.x && cell.y === pixel.y
}

export { clamp, random, equal }