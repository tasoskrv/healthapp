Ext.define(APPNAME+'.controller.mtrl.MtrlExpensesController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************mtrlexpense***********/    
    {
        ref      : 'mtrlExpenses',
        selector : 'appmtrlexpenses'
    },{
        ref      : 'mtrlExpensesBrowser',
        selector : 'appmtrlexpenses mtrlexpensesbrowser'
    },{
        ref      : 'mtrlExpensesForm',
        selector : 'appmtrlexpenses mtrlexpensesform'
    },{
        ref      : 'mtrlExpensesBrowserGrid',
        selector : 'appmtrlexpenses mtrlexpensesbrowser basegrid'        
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              mtrlexpensesclick : this.onMenuMtrlExpensesClick  
            },                     
            
            'appmtrlexpenses mtrlexpensesbrowser basegrid': {
                addrecord    : this.onMtrlExpenseAddClick
            }            
         })         
     },

     onMenuMtrlExpensesClick : function(){       
        this.setLayoutMenu('MtrlExpenses');	
		this.setTabText('Έξοδα');
        this.setTabView(APPNAME+'.view.mtrl.MtrlExpenses');
        this.onMenuClick();	 
     },
     
    onMtrlExpenseAddClick : function(){        
        this.setLayoutMenu('MtrlExpenses');		
        this.onBrowserAddClick();		
     }
     



});
