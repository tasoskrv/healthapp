Ext.define('Doctors.model.findoc.ExpenseFormModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'expense.idexpense', type : 'int'},
        {name : 'expense.idcontact', type : 'int'},
        {name : 'expense.idpaytype', type : 'int'},
        {name : 'expense.idseries', type : 'int'},
        {name : 'expense.transdate', type : 'date'},
        {name : 'expense.receiptnumber', type : 'int'},
        {name : 'expense.amount', type : 'float'},
        {name : 'expense.completed', type : 'int'},
        {name : 'expense.reasoning', type : 'string'}               
    ]
    
});


