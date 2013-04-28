define(
['jquery', 'text!layouts/default/layout.html'], 
function($, tmpl){
    
    var layout = function(){
        console.log($('body'), tmpl);
        $('body').html(tmpl);
    }
    
    layout.prototype = {
        
        setTemplate: function(tmpl) {
            $('#page inner content')[0].html(tmpl);
        }
    }
    
    return layout;
})
