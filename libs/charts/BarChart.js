Ext.define('AppLib.charts.BarChart', {
    extend   : 'Ext.chart.Chart',
    alias    : 'widget.barchart',
    requires : [],
	
	height        : this.height || 400,	
	width         : this.width || 400,
	//graphType     : 'bar',
        /*
	axesTypeX     : 'Numeric',
	axesTypeY     : 'Time',
	axesPositionX : 'bottom',
	axesPositionY : 'left',
	axesTitleX    : '',
	axesTitleY    : '',
	axesFieldsX   : [],
	axesFieldsY   : [],
	seriesXField  : '',
	seriesYField  : '',
	resizable     : false,
	gridSettings  : null,
	grid          : false,
	*/
        
	initComponent : function(){
		var me = this;
		/*
		me.axes = [{
                            title    : me.axesTitleY,
                            type     : me.axesTypeY,
                            position : me.axesPositionY,
                            fields   : me.axesFieldsY							
			},{
                            title    : me.axesTitleX,
                            type     : me.axesTypeX,
                            position : me.axesPositionX,
                            fields   : me.axesFieldsX
			}];
		    */
                        /*
		me.series = [{
                            type      : me.graphType,
                            xField    : me.seriesXField,
                            yField    : me.seriesYField,				
                            highlight : true,												
                            tips: {
                              trackMouse : true,
                              width      : 250,
                              height     : 40,
                              scope      : me
                              renderer   : function(sprite, record) {				
                                    var currency = (me.showCurrency===true ? App.basic.constants.CURRENCY_SYMBOL : ''),
                                            title    = record.value[0],
                                            val      = record.value[1];					
                                    this.setTitle(title + ' : ' + currency + val);
                              }
                            }				
			}];		
		*/
		me.store = me.store || me.createStore();
				
		me.callParent();
	},
	
	createStore : function(){			
            var me    = this,        
                store = Ext.create('AppLib.BaseStore',{                   
                requestData : me.requestData,
                model       : me.model            
           });       
           return store;
	}
	

});