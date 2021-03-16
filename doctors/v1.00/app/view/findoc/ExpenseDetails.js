Ext.define(APPNAME+'.view.findoc.ExpenseDetails',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.expensedetails',
        
    initComponent : function(){
        
         var me = this;
             me.settings = APPNAME+'.view.findoc.ExpenseSettings';                                     
            
        me.items = [{                                       
            xtype  : 'container',
            layout : 'column',                        
            defaults : {
                labelAlign  : 'top',                        
                columnWidth : 1
            },
            items : [            
                //row1
                {
                    xtype       : 'basedatefield',
                    fieldLabel  : 'Ημερομηνία',
                    columnWidth : 0.5,
                    margin      : '10 20 10 50',
                    name        : 'expense.issuedate',
                    submitFormat: 'Y-m-d'
                },{
                     xtype        : 'basecombobox',
                     fieldLabel   : 'Επωνυμία',
                     name         : 'expense.idmtrl',    
                     requestData  : '{"action":{"select":{"method":[["Findoc.getExpenseMtrl"]]}}}',
                     model        : APPNAME+'.model.findoc.ExpenseMtrlModel',
                     displayField : 'name',
                     valueField   : 'idmtrl',
                     margin       : '10 20 10 20',
                     typeAhead    : true,
                     editable     : true,
                     columnWidth  : 0.5                                       
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Ποσό',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'expense.amount'
                },{
                    xtype       : 'basetextarea',
                    fieldLabel  : 'Αιτιολογία',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'expense.comments'
                },                                    
                //hidden
                {
                    xtype  : 'basetextfield',
                    name   : 'expense.idexpense',
                    itemId : 'idexpense',
                    hidden : true      
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'expense.created'
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'expense.updated'
                }]                   
                                               
        }];
         
           
     me.callParent();   
   }
    
});

