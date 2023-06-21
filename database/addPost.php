<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_POST['userid']) && isset($_POST['title'])) {
    $postsid = mysqli_real_escape_string($con, $_POST['postsid']);
    $userid = mysqli_real_escape_string($con, $_POST['userid']);
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $body = mysqli_real_escape_string($con, $_POST['body']);

    if (!empty($userid) && !empty($title) && !empty($body)) {
        $sql = $con->prepare("INSERT INTO posts (postsid, userid, title, body)  VALUES ('$postsid','$userid','$title','$body')");
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