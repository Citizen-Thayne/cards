
export enum Color {
    RED = 'red',
    BLACK = 'black'
}

export class Suite {
    constructor(
        readonly color: Color,
        readonly unicode: String,
        readonly name: String
    ) { }
}

export const Hearts = new Suite(Color.RED, '♥', 'hearts')
export const Diamonds = new Suite(Color.RED, '♦', 'diamonds')
export const Clubs = new Suite(Color.BLACK, '♣', 'clubs')
export const Spades = new Suite(Color.BLACK, '♠', 'spades')
export const All: Suite[] = [Hearts, Diamonds, Clubs, Spades]