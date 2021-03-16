Ext.define(APPNAME+'.view.mtrl.MtrlExpenses',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.appmtrlexpenses',
    requires : [
        APPNAME+'.view.mtrl.MtrlExpensesForm',
        APPNAME+'.view.mtrl.MtrlExpensesBrowser',
        APPNAME+'.view.mtrl.MtrlExpensesDetails'
    ],

    initComponent : function(){        
        var me = this;        
        me.layout = {
            type : 'card'
        }        
        
        me.items = [{
            xtype  : 'mtrlexpensesbrowser',
            itemId : 'mtrlexpensesbrowser'
        },{                
            xtype  : 'mtrlexpensesform',
            itemId : 'mtrlexpensesform'
        }];        
     me.callParent();        
    }
    
});






