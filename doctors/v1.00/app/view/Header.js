Ext.define(APPNAME+'.view.Header',{    
    extend : 'Ext.container.Container',
    alias  : 'widget.appheader',
    initComponent : function(){		
        this.layout = 'hbox';	
        this.items = [{
            xtype  : 'container',
			margin : '10 10 10 10',
			items  : [{
				xtype : 'label',
				text  : 'Εφαρμογή',
				margin: '0 0 0 20'
			}],
            flex   : 9,
			height : '100%',
            style  : {
                background : '#e1e1e1'
            }
        },{
            xtype : 'container',
			margin : '10 10 10 10',
			items : [{
				xtype : 'button',
				text  : 'Επιλογές',
				menu  : new Ext.menu.Menu({
					items : [{
                                            text      : 'Ρυθμίσεις',
                                            listeners : {
                                                    click : function(){
                                                            alert(1);
                                                    }
                                            }
					},{
                                            text : 'Έξοδος',
                                            listeners : {
                                                    click : function(){
                                                            window.location = "logout.php";
                                                    }
                                            }
					}]
				})
			}],            
			height : '100%',	
            style  : {
                background : '#c0c0c0'
            },
            flex : 1
        }];
    
        this.callParent();
    }
    
});