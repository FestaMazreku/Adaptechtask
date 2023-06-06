<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

// Check if the submitted username and password are valid
if ($username === $validUsername && $password === $validPassword) {
    // Login success
    $response = array('success' => true);
} else {
    // Login failed
    $response = array('success' => false);
}

header('Content-Type: application/json');
echo json_encode($response);
?>