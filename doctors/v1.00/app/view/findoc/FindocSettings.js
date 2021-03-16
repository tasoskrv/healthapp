Ext.define(APPNAME+'.view.findoc.FindocSettings',{
    
    settings : {          
        grid : {            
            formModel : APPNAME+'.model.findoc.FindocFormModel',
            form      : 'findocform',            
            tabPanel  : ''            
        },
        layout : {
            indexLayout     : 'appfindoc',
            browserSelector : 'appfindoc findocbrowser',
            browser         : 'findocbrowser'
        },
        submitTables : ['findoc'],
        primary_table : 'findoc',
        pkFormSelector : 'findocdetails #idfindoc',
        KEYS : {
            PK : 'idfindoc'
        }        
    }   
    
});

    
    



             