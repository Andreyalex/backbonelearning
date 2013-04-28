define([], function(){
    
    var _storage = {}
    
    /* singleton */
    var Registry = {

        set: function(key, val) {
            _storage[key] = val;
        },

        get: function(key) {
            return (_storage[key] !== undefined)?
                _storage[key] : null;
        },
        
        remove: function(key) {
            if (_storage[key] !== undefined) {
                delete(_storage[key]);
            }    
        }
    }    
    
    return Registry;
})