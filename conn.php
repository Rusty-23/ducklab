<?php
    $servername = "localhost";
    $username = "root"; 
    $password = "";
    $db_name = "ducklab";
    $conn = new mysqli($servername,$username,$password,$db_name);

    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }
    // $servername = $_SERVER['localhost'];
    // $username = $_SERVER['root'];
    // $password = $_SERVER[''];
    // $db_name = $_SERVER['ducklab'];
    // $conn = new mysqli($servername,$username,$password,$db_name);

    // if($conn->connect_error){
    //     die("Connection failed".$conn->connect_error);
    // }

    $GLOBALS['DB_CON'] = $conn;
?>