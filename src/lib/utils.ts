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

function throttle(
    fn: (args: any) => void,
    ms: number,
    th?: boolean | number,
    wait?: boolean,
    tm?: NodeJS.Timeout
): (args: any) => void {
    return th
        ? (args) => {
            if (!wait) {
                fn(args);
                wait = true;
                clearTimeout(tm);
                tm = setTimeout(() => (wait = false), ms);
            }
        }
        : (args) => fn(args);
}

export { clamp, random, equal, throttle }