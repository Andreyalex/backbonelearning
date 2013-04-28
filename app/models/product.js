/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['backbone', 'app/config'], 
function(Backbone, config){
    
    return Backbone.Model.extend({
        
        url: config.apiUrl + 'product/get',
        
        initialize: function(){
            console.log('product created');
        }
    });
})

