<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();

// Retrieve form data
$id = $_GET['id'];
$name = $_GET['name'];
$username = $_GET['username'];
$age = $_GET['age'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$city = $_GET['city'];

// Update the user in the database
$sql = "UPDATE users SET name='$name', username='$username', age='$age', email='$email', phone='$phone', city='$city' WHERE id='$id'";

if (mysqli_query($con, $sql)) {
    $response = array("success" => true);
} else {
    $response = array("success" => false);
}

echo json_encode($response);

mysqli_close($con);
?>