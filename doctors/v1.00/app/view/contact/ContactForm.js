Ext.define(APPNAME+'.view.contact.ContactForm',{
    
    extend : 'AppLib.gui.Form',
    alias  : 'widget.contactform',
        
    initComponent : function(){
        
         var me = this;
             me.settings = APPNAME+'.view.contact.ContactSettings';          
           
        me.items = [{                             
            xtype : 'tabpanel',
            itemId: 'contacttabs',
            region: 'center',
            items :[{
                title  : 'Στοιχεία Επαφής',
                items  : [{                                 
                            xtype     : 'contactdetails',
                            overflowY : 'auto',
                            height    : 700
                         }]
            },{
                title : 'Αλλεργίες',
                items : [{
                        xtype : 'contactallergy'                        
                }]
            },{
                title : 'Ιστορικό',
                items : [{
                        xtype : 'contacthistory'                        
                }]
            },{ 
                title : 'Περιστατικά',
                items : [{
                        xtype : 'contactincident'                        
                }]               
            }]                                     
        }];
                    
     me.callParent();   
   }   
    
});



