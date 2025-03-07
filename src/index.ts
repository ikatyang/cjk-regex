import { charset } from 'regexp-util'
import unicode from 'unicode-regex'

const cjkLetters = unicode({
  Script: ['Han', 'Katakana', 'Hiragana', 'Hangul', 'Bopomofo'],
  General_Category: [
    'Other_Letter',
    'Letter_Number',
    'Other_Symbol',
    'Modifier_Letter',
  ],
})

const cjkPunctuations = unicode({
  Block: [
    'CJK_Compatibility',
    'CJK_Symbols_And_Punctuation',
    'Vertical_Forms',
    'CJK_Compatibility_Forms',
    'Small_Form_Variants',
    'Halfwidth_And_Fullwidth_Forms',
    'Ideographic_Description_Characters',
    'Kanbun',
    'CJK_Strokes',
    'Enclosed_CJK_Letters_And_Months',
    'Katakana',
  ],
}).subtract(cjkLetters)

const cjkAll = charset(cjkLetters, cjkPunctuations)

export function all() {
  return charset(cjkAll)
}

export function letters() {
  return charset(cjkLetters)
}

export function punctuations() {
  return charset(cjkPunctuations)
}
