<?php
/***************findoc***************/
function getFindocBrowser(){
    return "select SQL_CALC_FOUND_ROWS
            findoc.idfindoc as 'findoc.idfindoc',
            contact.name as 'contact.name',
            paytype.name as 'paytype.name',
            findoc.transdate as 'findoc.transdate',
            findoc.amount as 'findoc.amount'
            from paytype inner join findoc on paytype.idpaytype = findoc.idpaytype
            inner join contact on findoc.idcontact = contact.idcontact";        
}

function getCountries($query){
    return "select idcountry ,name from country where name like '%$query%' order by idcountry";
}

function getSeries(){  
  return "select idseries,name from series";  
}
  
function getPaytypes(){
  return "select idpaytype,name from paytype";      
}

function getContacts($query){
  return "select idcontact,name from contact where name like '%$query%' order by name";   
}
  
function getSeriesNumber($id){
    return "select * from seriesnum where idseries=$id";
}

function getFindocLocate($attributes){
  $id = $attributes["id"]; 
  return "select findoc.idfindoc as 'findoc.idfindoc',
          findoc.idcontact as 'findoc.idcontact',
          findoc.idpaytype as 'findoc.idpaytype',
          findoc.idseries as 'findoc.idseries',
          findoc.transdate as 'findoc.transdate',
          findoc.receiptnumber as 'findoc.receiptnumber',
          findoc.amount as 'findoc.amount',
          findoc.completed as 'findoc.completed',
          findoc.reasoning as 'findoc.reasoning'
          from findoc where idfindoc=$id";
}
  
function updateSeriesNumber($attributes){        
    $id = $attributes['idseries'];    
    return "update seriesnum set lastnumber=lastnumber+1 where idseries=$id";    
}  
 

/***********************expense***************************/
function getExpenseBrowser(){
    return "select SQL_CALC_FOUND_ROWS
            expense.idexpense as 'expense.idexpense',
            mtrl.name as 'mtrl.name',
            expense.amount as 'expense.amount',
            expense.issuedate as 'expense.issuedate'
            from mtrl inner join expense on mtrl.idmtrl = expense.idmtrl";        
}

function getExpenseMtrl($query){
    return "select idmtrl,name from mtrl where name like '%$query%' order by name";   
}


?>
