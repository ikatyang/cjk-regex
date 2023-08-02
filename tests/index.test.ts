import * as cjk from '../src/index.js'
import { test, expect } from 'vitest'

type TestType = 'non-cjk' | 'cjk-letter' | 'cjk-punctuation'
type TestCases = { [char: string]: TestType }

// BMP
const cjkRadicalsSupplement = '⻁⺪⻏'
const kangxiRadicals = '⽒⽓⽔⽕'
const ideographicDescriptionCharacters = '⿰⿱⿲⿳'
const cjkSymbolsPunctuation = '。「」〒〓〱'
const alsoCjkSymbolsPunctuation = '〻〧〨〤々'
const hiragana = 'あどなにぬ'
const katakana = 'ハヒヘホ'
const bopomofo = 'ㄅㄬㄭㄮㄯ'
const hangulCompatibilityJamo = 'ㅂㅵㅶㅷㅸ'
const kanbun = '㆐㆑㆒㆓'
const bopomofoExtended = 'ㆠㆡ'
const alsoBopomofoExtendedIntroducedInUnicode13 = 'ㆾㆿ'
const cjkStrokes = '㇀㇁㇂㇃㇄㇅㇆㇇㇈㇉㇊㇢㇣'
const katakanaPhoneticExtensions = 'ㇼㇽㇾㇿ'
const enclosedCjkLettersMonths = '㈱㋋㋌㋿'
const cjkCompatibility = '㌕㍕㍖㍗'
const alsoCjkCompatibility = '㍧㍻㍿㏄㏾'
const cjkUnifiedIdeographsExtensionA = '䶼䶽䶾䶿'
const cjkUnifiedIdeographs = '中'
const hangulJamoExtendedA = 'ꥠꥹꥺꥻ'
const hangulSyllables = '가힠힡힢힣'
const hangulJamoExtendedB = 'ퟔퟸퟹퟺퟻ'
const cjkCompatibilityIdeographs = '豈兀﨔隷侮恵並﨎'
const cjkCompatibilityForms = '﹌﹍﹎﹏'
const smallFormVariants = '﹨﹩﹪﹫'
const halfwidthandFullwidthForms = '！Ｄ｢￥￮'
const alsoHalfwidthandFullwidthForms = 'ｦﾕￇ'

// SMP
const kanaExtendedB = '𚿵𚿶𚿷𚿸'
const kanaSupplement = '𛀂𛀀𛀁𛃾𛃿'
const kanaExtendedA = '𛄀𛄁𛄡𛄢'
const smallKanaExtension = '𛅕𛄲𛅤𛅥𛅦𛅧'
const nushu = '𛋸𛋹𛋺𛋻'
const khitanSmallScript = '𘳒𘳓𘳔𘳕'
const cjkUnifiedIdeographsExtensionB = '𪛜𪛝𪛞𪛟'
const cjkUnifiedIdeographsExtensionC = '𫚄𫚅𫜸𫜹'
const cjkUnifiedIdeographsExtensionD = '𫝀𫝁𫝂𫝃'
const cjkUnifiedIdeographsExtensionE = '𬉼𬷰𬷱𬺠𬺡'
const cjkUnifiedIdeographsExtensionF = '𬻿𮨥𮨦𮯠'
const cjkUnifiedIdeographsExtensionG = '𰀀𰀁𱍀𱍊'
const cjkUnifiedIdeographsExtensionH = '𱍐𱍑𲎬𲎭'
const cjkCompatibilityIdeographsSupplement = '乁你鼻𪘀'

const basicLatin = '.a'

function casify(chars: string, t: TestType): TestCases {
  return Object.fromEntries(chars.split('').map(c => [c, t]))
}

const moreTestCases: TestCases = {
  ...casify(cjkRadicalsSupplement, 'cjk-letter'),
  ...casify(cjkSymbolsPunctuation, 'cjk-punctuation'),
  ...casify(alsoCjkSymbolsPunctuation, 'cjk-letter'),
  ...casify(kangxiRadicals, 'cjk-letter'),
  ...casify(ideographicDescriptionCharacters, 'cjk-punctuation'),
  ...casify(hiragana + katakana, 'cjk-letter'),
  ...casify(katakanaPhoneticExtensions, 'cjk-letter'),
  ...casify(
    bopomofo + bopomofoExtended + alsoBopomofoExtendedIntroducedInUnicode13,
    'cjk-letter',
  ),
  ...casify(
    hangulCompatibilityJamo + hangulJamoExtendedA + hangulJamoExtendedB,
    'cjk-letter',
  ),
  ...casify(hangulSyllables, 'cjk-letter'),
  ...casify(cjkCompatibility, 'cjk-letter'),
  ...casify(
    cjkUnifiedIdeographsExtensionA + cjkUnifiedIdeographs,
    'cjk-letter',
  ),
  ...casify(cjkCompatibilityIdeographs, 'cjk-letter'),
  ...casify(
    cjkCompatibilityForms + smallFormVariants + halfwidthandFullwidthForms,
    'cjk-punctuation',
  ),
  ...casify(alsoHalfwidthandFullwidthForms, 'cjk-letter'),
  ...casify(cjkUnifiedIdeographsExtensionE, 'cjk-letter'),
  ...casify(nushu, 'non-cjk'),
  ...casify(khitanSmallScript, 'non-cjk'),
  ...casify(basicLatin, 'non-cjk'),
}

const shouldBeCjkButCurrentlyNotMatched: TestCases = {
  ...casify(kanbun, 'non-cjk'),
  ...casify(cjkStrokes, 'non-cjk'),
  ...casify(enclosedCjkLettersMonths, 'non-cjk'),
  ...casify(alsoCjkCompatibility, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionB, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionC, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionD, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionE, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionF, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionG, 'non-cjk'),
  ...casify(cjkUnifiedIdeographsExtensionH, 'non-cjk'),
  ...casify(cjkCompatibilityIdeographsSupplement, 'non-cjk'),
  ...casify(
    kanaExtendedA + kanaExtendedB + kanaSupplement + smallKanaExtension,
    'non-cjk',
  ),
}

const testCases: TestCases = {
  ...moreTestCases,
  ...shouldBeCjkButCurrentlyNotMatched,
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
