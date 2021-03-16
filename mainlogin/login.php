<?php
//TODO write logs
$response = new stdClass();

if(!isset($_POST["data"])){
    $response->success = false;
    $response->message = "something wrong";
    $response->requestCode = 100;    
    echo json_encode($response);
    exit;
}
    
$credentials = json_decode($_POST["data"]);
$email = $credentials->email;
$password = $credentials->password;
$idapp = $credentials->idapp;

define("DB_HOST","localhost");
define("DB_TYPE","mysql");
define("DB_NAME","LicenseManager");
define("DB_USER","root");
define("DB_PASS","");

$pdo = new PDO(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME . '', DB_USER, DB_PASS);

$queryUser = "select iduser,idcompany from user where email='$email' and password='$password'";
$resultUser = $pdo->prepare($queryUser);
$resultUser->execute();
$rowUser = $resultUser->fetch();
$iduser = $rowUser['iduser'];
$idcompany = $rowUser['idcompany'];
      
if($iduser>0){//user found
    //check if user company has this app
    $queryCompanyApp = "select idappstore from appstore where idcompany=$idcompany and idapp=$idapp "; 
    $resultCompanyApp = $pdo->prepare($queryCompanyApp);
    $resultCompanyApp->execute();
    $rowCompanyApp = $resultCompanyApp->fetch();
    $idappstore = $rowCompanyApp['idappstore']; 
    
    if($idappstore>0){//company and user has app
        //get company settings for specific app
        $queryCompanySettings = "select typeis,valueis from companysetting where idcompany=$idcompany and idapp=$idapp";
        $resultCompanySettings = $pdo->query($queryCompanySettings);
        $resultCompanySettings->execute();
        while($rowCompanySettings = $resultCompanySettings->fetch()){
            $typeis = $rowCompanySettings["typeis"];
            switch ($typeis){
                case "dbhost":
                    $dbhost = $rowCompanySettings["valueis"];
                    break;
                case "dbtype":
                    $dbtype = $rowCompanySettings["valueis"];
                    break;
                case "dbname":
                    $dbname = $rowCompanySettings["valueis"];
                    break;
                case "dbuser":
                    $dbuser = $rowCompanySettings["valueis"];
                    break;
                case "dbpass":
                    $dbpass = $rowCompanySettings["valueis"];
                    break;
                case "version":
                    $version = $rowCompanySettings["valueis"];
                    break;
            }
        }
        //create get var
        if($idapp == 1){
            //TODO url
            $appUrl = "http://localhost:80/cloudocean/doctors/redirect.php?session=";
            //TODO change
            $token = "JSHDK78347HSDHH2632HFG267DSYU76SDYD67S";
            $sessionManager = "$idcompany*$iduser*$dbhost*$dbtype*$dbname*$dbuser*$dbpass*$version*$token";
        }
        $response->success = true;
        $response->message = "User Authenticated";
        $response->requestCode = 200;
        $response->sessionManager = $appUrl.$sessionManager;
        echo json_encode($response);
    }else{
        $response->success = false;
        $response->message = "User does not have app";
        $response->requestCode = 300;
        echo json_encode($response);
    }
}else{//user found
    $response->success = false;
    $response->message = "User not found";
    $response->requestCode = 400;
    echo json_encode($response);    
}

?>