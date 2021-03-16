Ext.define('Doctors.view.action.Action',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.appAction',
    requires : [
        'Doctors.view.action.Form',
        'Doctors.view.action.List'
    ],
    
    initComponent : function(){
        
        var me = this;
        
        me.layout = {
            type : 'card'
        }
        
        me.items = [{
            xtype : 'applistaction',
            itemId :'applistaction'
        },{                
            xtype : 'appactionform',
            itemId :'appactionform'
        }];
                
        
     me.callParent();   
    }
    
});