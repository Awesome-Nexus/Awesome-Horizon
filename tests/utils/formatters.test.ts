import { describe, it, expect } from 'vitest'
import { 
  formatResourceCount, 
  slugify, 
  toTitleCase,
  truncateText,
  getCategoryColor 
} from '~/utils/formatters'

describe('formatResourceCount', () => {
  it('formats thousands as k+', () => {
    expect(formatResourceCount(1500)).toBe('1.5k+')
    expect(formatResourceCount(1000)).toBe('1.0k+')
    expect(formatResourceCount(25000)).toBe('25.0k+')
  })

  it('formats millions as M+', () => {
    expect(formatResourceCount(1500000)).toBe('1.5M+')
    expect(formatResourceCount(1000000)).toBe('1.0M+')
  })

  it('returns count+ for numbers under 1000', () => {
    expect(formatResourceCount(500)).toBe('500+')
    expect(formatResourceCount(1)).toBe('1+')
  })
})

describe('slugify', () => {
  it('converts to lowercase', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('replaces spaces with hyphens', () => {
    expect(slugify('multiple word string')).toBe('multiple-word-string')
  })

  it('removes special characters', () => {
    expect(slugify('Hello! World?')).toBe('hello-world')
  })

  it('handles multiple hyphens', () => {
    expect(slugify('hello---world')).toBe('hello-world')
  })
})

describe('toTitleCase', () => {
  it('capitalizes first letter of each word', () => {
    expect(toTitleCase('hello world')).toBe('Hello World')
    expect(toTitleCase('physics resources')).toBe('Physics Resources')
  })

  it('handles already capitalized words', () => {
    expect(toTitleCase('Hello World')).toBe('Hello World')
  })
})

describe('truncateText', () => {
  it('truncates text longer than maxLength', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello...')
  })

  it('returns original text if shorter than maxLength', () => {
    expect(truncateText('Hi', 10)).toBe('Hi')
  })

  it('handles exact length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello')
  })
})

describe('getCategoryColor', () => {
  it('returns correct color for known categories', () => {
    expect(getCategoryColor('physics')).toBe('purple')
    expect(getCategoryColor('chemistry')).toBe('emerald')
    expect(getCategoryColor('biology')).toBe('green')
    expect(getCategoryColor('mathematics')).toBe('blue')
  })

  it('returns gray for unknown categories', () => {
    expect(getCategoryColor('unknown')).toBe('gray')
    expect(getCategoryColor('')).toBe('gray')
  })
})
