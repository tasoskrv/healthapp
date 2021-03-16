Ext.define('AppLib.controls.BaseGrid',{
    
    extend : 'Ext.grid.Panel',
    alias : 'widget.basegrid',            
    locateMethod : this.locateMethod || null,
    
    initComponent : function(){
        
        var me = this;        
        me.height = 500;
        me.columnLines = true;
        me.store = me.createStore();
        me.selModel = Ext.create('Ext.selection.CheckboxModel');
        me.columnLines = true;

        var toolbar = [],
            docked  = [];
        
        var btnDelete = {
            xtype : 'button',
            text  : 'Διαγραφή',
            handler : function(){
                this.up('grid').deleteRecord();
            }
        };
        
        var btnRemoveRow = {
            xtype : 'button',
            text  : 'Αφαίρεση',
            handler : function(){
                this.up('grid').removeRecord();
            }
        };
        
        var btnAdd = {
            xtype   : 'button',
            text    : 'Νέα Εγγραφή',
            scope   : this,
            handler : function(){
                this.fireEvent('addrecord');                                                                
            }
        };
        
        var btnAddRow = {
            xtype   : 'button',
            text    : 'Προσθήκη Εγγραφής',
            scope   : this,
            handler : function(){                                                               
                this.addGridRow();
            }
        };
        
        if(this.toolbarBtn){
            toolbar.push('->');
            if(this.toolbarBtn.indexOf('delete') !== -1){
                toolbar.push(btnDelete);
            }
            if(this.toolbarBtn.indexOf('removerow') !== -1){
                toolbar.push(btnRemoveRow);
            }
            if(this.toolbarBtn.indexOf('add') !== -1){
                toolbar.push(btnAdd);
            }
            if(this.toolbarBtn.indexOf('addrow') !== -1){
                toolbar.push(btnAddRow);
            }
        }else{
            toolbar.push('->',btnDelete,btnAdd);
        }
        
        
        var dockedToolBar = {
            xtype : 'toolbar',
            dock  : 'top',
            items : toolbar,
            style : 'background-color:#3F5E9A'
        };
        
        var dockedPaging = {
            xtype       : 'pagingtoolbar',
            store       :  me.store ,
            dock        : 'bottom',
            displayInfo : true
        };
        
        docked.push(dockedToolBar);
        if(!this.paging)
            docked.push(dockedPaging);
        
        me.dockedItems = docked;
                
        me.plugins = [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit : 1,
                    pluginId     : 'celleditingplugin'
                })
            ];
       
       me.setRenderers();  
        
       me.addEvents('addrecord');
                  
       var sortData = this.gridSort();  
         /*
       if(sortData.sort === true){
           me.store.on({
                beforeload : function( store, operation, eOpts ){
                     var id = Ext.ComponentQuery.query(sortData.idselector)[0].getValue(),
                        attributes = {
                            id : id
                        };                     
                     var parameters = Ext.JSON.encode(attributes);   
                     this.proxy.extraParams.request = '{"pk":'+id+',"parameters":'+parameters+',"action":{"select":{"method":[["'+sortData.method+'"]]}}}';
                }
            })           
       }  
         */
       me.on({
            scope : me,
            itemdblclick : me.locateForm
       });           
              
       me.callParent();
    },
    
    setRenderers : function(){		
        var me          = this,
            cols        = me.columns,
            model       = me.getStore().getProxy().getModel(),
            modelFields = model.getFields(),
            namedFields = {}, 
            aCol, aField, aDisplayField, aFieldType;

        for (var i=0,j=modelFields.length; i<j; i++){
            namedFields[modelFields[i].name] = {
                type : modelFields[i].type.type
            }
        }		

        for (var m=0,n=cols.length; m<n; m++){
            aCol          = cols[m];
            aField        = namedFields[cols[m].dataIndex];
            
            if(aCol.editor){
                aDisplayField = (aCol.editor.xtype!=='basecombobox') ? aCol.editor.displayField : null;
            }
            aFieldType    = aDisplayField ? namedFields[aDisplayField].type : aField.type;

            if (!aField)
                continue;

            if (aCol.editor){
                if (aCol.editor.xtype === 'basecombobox'){
                        aCol.renderer = aCol.renderer ? aCol.renderer : me.renderCombobox;
                        
                        if(aCol.renderer==='')
                            aCol.renderer = value;
                }else{
                    switch (aFieldType){
                        case 'int' : 			
                            aCol.align = aCol.align ? aCol.align : 'right';
                            aCol.renderer = (aCol.renderer ? aCol.renderer : function(value, metaData, record, rowIndex, colIndex, store, view){
                                    return value;	
                            });
                            break;
                        case 'float' : 					
                           aCol.renderer = (aCol.renderer ? aCol.renderer : function(value, metaData, record, rowIndex, colIndex, store, view){					                                    											
                                    return Ext.util.Format.number(value, '0,000.00');						
                            });
                            aCol.align = 'right';
                            break;
                        case 'date' : 
                            aCol.renderer = (aCol.renderer ? aCol.renderer : function(value,metaData, record, rowIndex, colIndex, store, view){
                                    return Ext.Date.format(value, 'd/m/Y');
                            });
                            aCol.align = 'left';
                            break;
                    }
                }
            }			
        }		
    },
    
    renderCombobox : function(value, metaData, record, rowIndex, colIndex, store, view, isNewRow){     
      var me      = this,
          columns = me.columns,
          editor, editorStore, editorIndex, displayField, display, rec, id, model;
      
      for(var i=0,j=columns.length;i<j;i++){          
          if(columns[i].getEditor){
              editor = columns[i].getEditor(record);                            
              if(editor.xtype === 'basecombobox'){
                  editorStore  = editor.getStore();
                  editorIndex  = editorStore.findExact(editor.valueField, value);
                  displayField = editor.displayField;
                  break;
              }
          }
      }      
      if(editorIndex !== -1){
            rec = editorStore.getAt(editorIndex);
            if(rec && rec.get(displayField)){
                display = rec.get(displayField);
            }               
        }else{    
            display = record.data[editor.displayModel];
            id = record.data[editor.valueModel]            
            rec   = {};
		
            rec[editor.valueField]   = id;
            rec[editor.displayField] = display;

            model = Ext.create(editorStore.model, rec);		
            editorStore.insert(0,model);		
            editor.setRawValue(id);      
        }      
      return display;        
    },
    
    addGridRow : function(){        
        var me       	= this,
            store    	= me.getStore(),
            model    	= store.getProxy().getModel(),
            lineRecord  = Ext.create(model,me.getDefaultValues());
        store.add(lineRecord);        
    },
    
    createStore : function(){             
        var me    = this,         
            store = Ext.create('AppLib.BaseStore',{    
            requestData : me.requestData,
            model       : me.model,
            sorters     : me.sorters            
       });       
       return store;
    },
    
    removeRecord : function(){
        var selected = this.getSelectionModel().getSelection();
        this.store.remove(selected);
    },
    
    locateForm : function(gridview, record, item, index, e, eOpts){        
        var me = this,
            requestMethod = me.locateMethod,
            options = Ext.create(this.settings),
            id = record.data[options.settings.primary_table+'.'+options.settings.KEYS.PK],
            callbackFunction = Ext.create('AppLib.BaseRequest');
            
        var parameters = {            
             'sendparams' : {id:id,command:true}, 
             'action'     :  {"select":{  "method":[requestMethod]}},
             'callback'   : this.locate,
             'scope'      : this
         }     
        callbackFunction.ajaxRequest(parameters);                  
    },
    
    locate : function(request,success,response){    
        var resp = Ext.decode(response.responseText);        
        if(resp.success === true){        
            var dataResponse = resp.data,
                options   = Ext.create(this.settings),
                formModel = options.settings.grid.formModel,
                loadForm  = options.settings.grid.form,//tab1
                card      = this.up(options.settings.layout.indexLayout),
                record,
                tab       = options.settings.grid.tabPanel,
                loadTab   = Ext.ComponentQuery.query(tab)[0],//            
                mainContainer = this.up('#mainContainer'),
                form  = Ext.ComponentQuery.query(loadForm)[0],
                grids = form.query('basegrid');
             
            mainContainer.getLayout().setActiveItem(card);
            card.getLayout().setActiveItem(form);       
            if(loadTab){
                loadTab.setActiveTab(0);          
            }
            
            for(var k=0,l=grids.length;k<l;k++){
                grids[k].getStore().removeAll();
            }
            
            for(var aData in dataResponse){							
                var dataObject = dataResponse[aData];							
                for(var n=0,m=grids.length; n<m; n++){
                    var gridAssoc = grids[n].sqlIndex;
                    if(gridAssoc === aData){
                        grids[n].store.loadData(dataObject);
                        grids[n].getStore().commitChanges();
                        break;	
                    }
                }														
            }
            record    = Ext.create(formModel,dataResponse[aData][0]);//last item in object
            form.getForm().loadRecord(record);
            form.mode = 'update';
			/****************************************************/
			//TODO readonly sets to other function
			var fields = form.getForm().getFields().items;
			for(var i=0,j=fields.length;i<j;i++){
				if(fields[i].modifyField === '0'){
					fields[i].setReadOnly(true);
				}
			}
			/*******************************************************/			
        }else{
            alert('something wrong');
        }                 
    },
            
    deleteRecord : function(){        
        var options = Ext.create(this.settings),
            table = options.settings.primary_table,
            PK_KEY = options.settings.KEYS.PK,
            selected = this.getSelectionModel().getSelection(),
			requestInit = Ext.create('AppLib.BaseRequest');  
            //requestInit = Ext.create('Doctors.libs.BaseRequest');                         
        /*************************DELETE*********************/          
        var recordID, allTable = [], allData, idData, action = {};            
        action['delete']={};          
        for(var n=0,m=selected.length;n<m;n++){                  
            recordID = selected[n].data[table+'.'+PK_KEY];            
            idData = {};
            idData[PK_KEY] = recordID;                
            allData = {'where' : idData};
            allTable.push(allData);                                   
            if(n==m-1){         
              action['delete'][table] = allTable;                       
            }                  
        }             
        var parameters = {
            'action'   : action,
            'pk'       : PK_KEY,
            'callback' : this.deleteResponse,
            'scope'    : this
        }        
        requestInit.ajaxRequest(parameters);                                  
    },
    
    deleteResponse : function(request,success,response){         
        var resp = Ext.decode(response.responseText);        
        if(resp.success === true){    
            this.store.reload();
        }else{
            alert('Something Wrong');
        }
        
    }    
    
            
});

