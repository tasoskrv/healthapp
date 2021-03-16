Ext.define(APPNAME+'.view.findoc.FindocDetails',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.findocdetails',
        
    initComponent : function(){
        
         var me = this;
             me.settings = APPNAME+'.view.findoc.FindocSettings';                                     
            
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
                    name        : 'findoc.transdate',
                    submitFormat: 'Y-m-d'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Αριθμός',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    itemId      : 'receiptnumber',
                    name        : 'findoc.receiptnumber',
                    readOnly    : true
                },{
                     xtype        : 'basecombobox',
                     fieldLabel   : 'Παραστατικό',
                     name         : 'findoc.idseries',     
                     itemId       : 'findoc_series',
                     requestData  : '{"action":{"select":{"method":[["Findoc.getSeries"]]}}}',   
                     model        : APPNAME+'.model.findoc.FindocSeriesModel',
					 modifyField  : '0',
                     displayField : 'name',
                     valueField   : 'idseries',
                     margin       : '10 20 10 20',
                     columnWidth  : 0.5,
                     changeQuery  : (this.mode === 'insert') ? true : false
                },{
                     xtype        : 'basecombobox',
                     fieldLabel   : 'Επωνυμία',
                     name         : 'findoc.idcontact',    
                     requestData  : '{"action":{"select":{"method":[["Findoc.getContacts"]]}}}',
                     model        : APPNAME+'.model.findoc.FindocContactModel',
                     displayField : 'name',
                     valueField   : 'idcontact',
                     margin       : '10 20 10 20',
                     typeAhead    : true,
                     editable     : true,
                     columnWidth  : 0.5                  
                     
                },{
                     xtype        : 'basecombobox',
                     fieldLabel   : 'Τρόπος Πληρωμής',
                     name         : 'findoc.idpaytype',     
                     requestData  : '{"action":{"select":{"method":[["Findoc.getPaytypes"]]}}}',   
                     model        : APPNAME+'.model.findoc.FindocPaytypestModel',
                     displayField : 'name',
                     valueField   : 'idpaytype',
                     margin       : '10 20 10 20',
                     columnWidth  : 0.5                    
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Ποσό',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'findoc.amount'
                },{
                    xtype       : 'basetextarea',
                    fieldLabel  : 'Αιτιολογία',
                    columnWidth : 0.5,
                    margin      : '10 20 10 20',
                    name        : 'findoc.reasoning'
                },                                    
                //hidden
                {
                    xtype  : 'basetextfield',
                    name   : 'findoc.idfindoc',
                    itemId : 'idfindoc',
                    hidden : true      
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'findoc.created'
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'findoc.updated'
                }]                   
                                               
        }];
         
           
     me.callParent();   
   }
    
});

