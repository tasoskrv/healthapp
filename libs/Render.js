Ext.define('AppLib.Render',{
    
    statics : {
        
        convertToDate : function(value){
            return Ext.Date.format(value, 'd/m/Y');
        },        
        
        contactType : function(value){
            var type;
            switch(value){
                case 1:
                type = 'Ασθενής';
                break;
                case 0:
                type = 'Άλλο';
                break;
            }                        
            return type;
        }
    }    
});
