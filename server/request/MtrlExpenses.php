<?php

function getMtrlExpenseBrowser(){
    return "select SQL_CALC_FOUND_ROWS
            mtrl.idmtrl as 'mtrl.idmtrl',
            mtrl.code as 'mtrl.code',
            mtrl.name as 'mtrl.name',
            mtrl.comments as 'mtrl.comments'
            from mtrl";        
}

function getMtrlExpenseLocate($attributes){
	$id = $attributes["id"]; 
    return "select mtrl.idmtrl as 'mtrl.idmtrl',
            mtrl.code as 'mtrl.code',
            mtrl.name as 'mtrl.name',
            mtrl.comments as 'mtrl.comments'
            from mtrl where idmtrl=$id";
}

?>
