<?php
session_start();
//TODO write logs
if(!isset($_GET["session"])){
    session_destroy();
    exit;
}

$sessionManager = $_GET['session'];
//TODO check valid sessionManager
//check by split count and token
$sessionParts = explode("*", $sessionManager); 
if(count($sessionParts)!== 9){
    session_destroy();
    exit;
}

$token = $sessionParts[8];
if($token!=="JSHDK78347HSDHH2632HFG267DSYU76SDYD67S"){//TODO
    session_destroy();
    exit;
}

$idcompany = $sessionParts[0];
$iduser = $sessionParts[1];
$dbhost = $sessionParts[2];
$dbtype = $sessionParts[3];
$dbname = $sessionParts[4];
$dbuser = $sessionParts[5];
$dbpass = $sessionParts[6];
$version = $sessionParts[7];

$_SESSION['appsettings'] = array();
$_SESSION['appsettings']['idcompany'] = $idcompany;
$_SESSION['appsettings']['iduser'] = $iduser;
$_SESSION['appsettings']['dbhost'] = $dbhost;
$_SESSION['appsettings']['dbtype'] = $dbtype;
$_SESSION['appsettings']['dbname'] = $dbname;
$_SESSION['appsettings']['dbuser'] = $dbuser;
$_SESSION['appsettings']['dbpass'] = $dbpass;
$_SESSION['appsettings']['version'] = $version;

header("Location:http://localhost:80/cloudocean/doctors/v$version/index.php");
?>
