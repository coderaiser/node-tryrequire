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
var tryRequire  = require('tryrequire'),
    config      = tryRequire('./config'), /* quitly try to load config */
    info        = tryRequire('./package', {log: true}), /* if error - log it */
    niki        = tryRequire('nicki', {callback: true});
    
    niki(function(error, data) {
        /* if could not load niki - in error would be information about it */
        console.log(error || data);
    });
```

## License

MIT
