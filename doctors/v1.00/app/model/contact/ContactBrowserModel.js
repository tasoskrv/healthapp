Ext.define(APPNAME+'.model.contact.ContactBrowserModel',{
    
    extend : 'AppLib.Model',
    fields : [
        
        {name : 'contact.idcontact', type : 'int'},
        {name : 'contact.name', type : 'string'},
        {name : 'contact.sodtype', type : 'int'},
        {name : 'contact.job', type : 'string'},
        {name : 'contact.emergencycontact', type : 'string'},
        {name : 'contact.emergencynumber', type : 'string'},
        {name : 'contact.chrontreat', type : 'string'},
        {name : 'contact.address', type : 'string'},
        {name : 'contact.city', type : 'string'},
        {name : 'contact.mobile', type : 'string'}       
        
    ]
    
});


