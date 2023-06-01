<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_POST['name']) && isset($_POST['username']) && isset($_POST['age']) && isset($_POST['email'])) {
    $id = mysqli_real_escape_string($con, $_POST['id']);
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $age = mysqli_real_escape_string($con, $_POST['age']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $phone = mysqli_real_escape_string($con, $_POST['phone']);
    $city = mysqli_real_escape_string($con, $_POST['city']);

    if (!empty($name) && !empty($username) && !empty($age) && !empty($email)) {
        $sql = $con->prepare("INSERT INTO users (id, name, username, age, email, phone, city)  VALUES ('$id','$name','$username','$age','$email','$phone','$city')");
        $sql->execute();

        $response = array();
        if ($sql->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = "New user has been added successfully!";
            echo json_encode($response);
        } else {
            $response['success'] = false;
            $response['message'] = "New user is not added!";
            echo json_encode($response);
        }
        $sql->close();
    } else {
        $response['success'] = false;
        $response['message'] = "Required fields are missing.";
        echo json_encode($response);
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request.";
    echo json_encode($response);
}
$con->close();
?>