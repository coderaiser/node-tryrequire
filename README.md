# Try Require

Try to require and if could not return `undefined`.

## Install

```
npm i tryrequire --save
```

## Options

- log       : will log error when could not load
- callback  : will return function wich will have error parameter.

## How to use?

```js
const tryRequire = require('tryrequire');
const config = tryRequire('./config') || {}; 
```

## License

MIT

