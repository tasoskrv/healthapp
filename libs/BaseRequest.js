Ext.define('AppLib.BaseRequest', {  
    
    createJSON: function(parameters) {        
        var jsonRequest = {
               "pk"         : parameters.pk,
               "action"     : parameters.action,
               "parameters" : parameters.sendparams
            };                  
        return Ext.JSON.encode(jsonRequest);
    },
    
    ajaxRequest : function(parameters){
        this.makeRequest(parameters);
    },
    
    makeRequest: function(parameters){
        Ext.Ajax.request({
            url: '../../server/RequestHandler.php',
            method: 'POST',
            scope:parameters.scope,
            params: {
                request: this.createJSON(parameters)                
            },
            callback: parameters.callback,
            success: function(xhr, params) {
                console.log(xhr.responseText);
            },
            failfure: function(xhr, params) {
                alert(xhr.responseText);                
            }
        });
    }
});

