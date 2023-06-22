<?php
session_start();

$loggedIn = isset($_SESSION['email']);
$isadmin = isset($_SESSION['isadmin']) && $_SESSION['isadmin'] == 1;

header('Content-Type: application/json');
echo json_encode(['loggedIn' => $loggedIn, 'isadmin' => $isadmin]);
?>