<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

if (isset($_POST['roli']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
    $roli = mysqli_real_escape_string($con, $_POST['roli']);
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    if (!empty($roli) && !empty($name) && !empty($email)) {
        $sql = $con->prepare("INSERT INTO perdoruesi (roli, name, email, password)  VALUES ('$roli','$name','$email','$password')");
        $sql->execute();

        $response = array();
        if ($sql->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = "The user has been signed in!";
            echo json_encode($response);
        } else {
            $response['success'] = false;
            $response['message'] = "The user is not signed in!";
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