import 'jest'
import Deck from '../Deck'
import { print } from 'util';
import { Suite, Card } from '@/cards';
import { range } from 'lodash';


test('Constructor', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
    
    // Test for 13 of each suite
    for(let suite of Suite.All) {
        expect(deck.cards.filter(c => c.suite === suite).length).toBe(13)
    }

    // Test for 4 of each rank
    for(let n of range(1, 14)) {
        expect(deck.cards.filter(c => c.rank === n).length).toBe(4)
    }
})

test('Constructor: set cards', () => {
    const cards = [
        Card.Random(),
        Card.Random(),
        Card.Random()
    ]
    const deck = new Deck(cards)
    expect(deck.cards.length).toBe(3)
    expect(deck.cards).toBe(cards)
})