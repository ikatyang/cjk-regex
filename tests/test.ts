import cjk_regex = require('../src/index');

const test_cases: {
  [char: string]: 'non-cjk' | 'cjk-letter' | 'cjk-punctuation';
} = /* prettier-ignore */ {
  '.': 'non-cjk',
  'a': 'non-cjk',
  '。': 'cjk-punctuation',
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
};

Object.keys(test_cases).forEach(character => {
  const category = test_cases[character];
  const title = `"${character}" (0x${character
    .charCodeAt(0)
    .toString(16)}) is ${category}`;
  test(title, () => {
    switch (category) {
      case 'non-cjk':
        expect(character).not.toMatch(cjk_regex().toRegExp());
        expect(character).not.toMatch(cjk_regex.letters().toRegExp());
        expect(character).not.toMatch(cjk_regex.punctuations().toRegExp());
        break;
      case 'cjk-letter':
        expect(character).toMatch(cjk_regex().toRegExp());
        expect(character).toMatch(cjk_regex.letters().toRegExp());
        expect(character).not.toMatch(cjk_regex.punctuations().toRegExp());
        break;
      case 'cjk-punctuation':
        expect(character).toMatch(cjk_regex().toRegExp());
        expect(character).not.toMatch(cjk_regex.letters().toRegExp());
        expect(character).toMatch(cjk_regex.punctuations().toRegExp());
        break;
      default:
        throw new Error(`Unexpected category "${category}"`);
    }
  });
});
