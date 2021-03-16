Ext.define(APPNAME+'.controller.findoc.ExpenseController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************findoc***********/    
    {
        ref      : 'expense',
        selector : 'appexpense'
    },{
        ref      : 'expenseBrowser',
        selector : 'appexpense expensebrowser'
    },{
        ref      : 'expenseForm',
        selector : 'appexpense expenseform'
    },{
        ref      : 'expenseBrowserGrid',
        selector : 'appexpense expensebrowser basegrid'        
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              expenseclick : this.onMenuExpenseClick  
            },                     
            'appexpense expensebrowser basegrid': {
                addrecord    : this.onExpenseAddClick
            }
         })         
     },

    onMenuExpenseClick : function(){     
        this.setLayoutMenu('Expense');	
		this.setTabText('Δαπάνη');
        this.setTabView(APPNAME+'.view.findoc.Expense');	
        this.onMenuClick();
    },

    onExpenseAddClick : function(){   
        this.setLayoutMenu('Expense');		
        this.onBrowserAddClick();		            
     }


});
