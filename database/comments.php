<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
    if (isset($_GET['comments'])) {
        $sql = "SELECT * FROM comments";
        if (isset($_GET['postId'])) {
            $postId = $_GET['postId'];
            $sql .= " WHERE postid = " . $postId;
        }
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");

            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['commentsid'] = $row['commentsid'];
                $response[$i]['postid'] = $row['postid'];
                $response[$i]['email'] = $row['email'];
                $response[$i]['title'] = $row['title'];
                $response[$i]['comment'] = $row['comment'];
                $response[$i]['date'] = $row['date'];

                $i++;
            }
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
    }

    if (isset($_GET['comment'])) {
        $id = $_GET['comment'];
        $sql = "SELECT * FROM comments where commentsid = " . $id;
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            if ($row = mysqli_fetch_assoc($result)) {
                $response['commentsid'] = $row['commentsid'];
                $response['postid'] = $row['postid'];
                $response['email'] = $row['email'];
                $response['title'] = $row['title'];
                $response['comment'] = $row['comment'];
                $response['date'] = $row['date'];
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

    //Add comment
    if (isset($_POST['title']) && isset($_POST['comment']) && isset($_POST['postId']) && isset($_POST['email'])) {
        $title = mysqli_real_escape_string($con, $_POST['title']);
        $comment = mysqli_real_escape_string($con, $_POST['comment']);
        $postId = mysqli_real_escape_string($con, $_POST['postId']);
        $email = mysqli_real_escape_string($con, $_POST['email']);

        if (!empty($title) && !empty($comment) && !empty($postId)) {
            $sql = $con->prepare("INSERT INTO comments (title, comment, postId, email) VALUES (?, ?, ?, ?)");
            $sql->bind_param("ssss", $title, $comment, $postId, $email);

            $sql->execute();

            if ($sql->affected_rows > 0) {
                $response['success'] = true;
                $response['message'] = "The comment has been added successfully!";
            } else {
                $response['success'] = false;
                $response['message'] = "The comment cannot be added!";
            }

            $sql->close();
        } else {
            $response['success'] = false;
            $response['message'] = "Required fields are missing.";
        }
    } else {
        $response['success'] = false;
        $response['message'] = "Invalid request.";
    }

    echo json_encode($response);
}
$con->close();
?>