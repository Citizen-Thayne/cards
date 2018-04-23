import { Card, Rank, Suite } from "@/cards";
import { range, shuffle } from 'lodash'

export default class Deck {
    cards: Card[]

    constructor(cards?: Card[]) {
        this.cards = cards || Deck.generateStandardDeck()
    }

    shuffle(): void {
        this.cards = shuffle(this.cards)
    }
    static generateStandardDeck(): Card[] {
        let cards = []
        for (let suite of Suite.All) {
            for (let rank of range(1, 14)) {
                cards.push(new Card(rank, suite))
            }
        }
        return cards
    }
}