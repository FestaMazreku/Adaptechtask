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
                $response[$i]['id'] = $row['id'];
                $response[$i]['title'] = $row['title'];
                $response[$i]['body'] = $row['body'];

                $i++;
            }
            echo json_encode($response, JSON_PRETTY_PRINT);
        }
    }

    if (isset($_GET['postsid'])) {
        $id = $_GET['postsid'];
        $sql = "select * from posts where id = " . $id;
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("Content-Type: JSON");
            if ($row = mysqli_fetch_assoc($result))
            $response['postsid'] = $row['postsid'];
            $response['id'] = $row['id'];
            $response['title'] = $row['title'];
            $response['body'] = $row['body'];
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
}
?>