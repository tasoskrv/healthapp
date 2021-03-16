Ext.define(APPNAME+'.view.mtrl.MtrlExpensesForm',{
    
    extend : 'AppLib.gui.Form',
    alias  : 'widget.mtrlexpensesform',
        
    initComponent : function(){        
        var me = this;
            me.settings = APPNAME+'.view.mtrl.MtrlExpensesSettings';          
           
        me.items = [{                             
            xtype : 'mtrlexpensesdetails'                                                             
        }];
                   
        me.callParent();   
   }
   
});



