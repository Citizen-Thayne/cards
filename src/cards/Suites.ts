
export enum Color {
    RED = 'red',
    BLACK = 'black'
}

export abstract class Suite {
    abstract color: Color
    abstract unicode: string
    abstract name: string
}

export class Hearts extends Suite {
    color = Color.RED
    unicode = '♥'
    name = 'hearts'
}
export class Diamonds extends Suite {
    color = Color.RED
    unicode = '♦'
    name = 'diamonds'
}
export class Clubs extends Suite {
    color = Color.RED
    unicode = '♣'
    name = 'clubs'
}
export class Spades extends Suite {
    color = Color.RED
    unicode = '♠'
    name = 'spades'
}