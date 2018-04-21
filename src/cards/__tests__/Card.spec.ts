import 'jest'
import Card from '../Card'
import { Spades, Hearts, Diamonds, Clubs } from '../Suites'
import Rank from '../Rank'

test('Constructor: number card', () => {
  const eightOfSpades = new Card(Rank.EIGHT, Spades)
  expect(eightOfSpades.rank).toBe(8)
  expect(eightOfSpades.rank).toBe(Rank.EIGHT)
  expect(eightOfSpades.suite).toBe(Spades)
})

test('Constructor: face card', () => {
  const queenOfHearts = new Card(Rank.QUEEN, Hearts)
  expect(queenOfHearts.rank).toBe(12)
  expect(queenOfHearts.suite).toBe(Hearts)
})

test('toString', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  expect(aceOfDiamonds.toString()).toBe('ace of diamonds')

  const twoOfSpades = new Card(2, Spades)
  expect(twoOfSpades.toString()).toBe('two of spades')

  const kingOfClubs = new Card(Rank.KING, Clubs)
  expect(kingOfClubs.toString()).toBe('king of clubs')
})

test('compare: lessThan', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  const queenOfHearts = new Card(Rank.QUEEN, Hearts)
  const compare = aceOfDiamonds.compare(queenOfHearts)
  expect(compare.lessThan).toBe(true)
  expect(compare.greaterThan).toBe(false)
  expect(compare.equal).toBe(false)
})

test('compare: greaterThan', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  const queenOfHearts = new Card(Rank.QUEEN, Hearts)
  const compare = queenOfHearts.compare(aceOfDiamonds)
  expect(compare.lessThan).toBe(false)
  expect(compare.greaterThan).toBe(true)
  expect(compare.equal).toBe(false)
})

test('compare: equal', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  const aceOfSpades = new Card(Rank.ACE, Spades)
  const equalCompare = aceOfDiamonds.compare(aceOfSpades)
  expect(equalCompare.lessThan).toBe(false)
  expect(equalCompare.greaterThan).toBe(false)
  expect(equalCompare.equal).toBe(true)
})

test('compare: sameColor', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  const aceOfSpades = new Card(Rank.ACE, Spades)
  const queenOfHearts = new Card(Rank.QUEEN, Hearts)

  const diffColorCompare = aceOfDiamonds.compare(aceOfSpades)
  expect(diffColorCompare.sameColor).toBe(false)

  const sameColorCompare = aceOfDiamonds.compare(queenOfHearts)
  expect(sameColorCompare.sameColor).toBe(true)
})

test('compare: sameSuite', () => {
  const aceOfDiamonds = new Card(Rank.ACE, Diamonds)
  const aceOfHearts = new Card(Rank.ACE, Hearts)
  const queenOfHearts = new Card(Rank.QUEEN, Hearts)

  const diffSuitesCompare = aceOfDiamonds.compare(aceOfHearts)
  expect(diffSuitesCompare.sameSuite).toBe(false)

  const sameSuiteCompare = aceOfHearts.compare(queenOfHearts)
  expect(sameSuiteCompare.sameSuite).toBe(true)
})
