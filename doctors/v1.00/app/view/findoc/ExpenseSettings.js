Ext.define(APPNAME+'.view.findoc.ExpenseSettings',{
    
    settings : {          
        grid : {            
            formModel : APPNAME+'.model.findoc.ExpenseFormModel',
            form      : 'expenseform',            
            tabPanel  : ''            
        },
        layout : {
            indexLayout     : 'appexpense',
            browserSelector : 'appexpense expensebrowser',
            browser         : 'expensebrowser'
        },
        submitTables : ['expense'],
        primary_table : 'expense',
        pkFormSelector : 'expensedetails #idexpense',
        KEYS : {
            PK : 'idexpense'
        }        
    }   
    
});

    
    



             