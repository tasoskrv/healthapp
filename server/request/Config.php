<?php

session_start();
define("DB_HOST",$_SESSION['appsettings']['dbhost']);
define("DB_TYPE",$_SESSION['appsettings']['dbtype']);
define("DB_NAME",$_SESSION['appsettings']['dbname']);
define("DB_USER",$_SESSION['appsettings']['dbuser']);
define("DB_PASS",$_SESSION['appsettings']['dbpass']);

?>
