<?php
// Perform authentication logic here (e.g., check session or database)

// Simulating the login check
session_start();

$loggedIn = isset($_SESSION['email']);
$isAdmin = isset($_SESSION['isadmin']) && $_SESSION['isadmin'] == 1;

// Return the login status and role as a JSON response
header('Content-Type: application/json');
echo json_encode(['loggedIn' => $loggedIn, 'isAdmin' => $isAdmin]);
?>