import unicode = require('unicode-regex');
import { charset, Charset } from 'regexp-util';

const cjk_letters = unicode({
  Script: ['Han', 'Katakana', 'Hiragana', 'Hangul', 'Bopomofo'],
  General_Category: ['Other_Letter', 'Letter_Number', 'Other_Symbol'],
});

const cjk_punctuations = unicode({
  Block: [
    'CJK_Symbols_And_Punctuation',
    'Vertical_Forms',
    'CJK_Compatibility_Forms',
    'Small_Form_Variants',
    'Halfwidth_And_Fullwidth_Forms',
  ],
}).subtract(cjk_letters);

const cjk_all = charset(cjk_letters, cjk_punctuations);

function cjk_regex() {
  return charset(cjk_all);
}

namespace cjk_regex {
  export function letters() {
    return charset(cjk_letters);
  }
  export function punctuations() {
    return charset(cjk_punctuations);
  }
}

export = cjk_regex;
