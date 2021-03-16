<?php
function getDashboardReceipts(){
    return "select findoc.amount as 'findoc.amount',
            findoc.transdate as 'findoc.transdate'
            from findoc";
}


?>

