Ext.define(APPNAME+'.view.contact.ContactAllergy',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.contactallergy',
        
    initComponent : function(){
        
        var me = this;
            
        me.items = [{            
            xtype       : 'basegrid',
            sqlIndex    : '0',
            model       : APPNAME+'.model.contact.ContactAllergyModel',
            paging      : true,
            sorters     : {"property":"allergy.idallergy","direction":"ASC"},
            toolbarBtn  : ['addrow','removerow'],
            margin      : '0 0 0 0',
            columns     : [{
               dataIndex : 'allergy.idallergy',
               hidden    : true,
               hideable  : false
            },{
               dataIndex : 'allergy.idcontact',
               hidden    : true,
               hideable  : false
            },{
                dataIndex : 'allergy.description',
                header    : 'Περιγραφή',
                flex      : 1,
                editor    : {
                    xtype : 'basetextfield'
                }
            },{
                dataIndex : 'allergy.diagnosedate',
                header    : 'Ημ/νία Διάγνωσης',
                flex      : 1,
                editor    : {
                    xtype : 'basedatefield',
                    submitFormat : 'Y-m-d'
                }
            },{
                dataIndex : 'allergy.reaction',
                header    : 'Αντίδραση',
                flex      : 1,
                editor    : {
                    xtype : 'basetextfield'
                }
            },{
                dataIndex : 'allergy.created',
                hidden    : true,
                hideable  : false
            },{
                dataIndex : 'allergy.updated',
                hidden    : true,
                hideable  : false
            }],
            
            getDefaultValues : function(){
                return {
                        'allergy.idcontact'  : -1
                    };
            },
            
            gridSort : function(){
                return {
                  sort : true,  
                  idselector : 'contactdetails #idcontact',
                  method : 'Contact.getAllergyBrowser'
                };         
            }    
        
            
            
        }];         
           
     me.callParent();   
   }
    
});



