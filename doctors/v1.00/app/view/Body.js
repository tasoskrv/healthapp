Ext.define(APPNAME+'.view.Body', {
    extend: 'Ext.container.Container',
    alias : 'widget.appbody',
    requires:[
        APPNAME+'.view.dashboard.Dashboard',
        APPNAME+'.view.contact.Contact',       
        APPNAME+'.view.mtrl.MtrlExpenses',
        APPNAME+'.view.findoc.Findoc',
        APPNAME+'.view.findoc.Expense'
    ],
   
    initComponent : function(){
    
    var store = Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: true,
                    children: [{ 
                            text : "Αρχική", //appdashboard
                            id   : 'dashboard',
                            leaf : true                                                             
                        },{ 
                            text : "Πρόσωπα",//appcontact                             
                            id   : 'contact',
                            leaf : true
                        },{
                            text : "Οικονομικά",                          
                            id   : 'findoc',
                            leaf : false,
                            children : [{
                              text : "Έκδοση Παραστατικού",//appfindoc
                              id   : "invoice",
                              leaf : true
                            },{
                                text : "Δαπάνη",//appexpense
                                id   : "expense",
                                leaf : true
                            }]
                        },{
                            text : "Ρυθμίσεις",//                             
                            id   : 'settings',
                            leaf : false,
                            children : [{
                                    text : 'Χρήστες',
                                    id   : 'users',
                                    leaf : true
                            },{
                                    text : 'Εφαρμογή',
                                    id   : 'application',
                                    leaf : true
                            }]
                        },{
                            text : "Έξοδα",//appmtrlexpenses                             
                            id   : 'mtrlexpenses',
                            leaf : true
                        },{
                            text : "Στατιστικά",                             
                            id   : 'stats',
                            leaf : true
                        },{
                            text : "Εκτυπώσεις",                             
                            id   : 'prints',
                            leaf : true
                        },{
                            text : "Συνδρομή",                             
                            id   : 'subscription',
                            leaf : true
                        }]
                    }
                });
    
        this.items = [{                   
                    xtype  : 'panel',
                    height : 768,
                    layout : 'border',
                    items  : [{
                        xtype : 'panel',    
                        title: 'Πλοήγηση',
                        region: 'west',     
                        layout: 'fit',
                        split: true,
                        collapsible: true,
                        items : [{
                                xtype  : 'treepanel',  
                                itemId : 'menu',
                                width  : 200,
                                height : 150,
                                store  : store,
                                rootVisible: false,
                                listeners : {                                    
                                    afterrender : function(){                                      
                                      this.addEvents(
                                        'dashboardclick',
                                        'contactclick',
                                        'findocclick',
                                        'calendarclick',
                                        'mtrlexpensesclick',
                                        'usersclick',
                                        'applicationclick'
                                        );                                      
                                    },                                    
                                    itemclick : function(treeview, record, item, index, e, eOpts){                                        
                                        var selection = record.getId();                                        
                                        if(selection === 'dashboard'){
                                            this.fireEvent('dashboardclick');
                                        }else if(selection === 'contact'){											
                                            this.fireEvent('contactclick');
                                        }else if(selection === 'invoice'){
                                            this.fireEvent('findocclick');
                                        }else if(selection === 'expense'){
                                            this.fireEvent('expenseclick');
                                        }else if(selection === 'calendar'){
                                            this.fireEvent('calendarclick');
                                        }else if(selection === 'mtrlexpenses'){
                                            this.fireEvent('mtrlexpensesclick');
                                        }else if(selection === 'users'){
                                                this.fireEvent('usersclick');											
                                        }else if(selection === 'application'){
                                                this.fireEvent('applicationclick');
                                        }
                                        //TODO handle fireEvents to general Controllers
                                    }
                                }
                        }]

                    },{                     
                        xtype : 'panel',    
                        title: '',
                        region: 'center',     
                        layout: 'fit',    
                        items : [{
                                xtype  : 'tabpanel',//'container',
                                itemId : 'mainContainer',
                                layout : 'card'
                        }]                        
                    }]
 
                }];

        this.callParent();
    }

});

