Ext.define(APPNAME+'.view.findoc.ExpenseBrowser',{
    
   extend : 'Ext.container.Container',
   alias : 'widget.expensebrowser',
   mixins: [
        'AppLib.BaseRequest'
    ],
   
   initComponent : function(){       
        var me = this;
        me.items = [{
            xtype       : 'basegrid',
            model       : APPNAME+'.model.findoc.ExpenseBrowserModel',
            settings    : APPNAME+'.view.findoc.ExpenseSettings',
            requestData : '{"action":{"select":{"method":[["Findoc.getExpenseBrowser"]]}}}',
            sorters     : {"property":"expense.idexpense","direction":"ASC"},
            locateMethod: ['Findoc.getFindocLocate'],
            columns     : [{
               dataIndex : 'expense.idexpense',
               header    : 'idexpense',
               hidden    : true,
               hideable  : false
            },{
               dataIndex : 'mtrl.name',
               header    : 'Δαπάνη',
               flex      : 1
            },{
               dataIndex : 'expense.amount',
               header    : 'Ποσό',
               flex      : 1
            },{
               dataIndex : 'expense.issuedate',
               header    : 'Ημερομηνία',
               flex      : 1,
			   renderer : function(value){
                   return Ext.Date.format(value, 'd/m/Y');
               }
            }],
            gridSort : function(){
                return {
                  sort : false  
                };              
            }
            
        }];
       
       me.callParent();      
   }
    
});

  