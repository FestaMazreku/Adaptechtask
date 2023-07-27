<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if (isset($_GET['postId'])) {
    $postId = $_GET['postId'];
    $sql = "SELECT comments.*, users.name AS name FROM comments JOIN users ON users.id = comments.userid WHERE comments.postid =" . $postId;
    $result = mysqli_query($con, $sql);

    if ($result) {
        $comments = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $comment = array(
                'userid' => $row['userid'],
                'name' => $row['name'],
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