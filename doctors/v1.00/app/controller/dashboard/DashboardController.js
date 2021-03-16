Ext.define(APPNAME+'.controller.dashboard.DashboardController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************contact***********/    
    {
        ref      : 'dashboard',
        selector : 'appdashboard'
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              dashboardclick : this.onMenuDashboardClick  
            }            
         })         
     },

     onMenuDashboardClick : function(){                
        this.setLayoutMenu('Dashboard');		
		this.setTabText('Αρχική');
        this.setTabView(APPNAME+'.view.dashboard.Dashboard');        
        this.onMenuClick();        
     },
     
     onMenuClick : function(){
        var view = this.getTabView();
        Ext.create(view,{closable:true,title:this.getTabText()});	
        var mainContainer = this.getMainContainer(),
            dashboard   = this.getDashboard();         
        mainContainer.getLayout().setActiveItem(dashboard);              
     }    
     
     

});



