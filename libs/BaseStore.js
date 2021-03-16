Ext.define('AppLib.BaseStore', {
    
    extend: 'Ext.data.Store',
    
    remoteSort : true,
    pageSize   : this.pageSize || 15,  
    autoLoad : true,
    constructor: function(config) {               
        this.proxy = this.proxy || {
            type: 'ajax',
            url: '../../server/RequestHandler.php',
            actionMethods: {
                read: 'POST'
            },
            reader: {
                type: 'json',
                root: 'data',
                useSimpleAccessors : true,
                totalProperty: 'totalRows'
            },
            extraParams : {
                request : config.requestData
            }
        };
        this.callParent(arguments);
    }

});


