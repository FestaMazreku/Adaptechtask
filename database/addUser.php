<?php

$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_POST['submit'])) {
    $id = mysqli_real_escape_string($con, $_POST['id']);
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $age = mysqli_real_escape_string($con, $_POST['age']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $city = mysqli_real_escape_string($con, $_POST['city']);

    if ($name != '' || $username != '' || $age != '' || $email != '') {

        $stmt = $con->prepare("INSERT INTO users (id, name, username, age, email, phone, city) VALUES ('$id','$name','$username','$age','$email','$phone','$city')");
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "User is added!";
            echo "<script> window.open ('../../users.html','_self');</script>";
        } else {
            echo "User is not added.";
            echo "<script> window.open ('../../users.html','_self');</script>";
        }
        $stmt->close();
        $con->close();
    }
}
?>