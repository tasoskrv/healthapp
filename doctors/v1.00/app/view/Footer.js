Ext.define(APPNAME+'.view.Footer',{
    
    extend : 'Ext.container.Container',
    alias : 'widget.appfooter',
        
    initComponent : function(){
                
        var footer = '<table width="30%">'+
                        '<tr>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Όροι χρήσης</a></td>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Αναφορά Σφάλματος</a></td>'+
                        '</tr>'+
                        '<tr>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Blog</a></td>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Συχνές Ερωτήσεις</a></td>'+
                        '</tr>'+	
                        '<tr>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Τελευταία Νέα</a></td>'+
                                '<td><a href="" target="blank" style="font-size:10pt;">Videos</a></td>'+
                        '</tr>'+						
                    '</table>';
        
        this.items = [{
            xtype  : 'panel',
            title  : 'Copyright 2014 - All rights reserved',
            html   : footer,					
            itemId : 'appfooter'
        }];        
        
        this.callParent();        
    }
});