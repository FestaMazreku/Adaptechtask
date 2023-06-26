<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
    if (isset($_GET['comments'])) {
        $sql = "SELECT * FROM comments";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");

            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['commentsid'] = $row['commentsid'];
                $response[$i]['postid'] = $row['postid'];
                $response[$i]['userid'] = $row['userid'];
                $response[$i]['email'] = $row['email'];
                $response[$i]['comment'] = $row['comment'];

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
                $response['userid'] = $row['userid'];
                $response['email'] = $row['email'];
                $response['comment'] = $row['comment'];
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

    //Add comment
    if (isset($_POST['email']) && isset($_POST['comment'])) {

        if (IsLoggedInAsAdmin())
            die("No direct access!");

        $email = mysqli_real_escape_string($con, $_POST['email']);
        $comment = mysqli_real_escape_string($con, $_POST['comment']);

        if (!empty($email) && !empty($comment)) {
            $sql = $con->prepare("INSERT INTO comments (email, comment)  VALUES ('$email','$comment')");
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
}

$con->close();
?>