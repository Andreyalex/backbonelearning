// Start the main app logic.
define(['underscore', 'backbone'], 
function (_, Backbone) {

    var App = function(options){
        
        !options || _.extend(this, options);
    
    };
    
    App.prototype.constructor = App;
        
    App.prototype.dispatch = function(request) {

        var app = this;

        request.page || (request.page = request.module);
        require(['modules/'+request.module+'/'+request.module], 
            function(moduleClass){
                new moduleClass(app, request);
        })
    }
        
    App.prototype.run = function() {

        var app = this;

        /*require(
            ['layouts/default/layout'], 
            function(layout){
                app.layout = new layout;
        })*/

        this.router.on('route', function(){
            this.request = {
                'module': arguments[0],
                'params': arguments[1]
            }

            app.dispatch(this.request)
        });

        Backbone.history.start();
    }
    
    return App;
});