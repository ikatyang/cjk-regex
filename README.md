# cjk-regex

[![npm](https://img.shields.io/npm/v/cjk-regex.svg)](https://www.npmjs.com/package/cjk-regex)
[![build](https://img.shields.io/travis/ikatyang/cjk-regex/master.svg)](https://travis-ci.org/ikatyang/cjk-regex/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/cjk-regex/master.svg)](https://codecov.io/gh/ikatyang/cjk-regex)

regular expression for matching CJK text

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

get_cjk_regex().test("a"); //=> false
get_cjk_regex().test("。"); //=> true
get_cjk_regex().test("中"); //=> true

get_cjk_regex.characters().test("a"); //=> false
get_cjk_regex.characters().test("。"); //=> false
get_cjk_regex.characters().test("中"); //=> true

get_cjk_regex.punctuations().test("a"); //=> false
get_cjk_regex.punctuations().test("。"); //=> true
get_cjk_regex.punctuations().test("中"); //=> false
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
