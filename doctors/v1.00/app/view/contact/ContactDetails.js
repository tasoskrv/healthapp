Ext.define(APPNAME+'.view.contact.ContactDetails',{
    
    extend : 'Ext.container.Container',
    alias  : 'widget.contactdetails',
        
    initComponent : function(){
        
         var me = this;
             me.settings = APPNAME+'.view.contact.ContactSettings';          
         var contactSodtypeStore = Ext.create(APPNAME+'.store.contact.ContactType');        
         var contactGenderStore = Ext.create(APPNAME+'.store.contact.ContactGender');        
         var contactBloodStore = Ext.create(APPNAME+'.store.contact.ContactBloodType');          
        //TODO: sqlidex stin forma opos kai sta grid gia min mpainei panta teleutaia sto locate            
        me.items = [{                                       
            xtype  : 'container',            
            layout : 'column',                        
            defaults : {
                labelAlign  : 'top',                        
                columnWidth : 1
            },
            items : [            
                //row1
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Ονοματεπώνυμο',
                    columnWidth : 0.5,
                    margin      : '10 20 10 50',
					allowBlank  : false,
                    name        : 'contact.name'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Τίτλος',
                    columnWidth : 0.25,
                    margin      : '10 20 10 20',
                    name        : 'contact.title'
                },{
                    xtype        : 'basecomboboxlocal',
                    fieldLabel   : 'Τύπος Επαφής',                        
                    columnWidth  : 0.25,
                    margin       : '10 50 10 20',
                    name         : 'contact.sodtype',
                    store        : contactSodtypeStore,                        
                    displayField : 'name',
                    valueField   : 'sodtype',
                    value        : 0
                },                    
                //row2
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Όνομα πατρός',
                    columnWidth : 0.5,
                    margin      : '10 20 10 50',
                    name        : 'contact.fathername'
                },{
                    xtype        : 'basecomboboxlocal',
                    fieldLabel   : 'Φύλλο',                        
                    columnWidth  : 0.25,
                    margin       : '10 20 10 20',
                    name         : 'contact.gender',
                    store        : contactGenderStore,        
                    displayField : 'name',
                    valueField   : 'gender',
                    value        : 1
                },{
                    xtype       : 'basedatefield',
                    fieldLabel  : 'Ημερομηνία Γέννησης',
                    columnWidth : 0.25,
                    margin      : '10 50 10 20',
                    name        : 'contact.birthdate',
                    maxValue    : new Date(),
                    submitFormat: 'Y-m-d'
                },
                //row3
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Επάγγελμα',
                    columnWidth : 0.25,
                    margin      : '10 10 10 50',
                    name        : 'contact.job'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Εταιρεία',
                    columnWidth : 0.25,
                    margin      : '10 20 10 50',
                    name        : 'contact.company'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'ΑΦΜ',
                    columnWidth : 0.25,
                    margin      : '10 20 10 20',
                    name        : 'contact.irs'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'ΔΟΥ',
                    columnWidth : 0.25,                    
                    margin      : '10 50 10 20',
                    name        : 'contact.doy'
                },                
                //row4
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Τηλέφωνο',
                    name        : 'contact.phone',
                    margin      : '10 20 10 50',
                    columnWidth : 0.33
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Κινητό',
                    name        : 'contact.mobile',
                    margin      : '10 20 10 20',
                    columnWidth : 0.33
               },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Fax',
                    name        : 'contact.fax',
                    margin      : '10 30 10 20',
                    columnWidth : 0.33
               },
               //row 5 
               {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Email',
                    name        : 'contact.email',
                    margin      : '10 20 10 50',
                    columnWidth : 0.33
               },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Έκτατη Επαφή',
                    columnWidth : 0.33,
                    margin      : '10 20 10 20',
                    name        : 'contact.emergencycontact'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Έκτατο Νούμερο',
                    columnWidth : 0.33,
                    margin      : '10 30 10 20',
                    name        : 'contact.emergencynumber'
                }, 
                //row6
                {
                     xtype       : 'basetextfield',
                     fieldLabel  : 'Πόλη',
                     name        : 'contact.city',
                     margin      : '10 20 10 50',
                     columnWidth : 0.33
                },{
                     xtype       : 'basetextfield',
                     fieldLabel  : 'Περιοχή',
                     name        : 'contact.area',
                     margin      : '10 20 10 10',
                     columnWidth : 0.33
                },{
                     xtype        : 'basecombobox',
                     fieldLabel   : 'Χώρα',
                     pageSize     : 256,
                     name         : 'contact.idcountry',     
                     itemId       : 'contact_idcountry',
                     requestData : '{"action":{"select":{"method":[["Contact.getCountries"]]}}}',                     
                     model        : APPNAME+'.model.contact.ContactCountryModel',
                     displayField : 'name',
                     valueField   : 'idcountry',
                     value        : 92,
                     margin       : '10 30 10 20',
                     columnWidth  : 0.33
                },
                //row7
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Ταχυδρομικός Κώδικας',
                    name        : 'contact.postcode',
                    margin      : '10 20 10 50',
                    columnWidth : 0.5
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Διεύθυνση',
                    name        : 'contact.address',
                    margin      : '10 30 10 20',
                    columnWidth : 0.5
                },                
                //row8
                {
                    xtype       : 'basetextfield',
                    fieldLabel  : 'AMKA',
                    name        : 'contact.amka',
                    columnWidth : 0.33,
                    margin      : '10 20 10 50'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Ασφαλιστικός Φορέας',
                    name        : 'contact.insurer',
                    columnWidth : 0.33,
                    margin      : '10 20 10 20'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'ΑΜ',
                    name        : 'contact.regnumber',
                    columnWidth : 0.33,
                    margin      : '10 30 10 20'
                },
                //row9
                {
                    xtype        : 'basecomboboxlocal',
                    fieldLabel   : 'Ομάδα Αίματος',                        
                    columnWidth  : 0.25,
                    margin       : '10 20 10 50',
                    name         : 'contact.idblood',
                    store        : contactBloodStore,              
                    value        : 6,
                    displayField : 'bloodtype',
                    valueField   : 'idbloodtype'                         
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Χρόνια Αγωγή',
                    columnWidth : 0.25,
                    margin      : '10 20 10 50',
                    name        : 'contact.chrontreat'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Παραπέμπων Γιατρός',
                    columnWidth : 0.25,
                    margin      : '10 20 10 20',
                    name        : 'contact.todoctor'
                },{
                    xtype       : 'basetextfield',
                    fieldLabel  : 'Σύσταση',
                    columnWidth : 0.25,
                    name        : 'contact.recommendation',
                    margin       : '10 30 10 20'
                },
                //row10
                {
                    xtype       : 'basetextarea',
                    fieldLabel  : 'Σχόλια',
                    columnWidth : 0.5,
                    name        : 'contact.comments',
                    margin      : '10 200 10 50'
                },
                //hidden
                {
                    xtype  : 'basetextfield',
                    name   : 'contact.idcontact',
                    itemId : 'idcontact',
                    hidden : true      
                },{
                    xtype  : 'basetextfield',
                    name   : 'contact.iduser',
                    hidden : true,
                    value  : 1
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'contact.created'
                },{
                    xtype  : 'basetextfield',
                    hidden : true,
                    name   : 'contact.updated'
                }]                                                                  
        }];
                    
     me.callParent();   
   }
    
});

