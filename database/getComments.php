<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
    $sql = "SELECT comments.* FROM posts JOIN comments ON posts.postsid = comments.postid WHERE posts.postsid = 1";
    $result = mysqli_query($con, $sql);

    if (isset($_GET['comments'])) {
        if (isset($_GET['postId'])) {
            $postId = $_GET['postId'];
            $sql = "SELECT * FROM comments WHERE postId = " . $postId;
        } else {
            $sql = "SELECT * FROM comments";
        }
    }

    if ($result) {
        $comments = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $comment = array(
                'userid' => $row['userid'],
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