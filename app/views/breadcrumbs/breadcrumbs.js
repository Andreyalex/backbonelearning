
// Должен получить 
// - роутер чтобы знать о происходящих изменениях
// - темплейт
// Должен предоставить возможность сетить бредкрамбсы

define(['backbone'], function(Backbone){
    
    var ViewBreadcrumbs = Backbone.View.extend({
        
        initialize: function(options){
            
            this.router = options.router || null;
            this.template = options.template || 'default.html';
            
            // Subscribe to router's event to update our appearance
        }
    });
    
    return ViewBreadcrumbs;
})


