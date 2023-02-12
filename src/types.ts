export type Name = string

export type Repository = {
    type: string
    url: string
}

export type Game = {
    state: 'play' | 'pause' | 'stop' | '',
    score: number,
    speed: number
}

export type Field = {
    width: number,
    height: number,
    cell: number
    gap: number,
    part: number,
}

export type Cell = {
    x: number,
    y: number,
}

export type Directions = "Down" | "Left" | "Right"