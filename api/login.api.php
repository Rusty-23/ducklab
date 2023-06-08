<?php
include_once "../config.php";
include_once "../conn.php";
include "./utils/database.php";


if(isset($_POST['submit'])){
    $db = new Database($conn);

    $username = $_POST['user'];
    $password = $_POST['pass'];
    $sql = "select * from login where username ='$username' and password = '$password'";
    $count = $db->get_count($sql);
    
    if($count==1){
        $current_user = $db->get_one($sql);

        session_start();
        $_SESSION['current_user']= $current_user;
        echo json_encode($_SESSION);
        header("Location: ../");
    } else {
        header("Location: " . BASE_URL . "login?invalid=true");
    }
} else {
    header("Location: " . BASE_URL . "login");
}