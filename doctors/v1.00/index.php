<?php
session_start();

if(!isset($_SESSION['appsettings']['version']) || !isset($_SESSION['appsettings']['idcompany']) || 
!isset($_SESSION['appsettings']['iduser'])){
	exit;
}
	
?>

<html>
<head>
    <meta charset="UTF-8">
    <title>TEST</title>
    <link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all-neptune.css">
    <script type="text/javascript" src="extjs/ext-all-debug.js"></script>
    <script type="text/javascript" src="app/app.js"></script>    
    <style>
        .loading{
            text-align : center;
            color : #bb0000;
            margin-top : 200px;
        }
    </style>
    
</head>
<body>

<div id="app_start_div">
    <p class="loading">
		LOADING APP...<br/><br/> 
		<img src="http://forge.typo3.org/attachments/15642/big-f0f0f0.gif" />
	</p>
</div>	
</body>
</html>

