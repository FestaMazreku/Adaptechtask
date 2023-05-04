<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
if ($con) {
    if (isset($_GET['posts'])) {
        $sql = "select * from posts";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['postsid'] = $row['postsid'];
                $response[$i]['userid'] = $row['userid'];
                $response[$i]['title'] = $row['title'];
                $response[$i]['body'] = $row['body'];

                $i++;
            }
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
    }
    
    if (isset($_GET['post'])) {
        $id = $_GET['post'];
        $sql = "select * from posts where postsid = " . $id;
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            if ($row = mysqli_fetch_assoc($result)) {
                $response['postsid'] = $row['postsid'];
                $response['userid'] = $row['userid'];
                $response['title'] = $row['title'];
                $response['body'] = $row['body'];
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
?>