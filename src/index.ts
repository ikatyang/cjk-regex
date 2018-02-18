import unicode = require('unicode-regex');

const punctuation_charset = unicode({
  Block: [
    'CJK_Symbols_And_Punctuation',
    'Hangul_Syllables',
    'Vertical_Forms',
    'CJK_Compatibility_Forms',
    'Small_Form_Variants',
    'Halfwidth_And_Fullwidth_Forms',
  ],
});

const character_charset = unicode({
  Block: [
    'Hangul_Jamo',
    'CJK_Radicals_Supplement',
    'Kangxi_Radicals',
    'Hiragana',
    'Katakana',
    'Bopomofo',
    'Hangul_Compatibility_Jamo',
    'Enclosed_CJK_Letters_And_Months',
    'CJK_Compatibility',
    'CJK_Unified_Ideographs_Extension_A',
    'CJK_Unified_Ideographs',
    'Hangul_Jamo_Extended_A',
    'CJK_Compatibility_Ideographs',
  ],
});

const mixed_charset = character_charset.union(punctuation_charset);

function get_regex() {
  return create_regex(mixed_charset);
}

declare namespace get_regex {
  function characters(): RegExp;
  function punctuations(): RegExp;
}

get_regex.characters = () => create_regex(character_charset);
get_regex.punctuations = () => create_regex(punctuation_charset);

function create_regex(charset: typeof mixed_charset) {
  return charset.toRegExp('g');
}

export = get_regex;
