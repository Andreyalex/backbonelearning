define([
    'underscore', 
    'backbone',
    'jquery', 
    'text!modules/home/home.html',
    'collections/products',
    'models/product',
    'views/product/product'
], 
function(
    _,
    Backbone,
    $, 
    tmpl,
    collectionProducts,
    modelProduct,
    viewProduct
){
    
    var _products = null;
    
    var module = function(app, request){
        this.initialize(app, request);
    }    
    
    module.prototype = {
        
        initialize: function(app, request){

            $('[data-position="content-page"]').html(tmpl);

            _products = new collectionProducts([], {
                model: modelProduct
            });

            /**
             * Adds view to page 
             * this - modelProduct
             */ 
            _products.on('add', function(){
                new viewProduct({model: this})
            });

            _products.on('change', function(){
            })
            
            _products.fetch();
        },
        
        renderProduct: function(){
            
        }
    }
    
    return module;
});