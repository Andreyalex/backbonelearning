
define(['backbone'], function(Backbone){
    
    // First we need to set routes.
    var classAppRouter = Backbone.Router.extend({
        
        routes: {
            "": "home",    // #home
            "about" : "about",
            ":module(/:params)": "module"
          }
    })
    
    return classAppRouter;
})