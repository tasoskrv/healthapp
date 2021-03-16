Ext.define(APPNAME+'.view.contact.ContactSettings',{    
    settings : {  
        grid : {            
            formModel : APPNAME+'.model.contact.ContactFormModel',
            form      : 'contactform',
            tabPanel  : '#contacttabs'
        },
        layout : {
            indexLayout     : 'appcontact',
            browserSelector : 'appcontact contactbrowser',
            browser         : 'contactbrowser'
        }, 
        submitTables : ['contact'],
        primary_table : 'contact',
        pkFormSelector : 'contactdetails #idcontact',
        KEYS : {
            PK : 'idcontact'
        }
    }   
});


             