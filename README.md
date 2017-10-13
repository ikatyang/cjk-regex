# cjk-regex

[![npm](https://img.shields.io/npm/v/cjk-regex.svg)](https://www.npmjs.com/package/cjk-regex)
[![build](https://img.shields.io/travis/ikatyang/cjk-regex/master.svg)](https://travis-ci.org/ikatyang/cjk-regex/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/cjk-regex/master.svg)](https://codecov.io/gh/ikatyang/cjk-regex)

regular expression for matching CJK texts

[Changelog](https://github.com/ikatyang/cjk-regex/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save cjk-regex

# using yarn
yarn add cjk-regex
```

## Usage

```js
const get_cjk_regex = require("cjk-regex");

"a".test(get_cjk_regex()); //=> false
"。".test(get_cjk_regex()); //=> true
"中".test(get_cjk_regex()); //=> true

"a".test(get_cjk_regex.characters()); //=> false
"。".test(get_cjk_regex.characters()); //=> false
"中".test(get_cjk_regex.characters()); //=> true

"a".test(get_cjk_regex.punctuations()); //=> false
"。".test(get_cjk_regex.punctuations()); //=> true
"中".test(get_cjk_regex.punctuations()); //=> false
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
