<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
if ($con) {
    if (isset($_GET['comments'])) {
        $sql = "select * from comments";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['commentsid'] = $row['commentsid'];
                $response[$i]['postid'] = $row['postid'];
                $response[$i]['name'] = $row['name'];
                $response[$i]['email'] = $row['email'];
                $response[$i]['body'] = $row['body'];

                $i++;
            }
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
    }

    if (isset($_GET['comment'])) {
        $id = $_GET['comment'];
        $sql = "select * from comments where commentsid = " . $id;
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            if ($row = mysqli_fetch_assoc($result)) {
                $response['commentsid'] = $row['commentsid'];
                $response['postid'] = $row['postid'];
                $response['name'] = $row['name'];
                $response['email'] = $row['email'];
                $response['body'] = $row['body'];
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
?>