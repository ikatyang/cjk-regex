import * as cjk from '../src/index.js'
import { test, expect } from 'vitest'

const testCases: {
  [char: string]: 'non-cjk' | 'cjk-letter' | 'cjk-punctuation'
} = {
  '.': 'non-cjk',
  'a': 'non-cjk',
  '。': 'cjk-punctuation',
  '⿱': 'cjk-punctuation',
  '中': 'cjk-letter',
  'ㄅ': 'cjk-letter',
  '𬉼': 'cjk-letter',
  'あ': 'cjk-letter',
  'ㅂ': 'cjk-letter',
  '가': 'cjk-letter',
  'ퟔ': 'cjk-letter',
  '〤': 'cjk-letter',
  '𛀂': 'cjk-letter',
  'ｦ': 'cjk-letter',
  '々': 'cjk-letter',
}

Object.keys(testCases).forEach(character => {
  const category = testCases[character]
  const title = `"${character}" (0x${character
    .charCodeAt(0)
    .toString(16)}) is ${category}`
  test(title, () => {
    switch (category) {
      case 'non-cjk':
        expect(character).not.toMatch(cjk.all().toRegExp())
        expect(character).not.toMatch(cjk.letters().toRegExp())
        expect(character).not.toMatch(cjk.punctuations().toRegExp())
        break
      case 'cjk-letter':
        expect(character).toMatch(cjk.all().toRegExp())
        expect(character).toMatch(cjk.letters().toRegExp())
        expect(character).not.toMatch(cjk.punctuations().toRegExp())
        break
      case 'cjk-punctuation':
        expect(character).toMatch(cjk.all().toRegExp())
        expect(character).not.toMatch(cjk.letters().toRegExp())
        expect(character).toMatch(cjk.punctuations().toRegExp())
        break
      default:
        throw new Error(`Unexpected category "${category}"`)
    }
  })
})
