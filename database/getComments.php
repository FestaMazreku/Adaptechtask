<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
    $sql = "SELECT * FROM comments";
    $result = mysqli_query($con, $sql);
    if ($result) {
        $comments = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $comment = array(
                'user_name' => $row['user_name'],
                'title' => $row['title'],
                'comment' => $row['comment'],
                'date' => $row['date']
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