Ext.define('AppLib.gui.Form',{
    
    extend : 'Ext.form.Panel',
    alias  : 'widget.baseform',
    mode   : 'insert',
    //trackResetOnLoad : true,
    initComponent : function(){
        
        var me = this;
        
        me.dockedItems = [{
            xtype : 'toolbar',
            dock  : 'top',
            style : 'background-color:#3F5E9A',
            items : ['->',{
                xtype : 'button',
                itemId : 'btnCancel',
                text  : 'Ακύρωση',
                scope : me,
                listeners : {
                    click : function(){
                        this.cancelForm();
                    },
                    scope : me
                }
            },{
                xtype : 'button',
                text  : 'Αποθήκευση',
                listeners : {
                    click : function(button,e,eOpts){
                                this.submitForm();
                            },
                    scope : me
                }
            }]
        }];
        me.callParent();
    },
    
    cancelForm : function(){
       var options = Ext.create(this.settings),
           card = options.settings.layout.indexLayout,
           selector = options.settings.layout.browserSelector,
           list = Ext.ComponentQuery.query(selector)[0];
           this.up(card).getLayout().setActiveItem(list)
    },
    
    submitForm : function(){      
       var options = Ext.create(this.settings),
           PK_KEY = options.settings.KEYS.PK,
           //requestInit = Ext.create('Doctors.libs.BaseRequest'),
		   requestInit = Ext.create('AppLib.BaseRequest'),
           formMode = this.mode,
           columnData, idData, parameters;
       var form         = this.getForm(), 
		   formFields   = form.getValues(),
           uniqueTables = options.settings.submitTables,
           action = {};
           action['insert'] = {};
           action['update'] = {};
           action['delete'] = {};
           action['select'] = {};
		   
        for(var k=0,l=uniqueTables.length;k<l;k++){//tables found                    
            if(formMode==='update'){                                         
                var res = this.setFormValuesUpdate(uniqueTables,formFields, k);
                columnData = res['where'];
                idData = res['id'];                
                action[formMode][uniqueTables[k]] = [{
                    'fields' : columnData,
                    'where' : idData
                }];                            
            }else if(formMode==='insert'){
                columnData = this.setFormValuesInsert(uniqueTables,formFields, k);
                action[formMode][uniqueTables[k]] = [columnData];
            }                                                
        }
                        
        /*************************GRIDS*********************/            
        /***************INSERT***********/
        var grids = this.getGrids(),
            storeRecords, record, table, gridData, allTable, updateData, allData;          
        for(var i=0,j=grids.length;i<j;i++){              
            storeRecords = this.getStoreRecords(i,'insert');
            gridData = [];                   
          for(var n=0,m=storeRecords.length;n<m;n++){                  
              record = storeRecords[n].data;                  
              columnData = this.setGridValuesInsert(record);                  
              gridData.push(columnData);                                    
              if(n==m-1){
                  table = Object.keys(record)[0].split(".")[0];
                  action['insert'][table] = gridData;
              }                  
          }              
        }            
        /*************UPDATE***************/      
        for(var a=0;a<2;a++){
            var type = (a==0)?'update':'delete';                
            for(i=0,j=grids.length;i<j;i++){              
                storeRecords = this.getStoreRecords(i,type);
                gridData = []; allTable = [];               
                for(n=0,m=storeRecords.length;n<m;n++){                  
                    record = storeRecords[n].data;                        
                    updateData = this.setGridValuesUpdateDelete(record);
                    columnData = updateData['where'];
                    idData = updateData['id'];
                    allData = {'fields' : columnData,'where' : idData};
                    allTable.push(allData);                  
                    if(n==m-1){         
                      table = Object.keys(record)[0].split(".")[0];  
                      action[type][table] = allTable;                       
                    }                  
                }  
            }
        }                           
        
		var sendparams = {
				command:true
			};
		
		//TODO: find a way to add dynamic actions per case
		if(formMode === 'insert' && uniqueTables[0]==="findoc"){            
            action['select'] = {"method":[["Findoc.updateSeriesNumber"]]};
            var idseries = Ext.ComponentQuery.query('appfindoc findocform #findoc_series')[0].getValue();    
			sendparams["idseries"] = idseries;
		}		
					   
		parameters = {
            'action'     : action,
            'pk'         : PK_KEY,
            'sendparams' : sendparams,
            'callback'   : this.submitResponse,
            'scope'      : this
        }
			
		if(form.isValid()){//isos xreiastei kai gia ta fields
			requestInit.ajaxRequest(parameters);//TODO delete requestInit
		}			          
    },

    setFormValuesInsert : function(uniqueTables,formFields, index){         
        var aFields, aTable, aColumn, columnData = {};            
        for(var aRecord in formFields){                
            aFields = aRecord.split(".");
            aTable = aFields[0];
            aColumn = aFields[1];                
            if(aTable === uniqueTables[index]){//choose correct table                                     
                if(aColumn === 'created' || aColumn === 'updated'){
                    formFields[aRecord] = Ext.Date.format(new Date(), 'Y-m-d');                                
                }
                columnData[aColumn] = formFields[aRecord];                                                                                                    
            }                
        }
       return columnData;       
   },
   
    setFormValuesUpdate : function(uniqueTables,formFields, index){
      var aFields, aTable, aColumn, 
          columnData = {},
          idData     = {};
            
          for(var aRecord in formFields){                
              aFields = aRecord.split(".");
              aTable = aFields[0];
              aColumn = aFields[1];                
              if(aTable === uniqueTables[index]){//choose correct table    
                  if(aColumn==='id'+aTable){
                      idData[aColumn] = formFields[aRecord];
                  }else{                                
                      if(aColumn === 'created'){
                          continue;
                      }else if(aColumn === 'updated'){
                          formFields[aRecord] = Ext.Date.format(new Date(), 'Y-m-d');
                      }                                
                      columnData[aColumn] = formFields[aRecord];
                  }                                                                                
              }
          }
          return {
            'where' : columnData,
            'id'    : idData
        };       
   },   
   
    getGrids : function(){       
       return this.query('basegrid');         
   },
   
    getStoreRecords : function(index,type){       
       var aGrid = this.query('basegrid')[index],
           store = aGrid.store,
           records;           
       if(type === 'insert'){
           records = store.getNewRecords();
       }else if(type === 'update'){
           records = store.getUpdatedRecords();
       }else if(type === 'delete'){
           records = store.getRemovedRecords();
       }
       return records;       
   },
   
    setGridValuesInsert : function(record){              
       var options = Ext.create(this.settings),
           PK_KEY = options.settings.KEYS.PK,
           pkFormSelector = options.settings.pkFormSelector;
        var columnData = {},
            rec, table, column;                        
        for (var aRecord in record){
            rec = aRecord.split('.');                      
            table = rec[0];
            column = rec[1];            
            if('id'+table === column){
                continue;
            }else{
                if(column === PK_KEY){
					if(this.mode === "update"){//mono sto update (to -1 tha mporouse na einai kai edo)
						record[aRecord] = Ext.ComponentQuery.query(pkFormSelector)[0].getValue();
					}
                }else if(column === 'created' || column === 'updated'){
                    record[aRecord] = Ext.Date.format(new Date(), 'Y-m-d');                                
                }
            }
            columnData[column] = record[aRecord];                      
        }
       return columnData;       
   },
   
    setGridValuesUpdateDelete : function(record){
        var columnData = {}, idData = {};
        for (var aRecord in record){
            var rec = aRecord.split('.');                      
            var table = rec[0];
            var column = rec[1];                      
            if('id'+table === column){
                idData[column] = record[aRecord];
            }else{
              if(column === 'created' || column === 'updated'){
                record[aRecord] = Ext.Date.format(new Date(), 'Y-m-d');                                
              }
              columnData[column] = record[aRecord];
            }                          
        }        
        return {
            'where' : columnData,
            'id'    : idData
        };        
   },

    getUniqueArrayItems : function(formFields,tables){            
        var fields,fieldTable,
            formTables = [],
            unique = [];        
            
        for (var record in formFields){                 
            fields = record.split('.');
            fieldTable = fields[0];
            if(tables.indexOf(fieldTable)!==-1){
                formTables.push(fieldTable);                 
            }
        }        
        for (var i=0, j=formTables.length; i<j; i++){
            if (unique.indexOf(formTables[i]) === -1)
                unique.push(formTables[i]);
        }        
        return unique;
    },
        
    submitResponse : function(request,success,response){     
        var options = Ext.create(this.settings),
            appIndex = this.up(options.settings.layout.indexLayout),
            browserSelector = options.settings.layout.browser,
            browser;               
        var resp = Ext.decode(response.responseText);
        
        if(resp.success === true){            
            browser = appIndex.down(browserSelector);
            appIndex.getLayout().setActiveItem(browser);            
         }else{
             alert('something wrong');
         }                       
         browser.down('basegrid').store.load();
    },
    
    fixDate : function(date){        
        if(date!=='' && date!==null){
            if(Ext.isDate(date)){
                return Ext.Date.format(date, 'Y-m-d');
            }               
            var dateIS = date.split('/'),
                fixedDate = dateIS[2]+'-'+dateIS[1]+'-'+dateIS[0];                                
            return Ext.Date.format(new Date(fixedDate), 'Y-m-d');            
        }
        return '';
    }
    
    
});



