Ext.define(APPNAME+'.view.findoc.Findoc',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.appfindoc',
    requires : [
        APPNAME+'.view.findoc.FindocForm',
        APPNAME+'.view.findoc.FindocBrowser',
        APPNAME+'.view.findoc.FindocDetails'
    ],

    initComponent : function(){        
        var me = this;        
        me.layout = {
            type : 'card'
        }        
        
        me.items = [{
            xtype  : 'findocbrowser',
            itemId : 'findocbrowser'
        },{                
            xtype  : 'findocform',
            itemId : 'findocform'
        }];        
     me.callParent();        
    }
    
});






