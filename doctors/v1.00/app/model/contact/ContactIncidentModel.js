Ext.define(APPNAME+'.model.contact.ContactIncidentModel',{
    
    extend : 'AppLib.Model',
    fields : [        
        {name : 'incident.idincident', type : 'int'},
        {name : 'incident.idcontact', type : 'int'},               
        {name : 'incident.idicd', type : 'int'},               
        {name : 'incident.incidentdate', type : 'date'},              
        {name : 'incident.description', type : 'string'},              
        {name : 'incident.symptom', type : 'string'},             
        {name : 'incident.clinicexam', type : 'string'},             
        {name : 'incident.diagnosis', type : 'string'},
        {name : 'incident.treatment', type : 'string'},
        {name : 'incident.comments', type : 'string'},
        {name : 'incident.created', type : 'date'},
        {name : 'incident.updated', type : 'date'}
        
    ]
    
});


