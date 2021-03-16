<?php
function getContactBrowser(){
    return "select SQL_CALC_FOUND_ROWS
            contact.idcontact as 'contact.idcontact',
            contact.name as 'contact.name',
            contact.sodtype as 'contact.sodtype',
            contact.job as 'contact.job',
            contact.emergencycontact as 'contact.emergencycontact',
            contact.emergencynumber as 'contact.emergencynumber',
            contact.chrontreat as 'contact.chrontreat',
            contact.address as 'contact.address',
            contact.city as 'contact.city',
            contact.mobile as 'contact.mobile' from contact";
}

function getIcd($query){    
    return "select SQL_CALC_FOUND_ROWS
            idicd ,concat(code,' - ',name) as name from icd 
            where name like '%$query%' or code like '%$query%' or idicd like '%$query%'
            ";
}

function getCountries(){
    return "select idcountry, name from country order by idcountry";
}

function getContactLocate($attributes){    
    $id = $attributes["id"];    
    return  "select contact.idcontact as 'contact.idcontact',
                    contact.name as 'contact.name',
                    contact.sodtype as 'contact.sodtype',
                    contact.birthdate as 'contact.birthdate',
                    contact.fathername as 'contact.fathername',
                    contact.company as 'contact.company',
                    contact.title as 'contact.title',
                    contact.job as 'contact.job',
                    contact.gender as 'contact.gender',
                    contact.amka as 'contact.amka',
                    contact.irs as 'contact.iris',
                    contact.doy as 'contact.doy',
                    contact.emergencycontact as 'contact.emergencycontact',
                    contact.emergencynumber as 'contact.emergencynumber',
                    contact.recommendation as 'contact.recommendation',
                    contact.todoctor as 'contact.todoctor',
                    contact.chrontreat as 'contact.chrontreat',
                    contact.comments as 'contact.comments',
                    contact.address as 'contact.address',
                    contact.area as 'contact.area',
                    contact.postcode as 'contact.postcode',
                    contact.city as 'contact.city',
                    contact.idcountry as 'contact.idcountry',
                    contact.phone as 'contact.phone',
                    contact.mobile as 'contact.mobile',
                    contact.fax as 'contact.fax',
                    contact.email as 'contact.email',
                    contact.idblood as 'contact.idblood'
             from contact where idcontact=$id";
    }

    
function getAllergyBrowser($attributes) {    
    $id = $attributes["id"];    
    return "select SQL_CALC_FOUND_ROWS
            allergy.idallergy as 'allergy.idallergy',
            allergy.idcontact as 'allergy.idcontact',
            allergy.description as 'allergy.description',
            allergy.diagnosedate as 'allergy.diagnosedate',
            allergy.reaction as 'allergy.reaction'
            from allergy where allergy.idcontact = $id";
}

function getHistoryBrowser($attributes){
    $id = $attributes["id"]; 
    return "select SQL_CALC_FOUND_ROWS
            history.idhistory as 'history.idhistory',
            history.idcontact as 'history.idcontact',
            history.idicd as 'history.idicd',
            concat(icd.code,' - ',icd.name) as 'history.icd',
            history.description as 'history.description',
            history.insertdate as 'history.insertdate',
            history.exitdate as 'history.exitdate',
            history.surgery as 'history.surgery'
            from history inner join icd on history.idicd = icd.idicd where history.idcontact = $id";    
}

  function getIncidentBrowser($attributes){  
    $id = $attributes["id"]; 
    return "select SQL_CALC_FOUND_ROWS
            incident.idincident as 'incident.idincident',
            incident.idcontact as 'incident.idcontact',
            incident.idicd as 'incident.idicd',
            incident.incidentdate as 'incident.incidentdate',
            incident.description as 'incident.description',
            incident.symptom as 'incident.symptom',
            incident.clinicexam as 'incident.clinicexam',
            incident.diagnosis as 'incident.diagnosis',
            incident.treatment as 'incident.treatment',
            incident.comments as 'incident.comments'
            from incident where incident.idcontact = $id"; 

  }



?>
