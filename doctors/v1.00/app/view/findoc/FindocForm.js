Ext.define(APPNAME+'.view.findoc.FindocForm',{
    
    extend : 'AppLib.gui.Form',
    alias  : 'widget.findocform',
        
    initComponent : function(){        
        var me = this;
            me.settings = APPNAME+'.view.findoc.FindocSettings';          
           
        me.items = [{                             
            xtype : 'findocdetails'                                                             
        }];
                   
        me.callParent();   
   }     
    
});



