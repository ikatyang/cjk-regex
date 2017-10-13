const punctuation_ranges: Range[] = [
  // http://www.unicode.org/charts/PDF/U3000.pdf CJK Symbols and Punctuation
  [0x3000, 0x303f],
  // http://www.unicode.org/charts/PDF/UAC00.pdf Hangul Syllables
  [0xac00, 0xd7af],
  // http://www.unicode.org/charts/PDF/UFE10.pdf Vertical Forms
  [0xfe10, 0xfe1f],
  // http://www.unicode.org/charts/PDF/UFE30.pdf CJK Compatibility Forms
  // http://www.unicode.org/charts/PDF/UFE50.pdf Small Form Variants
  [0xfe30, 0xfe6f],
  // http://www.unicode.org/charts/PDF/UFF00.pdf Halfwidth and Fullwidth Forms
  [0xff00, 0xff60],
  [0xffe0, 0xffef],
];

const character_ranges: Range[] = [
  // http://www.unicode.org/charts/PDF/U1100.pdf Hangul Jamo
  [0x1100, 0x11ff],
  // http://www.unicode.org/charts/PDF/U2E80.pdf CJK Radicals Supplement
  // http://www.unicode.org/charts/PDF/U2F00.pdf Kangxi Radicals
  [0x2e80, 0x2fdf],
  // http://www.unicode.org/charts/PDF/U3040.pdf Hiragana
  // http://www.unicode.org/charts/PDF/U30A0.pdf Katakana
  // http://www.unicode.org/charts/PDF/U3100.pdf Bopomofo
  // http://www.unicode.org/charts/PDF/U3130.pdf Hangul Compatibility Jamo
  [0x3040, 0x318f],
  // http://www.unicode.org/charts/PDF/U3200.pdf Enclosed CJK Letters and Months
  // http://www.unicode.org/charts/PDF/U3300.pdf CJK Compatibility
  // http://www.unicode.org/charts/PDF/U3400.pdf CJK Unified Ideographs Extension A
  [0x3200, 0x4dbf],
  // http://www.unicode.org/charts/PDF/U4E00.pdf CJK Unified Ideographs (Han)
  [0x4e00, 0x9fff],
  // http://www.unicode.org/charts/PDF/UA960.pdf Hangul Jamo Extended-A
  [0xa960, 0xa97f],
  // http://www.unicode.org/charts/PDF/UF900.pdf CJK Compatibility Ideographs
  [0xf900, 0xfaff],
];

type Range = number | [number, number];

function get_regex() {
  return create_regex(character_ranges.concat(punctuation_ranges));
}

// tslint:disable-next-line:no-namespace
namespace get_regex {
  export function punctuations() {
    return create_regex(punctuation_ranges);
  }
  export function characters() {
    return create_regex(character_ranges);
  }
}

function create_regex(ranges: Range[]) {
  return new RegExp(
    `[${ranges.map(get_bracket_content).reduce((a, b) => a + b)}]`,
    'g',
  );
}

function get_bracket_content(range: Range) {
  return typeof range === 'number'
    ? get_escaped_unicode(range)
    : `${get_escaped_unicode(range[0])}-${get_escaped_unicode(range[1])}`;
}

function get_escaped_unicode(num: number) {
  return `\\u${num.toString(16)}`;
}

export = get_regex;
