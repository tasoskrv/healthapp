Ext.define(APPNAME+'.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        /**controls**/
        'AppLib.controls.BaseTextField',
        'AppLib.controls.BaseTextArea',
        'AppLib.controls.BaseComboBox',
        'AppLib.controls.BaseComboBoxLocal',
        'AppLib.controls.BaseCheckbox',
        'AppLib.controls.BaseRadio',
        'AppLib.controls.BaseDateField',
        'AppLib.controls.BaseGrid',    
				
        /**charts**/
        'AppLib.charts.BarChart'        
    ],
	
	autoScroll : true,
	
	initComponent : function(){
		
		this.items = [{
			xtype  : 'container',
			layout : {
				type  : 'vbox',
				align : 'stretch'
			},			
			items : [{
				xtype  : 'appheader',
				itemId : 'appheader',
				height : 50,
				style  : {
					background : '#999888'
				}
			},{
				xtype  : 'appbody',
				itemId : 'appbody'
			},{
				xtype  : 'appsubfooter',
				itemId : 'appsubfooter'
			},{
				xtype  : 'appfooter',
				itemId : 'appfooter'				
			}]
		}];
			
		this.callParent();	
	}
	
});
