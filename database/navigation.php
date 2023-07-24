<?php

require_once('IsLoggedIn.php');

header('Content-Type: application/json');
echo json_encode(['loggedIn' => IsLoggedIn(), 'isadmin' => IsLoggedInAsAdmin()]);
?>