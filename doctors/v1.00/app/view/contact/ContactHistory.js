Ext.define(APPNAME+'.view.contact.ContactHistory',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.contacthistory',
        
    requires : [
        'Ext.ux.CheckColumn',
        'Ext.selection.CheckboxModel'	
    ],    
        
    initComponent : function(){
        var me = this;
    
        me.items = [{                
                xtype       : 'basegrid',                
                sqlIndex    : '1',
                model       : APPNAME+'.model.contact.ContactHistoryModel',
                sorters     : {"property":"history.idhistory","direction":"ASC"},
                toolbarBtn  : ['addrow','removerow'],
                margin      : '0 0 0 0',
                columns     : [{
                   dataIndex : 'history.idhistory',
                   hidden    : true,
                   hideable  : false
                },{
                   dataIndex : 'history.idcontact',
                   hidden    : true,
                   hideable  : false
                },{
                    dataIndex : 'history.description',
                    header    : 'Περιγραφή',
                    flex      : 1,
                    editor    : {
                        xtype : 'basetextfield'
                    }
                },{
                    dataIndex : 'history.idicd',
                    header    : 'Διάγνωση Εισόσου (ICD)',
                    flex      : 1,
                    editor    : {
                        xtype        : 'basecombobox',
                        name         : 'history.idicd',     
                        itemId       : 'history_idicd',
                        requestData  : '{"action":{"select":{"method":[["Contact.getIcd"]]}}}',
                        model        : APPNAME+'.model.contact.ContactIcdModel',
                        displayField : 'name',
                        valueField   : 'idicd',
                        margin       : '10 20 10 10',
                        displayModel : 'history.icd',
                        valueModel   : 'history.idicd',
                        typeAhead    : true,
                        editable     : true,
                        pageSize     : 100
                    }
                },{
                    dataIndex : 'history.insertdate',
                    header    : 'Ημερομηνία Εισόδου',
                    flex      : 1,
                    editor    : {
                        xtype : 'basedatefield',
                        submitFormat : 'Y-m-d'
                    }
                },{
                    dataIndex : 'history.exitdate',
                    header    : 'Ημερομηνία Εξόδου',
                    flex      : 1,
                    editor    : {
                        xtype : 'basedatefield',
                        submitFormat : 'Y-m-d'
                    }
                },{
                    dataIndex : 'history.surgery',
                    header    : 'Χειρουργείο',
                    flex      : 1,
                    editor    : {
                        xtype : 'basetextfield'
                    }
                },{
                    dataIndex : 'history.created',
                    hidden    : true,
                    hideable  : false                    
                },{
                    dataIndex : 'history.updated',
                    hidden    : true,
                    hideable  : false
                }],
            
                getDefaultValues : function(){
                    return {
                            'history.idcontact' : -1
                        };
                },
                
                gridSort : function(){
                    return {
                        sort : true,
                        idselector : 'contactdetails #idcontact',
                        method : 'Contact.getHistoryBrowser'
                    };              
                }
                
            }];

     me.callParent();   
   }
    
});



