Ext.define(APPNAME+'.controller.findoc.FindocController',{
    
    extend: 'AppLib.Controller',
    
    requires : [],
        
    refs: [{
      ref      : 'mainContainer',
      selector : '#mainContainer'      
    },
    /*************findoc***********/    
    {
        ref      : 'findoc',
        selector : 'appfindoc'
    },{
        ref      : 'findocBrowser',
        selector : 'appfindoc findocbrowser'
    },{
        ref      : 'findocForm',
        selector : 'appfindoc findocform'
    },{
        ref      : 'findocBrowserGrid',
        selector : 'appfindoc findocbrowser basegrid'        
    },{
        ref      : 'receiptNumber',
        selector : 'appfindoc findocdetails #receiptnumber'
    }],
    
    init: function() {
        this.control({                 
            'treepanel' : {                
              findocclick : this.onMenuFindocClick  
            },                     
            'appfindoc findocbrowser basegrid': {
                addrecord    : this.onFindocAddClick
            },

            'appfindoc findocdetails #findoc_series' : {
                changed : this.onSeriesChange
            }

         })         
     },

     onMenuFindocClick : function(){                
        this.setLayoutMenu('Findoc');	
		this.setTabText('Έκδοση Παραστατικού');
        this.setTabView(APPNAME+'.view.findoc.Findoc');
        this.onMenuClick();		
     },

    onFindocAddClick : function(){         
        this.setLayoutMenu('Findoc');	        
        this.onBrowserAddClick();		
        this.onModifyFormFields();
		/*
		//TODO readonly sets to other function
		var findocForm = this.getFindocForm();
		var fields = findocForm.getForm().getFields().items;
		for(var i=0,j=fields.length;i<j;i++){
			if(fields[i].modifyField === '0'){
				fields[i].setReadOnly(false);
			}
		}
		*/ 
     },

     onSeriesChange : function(response){ 
         var data = Ext.decode(response.responseText),
             lastnumber = data.data[0][0].lastnumber,
             receiptNumberField = this.getReceiptNumber();
         receiptNumberField.setValue(lastnumber);         
     }



});
