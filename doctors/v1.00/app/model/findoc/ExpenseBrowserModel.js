Ext.define('Doctors.model.findoc.ExpenseBrowserModel',{
    
    extend : 'AppLib.Model',
    fields : [
        
        {name : 'expense.idexpense', type : 'int'},
        {name : 'mtrl.name', type : 'string'},
        {name : 'expense.amount', type : 'float'},
        {name : 'expense.issuedate', type : 'date'}           
    ]
    
});


