Ext.define(APPNAME+'.view.contact.ContactBrowser',{
    
   extend : 'Ext.container.Container',
   alias : 'widget.contactbrowser',
   mixins: [
        'AppLib.BaseRequest'
    ],
   
   initComponent : function(){       
        var me = this;
        me.items = [{
            xtype       : 'basegrid',
            model       : APPNAME+'.model.contact.ContactBrowserModel',
            settings    : APPNAME+'.view.contact.ContactSettings',
            requestData : '{"action":{"select":{"method":[["Contact.getContactBrowser"]]}}}',
            sorters     : {"property":"contact.idcontact","direction":"ASC"},
            locateMethod: ['Contact.getAllergyBrowser','Contact.getHistoryBrowser','Contact.getIncidentBrowser','Contact.getContactLocate'],
            columns     : [{
               dataIndex : 'contact.idcontact',
               header    : 'idcontact',
               hidden    : true,
               hideable  : false
            },{
               dataIndex : 'contact.name',
               header    : 'Ονοματεπώνυμο',
               flex      : 1
            },{
                dataIndex : 'contact.sodtype',
                header    : 'Τύπος Επαφής',
                flex      : 1,
                renderer  : function(value){
                    return AppLib.Render.contactType(value);
                }
            },{
                dataIndex : 'contact.address',
                header    : 'Διέυθυνση',
                flex      : 1
            },{
                dataIndex : 'contact.city',
                header    : 'Πόλη',
                flex      : 1
            },{
                dataIndex : 'contact.mobile',
                header    : 'Τηλέφωνο',
                flex      : 1
            },{
                dataIndex : 'contact.chrontreat',
                header    : 'Χρόνια Ασθένεια',
                flex      : 1
            },{
                dataIndex : 'contact.job',
                header    : 'Επάγγελμα',
                flex      : 1,
                hidden    : true
            },{
                dataIndex : 'contact.emergencycontact',
                header    : 'Έκτατη Επαφή',
                flex      : 1,
                hidden    : true
            },{
                dataIndex : 'contact.emergencynumber',
                header    : 'Έκτατος Αριθμός',
                flex      : 1,
                hidden    : true
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

  