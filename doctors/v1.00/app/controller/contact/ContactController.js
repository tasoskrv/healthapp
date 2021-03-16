Ext.define(APPNAME+'.controller.contact.ContactController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************contact***********/    
    {
        ref      : 'contact',
        selector : 'appcontact'
    },{
        ref      : 'contactBrowser',
        selector : 'appcontact contactbrowser'
    },{
        ref      : 'contactForm',
        selector : 'appcontact contactform'
    },{
        ref      : 'contactBrowserGrid',
        selector : 'appcontact contactbrowser basegrid'        
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              contactclick : this.onMenuContactClick  
            },                     
            'appcontact contactbrowser basegrid': {
                addrecord    : this.onContactAddClick
            }
         })         
     },

     onMenuContactClick : function(){     
        this.setLayoutMenu('Contact');
        this.setTabText('Πρόσωπα');
        this.setTabView(APPNAME+'.view.contact.Contact');
        this.onMenuClick();		
     },

    onContactAddClick : function(){         
        this.setLayoutMenu('Contact');
        this.onBrowserAddClick();				
    }

});
