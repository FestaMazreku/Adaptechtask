<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");
require_once('IsLoggedIn.php');

if (isset($_POST['userid']) && isset($_POST['title']) && isset($_POST['body']) && isset($_POST['date'])) {
    if (!IsLoggedInAsAdmin()) {
        $response['success'] = false;
        $response['message'] = "No direct access!";
        echo json_encode($response);
        exit();
    }

    $userid = $_POST['userid'];
    $title = $_POST['title'];
    $body = $_POST['body'];
    $date = $_POST['date'];

    if (!empty($userid) && !empty($title) && !empty($body) && !empty($date)) {
        $currentDate = date("Y-m-d H:i:s");

        $sql = $con->prepare("INSERT INTO posts (userid, title, body, date) VALUES (?, ?, ?, ?)");
        $sql->bind_param("ssss", $userid, $title, $body, $currentDate);

        $sql->execute();

        $response = array();
        if ($sql->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = "New post has been added successfully!";
            echo json_encode($response);
        } else {
            $response['success'] = false;
            $response['message'] = "New post is not added!";
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