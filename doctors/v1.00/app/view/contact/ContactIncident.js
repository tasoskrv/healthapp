Ext.define(APPNAME+'.view.contact.ContactIncident',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.contactincident',
        
    initComponent : function(){
        
        var me = this;
                    
        me.items = [{
                xtype       : 'basegrid',
                sqlIndex    : '2',
                model       : APPNAME+'.model.contact.ContactIncidentModel',
                paging      : true,
                sorters     : {"property":"incident.idincident","direction":"ASC"},
                toolbarBtn  : ['addrow','removerow'],
                margin      : '0 0 0 0',
                columns     : [{
                   dataIndex : 'incident.idincident',
                   hidden    : true,
                   hideable  : false
                },{
                   dataIndex : 'incident.idcontact',
                   hidden    : true,
                   hideable  : false
                },{
                    dataIndex : 'incident.idicd',
                    header    : 'Πάθηση (ICD)',
                    editor    : {
                        xtype        : 'basecombobox',
                        name         : 'incident.idicd',     
                        //itemId       : 'contact_idcountry',
                        requestData  : '{"action":{"select":{"method":[["Contact.getIcd"]]}}}',
                        model        : APPNAME+'.model.contact.ContactIcdModel',
                        displayField : 'name',
                        valueField   : 'idicd',
                        margin       : '10 20 10 10',
                        typeAhead    : true,
                        editable     : true,
                        pageSize     : 100                        
                    },
                    flex      : 3
                },{
                    dataIndex : 'incident.incidentdate',
                    header    : 'Ημερομηνία',
                    editor    : {
                        xtype : 'basedatefield',
                        submitFormat : 'Y-m-d'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.description',
                    header    : 'Περιγραφή',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.symptom',
                    header    : 'Σύμπτωμα',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.clinicexam',
                    header    : 'Κλινική Εξέταση',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.diagnosis',
                    header    : 'Διάγνωση',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.treatment',
                    header    : 'Θεραπεία',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.comments',
                    header    : 'Σχόλια',
                    editor    : {
                        xtype : 'basetextfield'
                    },
                    flex      : 1
                },{
                    dataIndex : 'incident.created',
                    hidden    : true,
                    hideable  : false
                },{
                    dataIndex : 'incident.updated',
                    hidden    : true,
                    hideable  : false
                }],
            
                getDefaultValues : function(){
                    return {
                            'incident.idcontact' : -1
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



