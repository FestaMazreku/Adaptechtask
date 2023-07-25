<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");
error_reporting(E_ALL);
require_once('IsLoggedIn.php');

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['usermessage'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $usermessage = mysqli_real_escape_string($con, $_POST['usermessage']);

    if (!empty($name) && !empty($email) && !empty($usermessage)) {
        $sql = $con->prepare("INSERT INTO contactus (name, email, usermessage) VALUES ('$name','$email','$usermessage')");
        $sql->execute();

        $response = array();
        if ($sql->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = "The message has been sent successfully!";
            echo json_encode($response);
        } else {
            $response['success'] = false;
            $response['message'] = "The message can not be sent!";
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