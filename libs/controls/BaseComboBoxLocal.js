Ext.define('AppLib.controls.BaseComboBoxLocal',{
    
   extend : 'Ext.form.field.ComboBox',
   alias  : 'widget.basecomboboxlocal',
   
   editable  : false,
   queryMode : 'local'
   /*
   initComponent : function(){
       
     var me = this;  
       
        me.listeners = {
             afterrender : function(){
                //this.select(this.getStore().getAt(0));
             },
             change : function(combo, newValue, oldValue, eOpts){
                combo.store.load();
                //alert('triggered');
             }
         }        
     
     me.callParent();
   }   
    */
});

