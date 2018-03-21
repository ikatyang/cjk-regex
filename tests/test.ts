import cjk_regex = require('../src/index');

test('letters', () => {
  expect('.').not.toMatch(cjk_regex.letters().toRegExp());
  expect('a').not.toMatch(cjk_regex.letters().toRegExp());
  expect('。').not.toMatch(cjk_regex.letters().toRegExp());
  expect('中').toMatch(cjk_regex.letters().toRegExp());
  expect('ㄅ').toMatch(cjk_regex.letters().toRegExp());
  expect('𬉼').toMatch(cjk_regex.letters().toRegExp());
  expect('あ').toMatch(cjk_regex.letters().toRegExp());
  expect('ㅂ').toMatch(cjk_regex.letters().toRegExp());
  expect('가').toMatch(cjk_regex.letters().toRegExp());
  expect('ퟔ').toMatch(cjk_regex.letters().toRegExp());
  expect('〤').toMatch(cjk_regex.letters().toRegExp());
  expect('𛀂').toMatch(cjk_regex.letters().toRegExp());
  expect('ｦ').toMatch(cjk_regex.letters().toRegExp());
});

test('punctuations', () => {
  expect('.').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('a').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('。').toMatch(cjk_regex.punctuations().toRegExp());
  expect('中').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('ㄅ').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('𬉼').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('あ').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('ㅂ').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('가').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('ퟔ').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('〤').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('𛀂').not.toMatch(cjk_regex.punctuations().toRegExp());
  expect('ｦ').not.toMatch(cjk_regex.punctuations().toRegExp());
});

test('mixed', () => {
  expect('.').not.toMatch(cjk_regex().toRegExp());
  expect('a').not.toMatch(cjk_regex().toRegExp());
  expect('。').toMatch(cjk_regex().toRegExp());
  expect('中').toMatch(cjk_regex().toRegExp());
  expect('ㄅ').toMatch(cjk_regex().toRegExp());
  expect('𬉼').toMatch(cjk_regex().toRegExp());
  expect('あ').toMatch(cjk_regex().toRegExp());
  expect('ㅂ').toMatch(cjk_regex().toRegExp());
  expect('가').toMatch(cjk_regex().toRegExp());
  expect('ퟔ').toMatch(cjk_regex().toRegExp());
  expect('〤').toMatch(cjk_regex().toRegExp());
  expect('𛀂').toMatch(cjk_regex().toRegExp());
  expect('ｦ').toMatch(cjk_regex().toRegExp());
});
