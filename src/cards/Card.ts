import { Suite } from './Suites'
import Rank from './Rank'

class CardCompareResult {
    greaterThan: Boolean = false
    lessThan: Boolean = false
    equal: Boolean = false
    sameColor: Boolean = false
    sameSuite: Boolean = false
}

class Card {
    suite: Suite
    rank: Rank
    constructor(rank: Rank, suite: Suite) {
        this.rank = rank
        this.suite = suite
    }

    public toString = (): String => `${this.rank} of ${this.suite.name}`
    public compare(card: Card): CardCompareResult {
        let result = new CardCompareResult()

        const compare: Number = this.rank - card.rank
        if (compare > 1) result.greaterThan = true
        else if (compare < 1) result.lessThan = true
        else result.equal = true

        if (typeof(this.suite) === typeof(card.suite)) {
            result.sameSuite = true
            result.sameColor = true
        }
        else if (this.suite.color === card.suite.color){
            result.sameColor = true
        }

        return result
    }
}