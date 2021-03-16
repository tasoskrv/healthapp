Ext.define(APPNAME+'.model.contact.ContactFormModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'contact.idcontact', type : 'int'},
        {name : 'contact.name', type : 'string'},
        {name : 'contact.sodtype', type : 'int'},
        {name : 'contact.birthdate', type : 'date'},
        {name : 'contact.fathername', type : 'string'},
        {name : 'contact.company', type : 'string'},
        {name : 'contact.title', type : 'string'},        
        {name : 'contact.job', type : 'string'},
        {name : 'contact.gender', type : 'int'},
        {name : 'contact.amka', type : 'string'},
        {name : 'contact.irs', type : 'string'},
        {name : 'contact.doy', type : 'string'},
        {name : 'contact.emergencycontact', type : 'string'},
        {name : 'contact.emergencynumber', type : 'string'},                        
        {name : 'contact.recommendation', type : 'string'},
        {name : 'contact.todoctor', type : 'string'},
        {name : 'contact.chrontreat', type : 'string'},            
        {name : 'contact.comments', type : 'string'},
        {name : 'contact.address', type : 'string'},
        {name : 'contact.area', type : 'string'},
        {name : 'contact.postcode', type : 'string'},        
        {name : 'contact.city', type : 'string'},
        {name : 'contact.idcountry', type : 'int'},       
        {name : 'contact.phone', type : 'string'},       
        {name : 'contact.mobile', type : 'string'},       
        {name : 'contact.fax', type : 'string'},       
        {name : 'contact.email', type : 'string'},       
        {name : 'contact.idblood', type : 'int'}               
    ] 
});
