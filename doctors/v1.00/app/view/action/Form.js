Ext.define('Doctors.view.action.Form',{
    
    extend : 'Ext.form.Panel',
    alias  : 'widget.appactionform',
    
    
    initComponent : function(){
        /*
        var me = this;
         var mystore =Ext.create('Doctors.store.action.Action',{
            QTable:'method',
            QAction:'select',
            QFields:'getActionList'
       });
        
        
        me.layout = {
            type : 'vbox',
            align : 'anchor'
        }
        
        me.defaults = {
            labelAlign : 'top',
            style : {
                fontWeight : 'bold'
            }
        }       
        
        me.items = [{
           xtype : 'label',
           text : 'Νέα Ενέργεια',
           padding : 20
        },{                
           xtype : 'container',
           defaults : {
               labelAlign : 'top',
               margin : '0 0 0 20'
           },
           layout : {
               type : 'hbox'
           },
           items :[{
               xtype : 'basecombobox',
               fieldLabel : 'περιγραφή',
               store : mystore,
               typeAhead: true,
               displayField : 'description',
               valueField : 'idvisit',
               mode : 'remote',
               name : 'idvisit'
           },{
               xtype : 'basedatefield',
               fieldLabel : 'Ημερομηνία',
               itemId : 'startdate',
               name : 'startdate'
           },{
               xtype : 'basetextfield',
               fieldLabel : 'Όλη μέρα',
               itemId : 'allday',
               name : 'allday'
           }]                
        },{
            xtype : 'container',
            layout : {
                type : 'hbox'
            },
            defaults : {
                labelAlign : 'top',
               margin : '0 0 0 20'
            },
            items : [{
                xtype : 'basetextfield',
                fieldLabel : 'Αιτιολογία'
            },{
                xtype : 'basecombobox',
                fieldLabel : 'Τρόπος Πληρωμής'
            }]
        },{
            xtype : 'basetextfield',
            fieldLabel : 'Ποσό',
            margin : '0 0 0 20'
        },{
            xtype : 'container',
            layout : {
                type : 'hbox'
            },
            defaults : {
                labelAlign : 'top',
               margin : '0 0 0 20'
            },
            items : [{
                xtype : 'basetextarea',
                fieldLabel : 'Παρατηρήσεις'
            },{
                xtype : 'button',
                text : 'Καταχώρηση',
                scope : me,
                 handler : function(btn, e, eOpts){
                    
                    var combo = this.down('basecombobox');
                    
                    combo.store.reload(
                  {   
                     params: 
                         {query : combo.getValue()}
                    })
                                          
                                                       
                    
                }
            }]
        }];
                
        */
     this.callParent();   
    }
    
});