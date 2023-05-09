<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_POST['submit'])) {

    $name = mysqli_real_escape_string($con, $_POST['name']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $age = mysqli_real_escape_string($con, $_POST['age']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $city = mysqli_real_escape_string($con, $_POST['city']);

    if ($name = '' or $username != '' or $age != '' or $email != '') {

        $sql = "INSERT into users VALUES ('$name','$username','$age','$email','$phone','$city')";

        $stmt = $con->prepare($sql);
        // $stmt->bind_param("ss", $name, $username, $age, $email, $phone, $city);
        
        if (mysqli_query($con, $sql)) {
            echo "<script>alert('The user has been added!')</script>";
            echo "<script> window.open ('../../tableusers.php','_self');</script>";
        } else {
            echo "Error: " . $stmt->error;
        }
    } else {
        echo "<script>alert('Some of the fields are empty!')</script>";
        exit();
    }
}
?>