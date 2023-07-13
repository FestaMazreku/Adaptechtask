<?php
session_start();
function IsLoggedIn()
{
    return isset($_SESSION['email']);
}

$response = array('isLoggedIn' => IsLoggedIn());
echo json_encode($response);
?>