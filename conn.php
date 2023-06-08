<?php
    $servername = $_SERVER['SERVER_NAME'];
    $username = $_SERVER['DATABASE_USERNAME'];
    $password = $_SERVER['DATABASE_PASSWORD'];
    $db_name = $_SERVER['DATABASE_NAME'];
    $conn = new mysqli($servername,$username,$password,$db_name);

    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }

    $GLOBALS['DB_CON'] = $conn;
?>