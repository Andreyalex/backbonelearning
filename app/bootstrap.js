requirejs.config({

    //By default load any module IDs from js/lib
    baseUrl: 'tools',
    
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        collections: '../app/collections',
        layouts: '../app/layouts',
        models: '../app/models',
        modules: '../app/modules',
        views: '../app/views'
    },
    
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }    
});

root = window;

// Start the main app logic.
require(['jquery', 'backbone', 'app/config', 'app/router', 'app/app'], 
function ($, Backbone, config, router, App) {

    // Let's create and init our app!

    $(document).ready(function(){
        
        Backbone.emulateJSON = true;
        
        var application = new App({
            'config': config,
            'router': new router()
        });

        application.run();
        
        root.$app = application
    });    
});