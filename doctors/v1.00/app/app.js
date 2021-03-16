Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
	'AppLib' : '../../libs/'
    }
});

var APPNAME = "Doctors";

Ext.application({
    name: APPNAME,	
    
    requires : [		
        'AppLib.gui.Form',
        'AppLib.Model',
        'AppLib.Controller',
        'AppLib.Render'			
    ],

    views: [
        APPNAME+'.view.Header',
        APPNAME+'.view.Body',
        APPNAME+'.view.SubFooter',
        APPNAME+'.view.Footer'
    ],

    controllers: [
        APPNAME+'.controller.dashboard.DashboardController',
        APPNAME+'.controller.contact.ContactController',
        APPNAME+'.controller.findoc.FindocController',
        APPNAME+'.controller.mtrl.MtrlExpensesController',
        APPNAME+'.controller.findoc.ExpenseController'        
    ],
    
    stores: [],
    
    models : [        
        /**dashboard**/
        APPNAME+'.model.dashboard.DashboardReceiptModel',
        APPNAME+'.model.dashboard.DashboardReceiptModel',        
        /**contact**/
        APPNAME+'.model.contact.ContactBrowserModel',
        APPNAME+'.model.contact.ContactCountryModel',
        APPNAME+'.model.contact.ContactBloodModel',
        APPNAME+'.model.contact.ContactFormModel',
        APPNAME+'.model.contact.ContactAllergyModel',
        APPNAME+'.model.contact.ContactIcdModel',
        APPNAME+'.model.contact.ContactHistoryModel',
        APPNAME+'.model.contact.ContactIncidentModel',
        /**findoc**/
        APPNAME+'.model.findoc.FindocBrowserModel',
        APPNAME+'.model.findoc.FindocFormModel',
        APPNAME+'.model.findoc.FindocContactModel',
        APPNAME+'.model.findoc.FindocPaytypestModel',
        APPNAME+'.model.findoc.FindocSeriesModel',       
        /**expense**/
        APPNAME+'.model.findoc.ExpenseBrowserModel',
        APPNAME+'.model.findoc.ExpenseMtrlModel',
        /**mtrlexpenses**/
        APPNAME+'.model.mtrl.MtrlExpensesBrowserModel'        
    ],
    
    launch : function() {	
        Ext.get('app_start_div').remove();	
        Ext.create(APPNAME+'.view.Viewport');        
    }
    
});







