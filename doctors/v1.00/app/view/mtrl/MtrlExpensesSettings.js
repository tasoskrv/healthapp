Ext.define(APPNAME+'.view.mtrl.MtrlExpensesSettings',{
    
    settings : {          
        grid : {            
            formModel : APPNAME+'.model.mtrl.MtrlExpensesFormModel',
            form      : 'mtrlexpensesform',            
            tabPanel  : ''            
        },
        layout : {
            indexLayout     : 'appmtrlexpenses',
            browserSelector : 'appmtrlexpenses mtrlexpensesbrowser',
            browser         : 'mtrlexpensesbrowser'
        },
        submitTables  : ['mtrl'],
        primary_table : 'mtrl',
        pkFormSelector : 'mtrlexpensesdetails #idmtrl',
        KEYS : {
            PK : 'idmtrl'
        }        
    }   
    
});

    
    



             