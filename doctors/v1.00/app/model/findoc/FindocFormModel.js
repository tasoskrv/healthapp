Ext.define('Doctors.model.findoc.FindocFormModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'findoc.idfindoc', type : 'int'},
        {name : 'findoc.idcontact', type : 'int'},
        {name : 'findoc.idpaytype', type : 'int'},
        {name : 'findoc.idseries', type : 'int'},
        {name : 'findoc.transdate', type : 'date'},
        {name : 'findoc.receiptnumber', type : 'int'},
        {name : 'findoc.amount', type : 'float'},
        {name : 'findoc.completed', type : 'int'},
        {name : 'findoc.reasoning', type : 'string'}               
    ]
    
});


