(function() {
    'use strict';
    
    var tryCatch    = require('try-catch');
    
    module.exports  = function tryRequire(name, options) {
        var result,
            o       = options || {},
            
            error   = tryCatch(function() {
                result = require(name);
            });
        
        if (error) {
            if (o.log)
                console.error(error.message);
            else if (o.callback)
                result = exec.bind(null, error);
            
            if (o.exit)
                process.exit(1);
        }
        
        return result;
    };
    
    function exec(error, callback) {
        callback(error);
    }
})();
