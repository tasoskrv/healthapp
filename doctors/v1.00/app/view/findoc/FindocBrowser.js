Ext.define(APPNAME+'.view.findoc.FindocBrowser',{
    
   extend : 'Ext.container.Container',
   alias : 'widget.findocbrowser',
   mixins: [
        'AppLib.BaseRequest'
    ],
   
   initComponent : function(){       
        var me = this;
        me.items = [{
            xtype       : 'basegrid',
            model       : APPNAME+'.model.findoc.FindocBrowserModel',
            settings    : APPNAME+'.view.findoc.FindocSettings',
            requestData : '{"action":{"select":{"method":[["Findoc.getFindocBrowser"]]}}}',
            sorters     : {"property":"findoc.idfindoc","direction":"ASC"},
            locateMethod: ['Findoc.getFindocLocate'],
            columns     : [{
               dataIndex : 'findoc.idfindoc',
               header    : 'idfindoc',
               hidden    : true,
               hideable  : false
            },{
               dataIndex : 'contact.name',
               header    : 'Stili 1',//'Ονοματεπώνυμο',
               flex      : 1
            },{
               dataIndex : 'paytype.name',
               header    : 'Τρόπος Πληρωμής',
               flex      : 1,
			   hidden    : true,
               hideable  : false
            },{
               dataIndex : 'findoc.transdate',
               header    : 'Ημερομηνία',
               flex      : 1,
			   hidden    : true,
               hideable  : false,
               renderer : function(value){
                   //return Ext.Date.format(value, 'd/m/Y');
               }
            },{
               dataIndex : 'findoc.amount',
               header    : 'Ποσό',
			   hidden    : true,
               hideable  : false,
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

  