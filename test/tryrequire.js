'use strict';

const test = require('supertape');
const tryRequire = require('..');

test('tryrequire', (t) => {
    const result = tryRequire('xxx');
    
    t.notOk(result);
    t.end();
});

test('tryrequire', (t) => {
    const result = tryRequire('fs');
    
    t.ok(result);
    t.end();
});
