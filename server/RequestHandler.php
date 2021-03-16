<?php
include_once 'request/BuildQuery.php';
include_once 'request/BuildInsert.php';
include_once 'request/BuildDelete.php';
include_once 'request/BuildUpdate.php';
include_once 'request/BuildSelect.php';
include_once 'request/Config.php';

$request = json_decode($_POST['request'], true);
if(isset($_GET['request'])){
    $request1 = json_decode($_GET['request'], true);
}

$pk=null;
$command = -1;
$parameters = -1;
if (isset($request['pk'])){
    $pk = $request['pk'];
}

if (isset($request['parameters'])){
    $parameters = $request['parameters'];	
}

$actions = $request['action'];

$pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
$pdo->exec("SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
try {
    $pdo->beginTransaction();
    $firstResponse = null;
    $masterID = -1;
    foreach ($actions as $key => $action) {
        
        if(count($action)==0)
            continue;
        
        if ($key == 'insert') {
            $build = new BuildInsert($pdo, $action, $pk, $masterID);
        } else if ($key == 'update') {
            $build = new BuildUpdate($pdo, $action, $pk, $masterID);
        } else if ($key == 'select') {
            $build = new BuildSelect($pdo, $action, $pk, $masterID);
            if (isset($_POST['start']))
                $build->setStart($_POST['start']);
            if (isset($_POST['limit']))
                $build->setLimit($_POST['limit']);
            if (isset($_POST['sort']))
                $build->setSort(json_decode($_POST['sort'], true));
            if (isset($_POST['query']))
                $build->setQueryStr($_POST['query']);
            if($parameters!=-1)
                $build->setParameters($parameters);
            
            $build->setID($pk);
            
        } else if ($key == 'delete') {
            $build = new BuildDelete($pdo, $action, $pk, $masterID, $command);
        }
        $response = $build->build();
        if ($firstResponse == null) {
            $firstResponse = $response;
            $id = json_decode($firstResponse, true);
            if (array_key_exists("id", $id))
                $masterID = $id["id"];
        }
    }
    $pdo->commit();
} catch (PDOException $e) {
    $pdo->rollback();
    $firstResponse = json_encode(array('success' => false, 'message' => $e->getMessage()));
}
echo $firstResponse;

  
?>