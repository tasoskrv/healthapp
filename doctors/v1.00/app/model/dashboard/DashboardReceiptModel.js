Ext.define('Doctors.model.dashboard.DashboardReceiptModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'findoc.amount', type : 'float'},
        {name : 'findoc.transdate', type : 'date'}               
    ]
    
});


