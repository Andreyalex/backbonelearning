

define(
['jquery', 'underscore', 'backbone', 'text!views/product/default.html'], 
function($, _, bb, tmpl){
    
    var view = new bb.View.extend({
        
        initialize: function() {

            if (!this.el && this.options.containerEl) {
                var el = $('<div><div>');
                $(this.options.containerEl).append(el);
                this.setElement(el);
            }
            
            if (!this.el) throw new Exception('Container element required');
        },
        
        render: function() {
            
            var 
                data = _.clone(this.options.model),
                content = _.template(tmpl, data);
                
            this.$el.html(content);    
        }
        
    });
    
    return view;
})