Ext.define(APPNAME+'.view.dashboard.Dashboard',{
    
    extend : 'Ext.container.Container',
    alias : 'widget.appdashboard',
    
    
    initComponent : function(){
        
        
        this.items = [{
                xtype : 'container',
                layout : {
                    type : 'vbox'
                },
                items : [{                        
                        xtype : 'label',
                        text  : 'Αρχική'
                },{
                    
                    xtype : 'container',
                    layout : {
                        type : 'hbox'
                    },
                    items : [{
                            xtype         : 'barchart',			
                    axes: [{
                            title: 'Temperature',
                            type: 'Numeric',
                            position: 'left',
                            fields: ['findoc.amount'],
                            minimum: 0
                        },{
                            title: 'Time',
                            type: 'Time',
                            position: 'bottom',
                            fields: ['findoc.transdate'],
                            dateFormat: 'm/d/y'
                        }],
                    series: [{
                            type: 'column',
                            xField: 'findoc.transdate',
                            yField: 'findoc.amount',
                            highlight : true,												
				tips: {
				  trackMouse : true,
				  width      : 250,
				  height     : 40,
				  scope      : this,
				  renderer   : function(sprite, record) {		
                                        //var currency = (me.showCurrency===true ? App.basic.constants.CURRENCY_SYMBOL : ''),
					var	/*title    = record.value[0],*/currency='',title='',
						val      = record.value[1];					
					this.setTitle(title + ' : ' + currency + val);
				  }
				}
                        }],                    
                    model         : APPNAME+'.model.dashboard.DashboardReceiptModel',
                    requestData   : '{"action":{"select":{"method":[["Dashboard.getDashboardReceipts"]]}}}'   
                    },{
                        xtype : 'barchart',			
                    axes : [{
                            title: 'Temperature',
                            type: 'Numeric',
                            position: 'left',
                            fields: ['findoc.amount'],
                            minimum: 0
                        },{
                            title: 'Time',
                            type: 'Time',
                            position: 'bottom',
                            fields: ['findoc.transdate'],
                            dateFormat: 'm/d/y'
                        }],
                    series: [{
                            type: 'line',
                            xField: 'findoc.transdate',
                            yField: 'findoc.amount',
                            highlight : true,												
				tips: {
				  trackMouse : true,
				  width      : 250,
				  height     : 40,
				  scope      : this,
				  renderer   : function(sprite, record) {		
                                        //var currency = (me.showCurrency===true ? App.basic.constants.CURRENCY_SYMBOL : ''),
					var	/*title    = record.value[0],*/currency='',title='',
						val      = record.value[1];					
					this.setTitle(title + ' : ' + currency + val);
				  }
				}
                        }],                    
                    model       : APPNAME+'.model.dashboard.DashboardReceiptModel',
                    requestData : '{"action":{"select":{"method":[["Dashboard.getDashboardReceipts"]]}}}' 
                    }]
                                                 
                }]                
                
        }];
        
        this.callParent();
    }
    
});





