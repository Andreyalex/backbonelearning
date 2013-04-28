/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['backbone', 'app/config'], 
function(Backbone, config){
    
    return Backbone.Collection.extend({
        
        url: config.apiUrl + 'products/fetch'
        
    });
})

