'use strict';

const tryCatch = require('try-catch');

module.exports = (name) => {
    const result = tryCatch(require, name);
    const data = result[1];
    
    return data;
};

