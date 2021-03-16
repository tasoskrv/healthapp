Ext.define('AppLib.controls.BaseComboBox',{
    
   extend : 'Ext.form.field.ComboBox',
   alias  : 'widget.basecombobox',
   
   typeAhead : false,
   editable : false,
   changeQuery : false,
   
   initComponent : function(){       
     var me = this;         
     me.store = me.createStore();
     
     if(me.changeQuery){         
          me.on({
            scope : me,
            change : me.changed
          });         
     }
     
    me.store.on({
       scope : me,
       beforeload : me.comboBeforeLoad,
       load       : me.comboLoad
    });
     
     
     me.store.pageSize = this.pageSize || 15;
     
     me.callParent();
   },   
   
   
   comboBeforeLoad : function(store, operation, options){
       var combo         = this,
           store         = combo.getStore(),
           currentRecord = store.findRecord(combo.valueField, combo.getValue(), 0, false, true, true);			
           store.clearFilter(true);
           combo.lastRecord  = currentRecord;
   },
   
   comboLoad : function(store, records, successful, options){
       if (!Ext.isArray(records))
            return;
			
        var combo = this,
            store = combo.getStore();

        if (this.lastRecord){
                var recordMissing = (store.findExact(combo.valueField, this.lastRecord.get(combo.valueField)) === -1);
                if (recordMissing){
                    store.insert(0, this.lastRecord);			
                }
        }                
   },
   
   createStore : function(){             
        var me    = this,        
            store = Ext.create('AppLib.BaseStore',{                   
            requestData : me.requestData,
            model       : me.model,
            autoLoad: true,
            autoDestroy: false            
       });       
       return store;
    },
    
    changed : function(){
       
        var idField = this.getValue(),
            requestInit = Ext.create('AppLib.BaseRequest'),        
            parameters;
         
        parameters = {
             'action'   : {"select":{"method":[["Findoc.getSeriesNumber"]]}},
             'pk'       : idField,
             'callback' : this.submitResponse,
             'scope'    : this
         }
         requestInit.ajaxRequest(parameters);
       
   },
   
   submitResponse : function(request,success,response){
       this.fireEvent('changed',response);
   }
   
    
});

