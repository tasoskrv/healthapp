Ext.define(APPNAME+'.store.contact.ContactType', {
    extend  : 'Ext.data.Store',
    
    fields: ['sodtype', 'name'],
    data : [
        {sodtype:1, name:"Ασθενής"},
        {sodtype:0, name:"Άλλο"}   
    ]
    
});


