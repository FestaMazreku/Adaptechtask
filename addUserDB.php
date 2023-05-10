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

        // Prepare and execute the SQL statement
        $stmt = $con->prepare("INSERT INTO users (id, name, username, age, email, phone, city) VALUES ('$id','$name','$username','$age','$email','$phone','$city')");
        $stmt->bind_param("issssss", $id, $name, $username, $age, $email, $phone, $city);
        $stmt->execute();

        // Check if the data was inserted successfully
        if ($stmt->affected_rows > 0) {
            echo "<script>alert('The user has been updated!')</script>";
            echo "<script> window.open ('../../tableusers.php','_self');</script>";
        } else {
            echo "Error inserting data.";
        }

        // Close the statement and database connection
        $stmt->close();
        $con->close();
    }
}
?>