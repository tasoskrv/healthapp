Ext.define(APPNAME+'.model.contact.ContactHistoryModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'history.idhistory', type : 'int'},
        {name : 'history.idcontact', type : 'int'},               
        {name : 'history.idicd', type : 'int'},        
        {name : 'history.icd', type : 'string'},       
        {name : 'history.surgery', type : 'string'},              
        {name : 'history.description', type : 'string'},              
        {name : 'history.insertdate', type : 'date'},             
        {name : 'history.exitdate', type : 'date'},             
        {name : 'history.created', type : 'date'},
        {name : 'history.updated', type : 'date'}
        
    ]
    
});


