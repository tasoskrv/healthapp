Ext.define(APPNAME+'.model.contact.ContactAllergyModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'allergy.idallergy', type : 'int'},
        {name : 'allergy.idcontact', type : 'int'},               
        {name : 'allergy.description', type : 'string'},              
        {name : 'allergy.diagnosedate', type : 'date'},             
        {name : 'allergy.reaction', type : 'string'},
        {name : 'allergy.created', type : 'date'},
        {name : 'allergy.updated', type : 'date'}
    ]
    
});


