Ext.define(APPNAME+'.view.findoc.Expense',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.appexpense',
    requires : [
        APPNAME+'.view.findoc.ExpenseForm',
        APPNAME+'.view.findoc.ExpenseBrowser',
        APPNAME+'.view.findoc.ExpenseDetails'
    ],

    initComponent : function(){        
        var me = this;        
        me.layout = {
            type : 'card'
        }        
        
        me.items = [{
            xtype  : 'expensebrowser',
            itemId : 'expensebrowser'
        },{                
            xtype  : 'expenseform',
            itemId : 'expenseform'
        }];        
     me.callParent();        
    }
    
});






