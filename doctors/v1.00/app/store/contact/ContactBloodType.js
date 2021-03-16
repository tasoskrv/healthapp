Ext.define(APPNAME+'.store.contact.ContactBloodType', {
    extend  : 'Ext.data.Store',
    
    fields: ['idbloodtype', 'bloodtype'],
    data : [
        {idbloodtype:1, bloodtype:"AB"},
        {idbloodtype:2, bloodtype:"A"},   
        {idbloodtype:3, bloodtype:"B"},  
        {idbloodtype:4, bloodtype:"O+"},   
        {idbloodtype:5, bloodtype:"O-"},   
        {idbloodtype:6, bloodtype:"Αδιάφορο"}   
    ]
    
    
});


