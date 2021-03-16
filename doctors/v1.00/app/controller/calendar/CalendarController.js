Ext.define(APPNAME+'.controller.calendar.CalendarController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************calendar***********/    
    {
        ref      : 'calendar',
        selector : 'appcalendar'
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              calendarclick : this.onMenuCalendarClick  
            }          
         })         
     },

     onMenuCalendarClick : function(){      
        this.setLayoutMenu('Calendar');		
		this.setTabText('Ημερολόγιο');
        this.setTabView(APPNAME+'.view.calendar.Calendar');        
        this.onMenuClick();
     },
     
     onMenuClick : function(){
        var view = this.getTabView();
        Ext.create(view,{closable:true,title:this.getTabText()});	
        var mainContainer = this.getMainContainer(),
        calendarCard   = this.getCalendar();                    
        mainContainer.getLayout().setActiveItem(calendarCard);          
     }    

});
