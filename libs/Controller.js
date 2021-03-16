Ext.define('AppLib.Controller',{
    
    extend: 'Ext.app.Controller',
	
	setLayoutMenu : function(value){
		this.layoutmenu = value;
	},
	getLayoutMenu : function(){
		return this.layoutmenu;
	},
	
	setTabView : function(value){
		this.tabmenu = value;
	},
	
	getTabView : function(){
		return this.tabmenu;
	},
	
	setTabText : function(value){
		this.tabtext = value;	
	},
	
	getTabText : function(){
		return this.tabtext;
	},
        
	onMenuClick : function(){	
		var layout = this.getLayoutMenu();
		var view = this.getTabView();
		Ext.create(view,{closable:true,title:this.getTabText()});	
	
		var mainContainer = this.getMainContainer(),
		card          = this['get'+layout](),
		browser       = this['get'+layout+'Browser'](),
		browserGrid   = this['get'+layout+'BrowserGrid'](),
		store         = browserGrid.getStore();
				
		mainContainer.getLayout().setActiveItem(card);
		card.getLayout().setActiveItem(browser);        
		store.load();		
	},
	
	onBrowserAddClick : function(){	
		var app     = this['get'+this.getLayoutMenu()](),
		appForm = this['get'+this.getLayoutMenu()+'Form'](),
		form    = appForm.getForm(),
		grids   = appForm.query('basegrid');    
                		
		if(appForm.down('tabpanel'))
			appForm.down('tabpanel').setActiveTab(0);		
		
        form.reset();                
        for(var k=0,l=grids.length;k<l;k++){
            grids[k].getStore().removeAll();
        }             
        appForm.mode = 'insert';
        app.getLayout().setActiveItem(appForm);				
	},
	
	onModifyFormFields : function(){
		var appForm = this['get'+this.getLayoutMenu()+'Form'](),
			fields = appForm.getForm().getFields().items;
		for(var i=0,j=fields.length;i<j;i++){
			if(fields[i].modifyField === '0'){
				fields[i].setReadOnly(false);
			}
		}
	}
		
});

