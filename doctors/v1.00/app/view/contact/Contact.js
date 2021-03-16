Ext.define(APPNAME+'.view.contact.Contact',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.appcontact',
    requires : [
        APPNAME+'.view.contact.ContactForm',
        APPNAME+'.view.contact.ContactBrowser',
        APPNAME+'.view.contact.ContactDetails',
        APPNAME+'.view.contact.ContactHistory',
        APPNAME+'.view.contact.ContactAllergy',
        APPNAME+'.view.contact.ContactIncident'
    ],

    initComponent : function(){        
        var me = this;        
        me.layout = {
            type : 'card'
        }        
        
        me.items = [{
            xtype  : 'contactbrowser',
            itemId : 'contactbrowser'
        },{                
            xtype  : 'contactform',
            itemId : 'contactform'
        }];        
     me.callParent();        
    }
    
});






