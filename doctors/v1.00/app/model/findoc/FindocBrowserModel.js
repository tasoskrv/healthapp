Ext.define('Doctors.model.findoc.FindocBrowserModel',{
    
    extend : 'AppLib.Model',
    fields : [
        
        {name : 'findoc.idfindoc', type : 'int'},
        {name : 'contact.name', type : 'string'},
        {name : 'paytype.name', type : 'string'},
        {name : 'findoc.transdate', type : 'date'},        
        {name : 'findoc.amount', type : 'float'}               
    ]
    
});


