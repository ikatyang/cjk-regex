import cjk_regex = require('../src/index');

test('characters', () => {
  expect('a').not.toMatch(cjk_regex.characters());
  expect('。').not.toMatch(cjk_regex.characters());
  expect('中').toMatch(cjk_regex.characters());
  expect('あ').toMatch(cjk_regex.characters());
  expect('ㅂ').toMatch(cjk_regex.characters());
});

test('punctuations', () => {
  expect('a').not.toMatch(cjk_regex.punctuations());
  expect('。').toMatch(cjk_regex.punctuations());
  expect('中').not.toMatch(cjk_regex.punctuations());
  expect('あ').not.toMatch(cjk_regex.punctuations());
  expect('ㅂ').not.toMatch(cjk_regex.punctuations());
});

test('mixed', () => {
  expect('a').not.toMatch(cjk_regex());
  expect('。').toMatch(cjk_regex());
  expect('中').toMatch(cjk_regex());
  expect('あ').toMatch(cjk_regex());
  expect('ㅂ').toMatch(cjk_regex());
});
