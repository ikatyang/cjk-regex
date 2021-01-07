import { charset, Charset } from 'regexp-util';
import unicode = require('unicode-regex');

const cjk_letters = unicode({
  Script: ['Han', 'Katakana', 'Hiragana', 'Hangul', 'Bopomofo'],
  General_Category: [
    'Other_Letter',
    'Letter_Number',
    'Other_Symbol',
    'Modifier_Letter',
  ],
});

const cjk_punctuations = unicode({
  Block: [
    'CJK_Symbols_And_Punctuation',
    'Vertical_Forms',
    'CJK_Compatibility_Forms',
    'Small_Form_Variants',
    'Halfwidth_And_Fullwidth_Forms',
    'Ideographic_Description_Characters'
  ],
}).subtract(cjk_letters);

const cjk_all = charset(cjk_letters, cjk_punctuations);

function cjk_regex() {
  return charset(cjk_all);
}

declare namespace cjk_regex {
  function letters(): Charset;
  function punctuations(): Charset;
}
cjk_regex.letters = () => charset(cjk_letters);
cjk_regex.punctuations = () => charset(cjk_punctuations);

export = cjk_regex;
