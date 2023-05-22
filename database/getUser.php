<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();

$id = $_GET['id'];
$name = $_GET['name'];
$username = $_GET['username'];
$age = $_GET['age'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$city = $_GET['city'];

$sql = "SELECT * FROM users WHERE name='$name' AND username='$username' AND age='$age' AND email='$email' AND phone='$phone' AND city='$city' AND id='$id'";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) == 1) {
    $user = mysqli_fetch_assoc($result);
    $response = array("success" => true, "user" => $user);
} else {
    $response = array("success" => false);
}

echo json_encode($response);

mysqli_close($con);
?>