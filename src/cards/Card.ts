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
    constructor(readonly rank: Rank, readonly suite: Suite) { }

    public toString = (): String => `${Rank[this.rank]} of ${this.suite.name}`.toLowerCase()
    public compare(card: Card): CardCompareResult {
        let result = new CardCompareResult()

        const compare: Number = this.rank - card.rank
        if (compare > 0) result.greaterThan = true
        else if (compare < 0) result.lessThan = true
        else result.equal = true

        if (this.suite === card.suite) {
            result.sameSuite = true
            result.sameColor = true
        }
        else if (this.suite.color === card.suite.color) {
            result.sameColor = true
        }

        return result
    }
}

export default Card