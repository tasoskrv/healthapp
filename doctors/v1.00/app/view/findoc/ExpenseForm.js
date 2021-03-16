Ext.define(APPNAME+'.view.findoc.ExpenseForm',{
    
    extend : 'AppLib.gui.Form',
    alias  : 'widget.expenseform',
        
    initComponent : function(){        
        var me = this;
            me.settings = APPNAME+'.view.findoc.ExpenseSettings';          
           
        me.items = [{                             
            xtype : 'expensedetails'                                                             
        }];
                   
        me.callParent();   
   }
});



