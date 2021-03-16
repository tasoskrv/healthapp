Ext.define(APPNAME+'.view.mtrl.MtrlExpensesBrowser',{
    
   extend : 'Ext.container.Container',
   alias : 'widget.mtrlexpensesbrowser',
   mixins: [
        'AppLib.BaseRequest'
    ],
   
   initComponent : function(){       
        var me = this;
        me.items = [{
            xtype       : 'basegrid',
            model       : APPNAME+'.model.mtrl.MtrlExpensesBrowserModel',
            settings    : APPNAME+'.view.mtrl.MtrlExpensesSettings',
            requestData : '{"action":{"select":{"method":[["MtrlExpenses.getMtrlExpenseBrowser"]]}}}',
            sorters     : {"property":"mtrl.idmtrl","direction":"ASC"},
            locateMethod: ['MtrlExpenses.getMtrlExpenseLocate'],
            columns     : [{
               dataIndex : 'mtrl.idmtrl',
               header    : 'idmtrl',
               hidden    : true,
               hideable  : false
            },{
               dataIndex : 'mtrl.code',
               header    : 'Κωδικός',
               flex      : 1
            },{
               dataIndex : 'mtrl.name',
               header    : 'Δαπάνη',
               flex      : 1
            },{
               dataIndex : 'mtrl.comments',
               header    : 'Σχόλια',
               flex      : 1
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
