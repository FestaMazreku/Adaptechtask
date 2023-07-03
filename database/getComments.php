<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();

if ($con) {
    $sql = "SELECT * FROM comments";
    $result = mysqli_query($con, $sql);
    if ($result) {
        $comments = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $comment = array(
                'email' => $row['email'],
                'comment' => $row['comment']
            );

            $comments[] = $comment;
        }

        $response['success'] = true;
        $response['comments'] = $comments;
    } else {
        $response['success'] = false;
        $response['message'] = "Failed to fetch comments.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Failed to connect to the database.";
}

echo json_encode($response);
$con->close();
?>