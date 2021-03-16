Ext.define(APPNAME+'.view.mtrl.MtrlExpensesDetails',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.mtrlexpensesdetails',
        
    initComponent : function(){
        
         var me = this;
             me.settings = APPNAME+'.view.mtrl.MtrlExpensesSettings';                                     
            
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
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Κωδικός',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    itemId      : 'code',
                    name        : 'mtrl.code'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Δαπάνη',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'mtrl.name'
                },{
                    xtype       : 'basetextarea',
                    fieldLabel  : 'Σχόλια',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'mtrl.comments'
                },                                    
                //hidden
                {
                    xtype  : 'basetextfield',
                    name   : 'mtrl.idmtrl',
                    itemId : 'idmtrl',
                    hidden : true      
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'mtrl.created'
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'mtrl.updated'
                }]               
                                               
        }];
         
           
     me.callParent();   
   }
    
});

