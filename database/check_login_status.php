<?php
session_start();

// Check if the user is logged in
$loggedIn = isset($_SESSION['email']);

// Set the isAdmin flag based on the user's admin status
$isAdmin = isset($_SESSION['isadmin']) && $_SESSION['isadmin'] == 1;

// Return the login status and isAdmin as a JSON object
$response = array(
    'loggedIn' => $loggedIn,
    'isAdmin' => $isAdmin
);
echo json_encode($response);
?>