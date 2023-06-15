<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

require '.../database/loggedin.php';

$response = array();
if ($con) {
    if (isset($_GET['comments'])) {
        $sql = "SELECT * from comments";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['commentsid'] = $row['commentsid'];
                $response[$i]['postid'] = $row['postid'];
                $response[$i]['userid'] = $row['userid'];
                $response[$i]['body'] = $row['body'];

                $i++;
            }
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
     }

    if (isset($_GET['comment'])) {
        $id = $_GET['comment'];
        $sql = "SELECT * from comments where commentsid = " . $id;
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            if ($row = mysqli_fetch_assoc($result)) {
                $response['commentsid'] = $row['commentsid'];
                $response['postid'] = $row['postid'];
                $response['userid'] = $row['userid'];
                $response['body'] = $row['body'];
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
?>