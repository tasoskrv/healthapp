Ext.define(APPNAME+'.store.contact.ContactGender', {
    extend  : 'Ext.data.Store',
    
    fields: ['gender', 'name'],
    data : [
        {gender:1, name:"Άνδρας"},
        {gender:2, name:"Γυναίκα"}   
    ]
    
    
});


