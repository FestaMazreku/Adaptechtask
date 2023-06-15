<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

require '.../database/loggedin.php';

if (isset($_POST['email']) && isset($_POST['comment'])) {
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $comment = mysqli_real_escape_string($con, $_POST['comment']);

    if (!empty($email) && !empty($comment)) {
        $sql = $con->prepare("INSERT INTO comment (email, comment)  VALUES ('$email','$comment')");
        $sql->execute();

        $response = array();
        if ($sql->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = "The comment has been added successfully!";
            echo json_encode($response);
        } else {
            $response['success'] = false;
            $response['message'] = "The comment is not added!";
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