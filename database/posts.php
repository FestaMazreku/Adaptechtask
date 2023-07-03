<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('IsLoggedIn.php');

$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();

if ($con) {
  if (isset($_GET['posts'])) {
    $sql = "SELECT * from posts";
    $result = mysqli_query($con, $sql);
    if ($result) {
      header("Content-Type: JSON");
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $response[$i]['postsid'] = $row['postsid'];
        $response[$i]['userid'] = $row['userid'];
        $response[$i]['title'] = $row['title'];
        $response[$i]['body'] = $row['body'];
        $response[$i]['date'] = $row['date'];

        $i++;
      }
      echo json_encode($response, JSON_PRETTY_PRINT);
    }
  }

  if (isset($_GET['post'])) {
    $id = $_GET['post'];
    $sql = "SELECT * from posts where postsid = " . $id;
    $result = mysqli_query($con, $sql);
    if ($result) {
      header("Content-Type: JSON");
      if ($row = mysqli_fetch_assoc($result)) {
        $response['postsid'] = $row['postsid'];
        $response['userid'] = $row['userid'];
        $response['title'] = $row['title'];
        $response['body'] = $row['body'];
        $response['date'] = $row['date'];
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }

  //Delete post
  if (isset($_POST['deleteid'])) {

    if (!IsLoggedInAsAdmin())
      die("No direct access!");

    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM posts WHERE postsid = '" . $delete . "' ";

    if (mysqli_query($con, $sql)) {
      echo "1";
    } else {
      echo "0";
    }
    exit();
  }

  //Update post
  if (isset($_POST['editpostsid'])) {

    if (!IsLoggedInAsAdmin()) {
      $response['status'] = 0;
      $response['message'] = "You don't have permission to update the post.";
      echo json_encode($response);
      exit();
    }

    $postsid = $_POST['editpostsid'];
    $userid = $_POST['userid'];
    $title = $_POST['title'];
    $body = $_POST['body'];

    $update_query = "UPDATE posts SET ";
    $fields = array();

    if (!empty($userid)) {
      $fields[] = "userid='$userid'";
    }
    if (!empty($title)) {
      $fields[] = "title='$title'";
    }
    if (!empty($body)) {
      $fields[] = "body='$body'";
    }

    if (!empty($fields)) {
      $update_query .= implode(", ", $fields);
      $update_query .= " WHERE postsid ='$postsid'";

      if (mysqli_query($con, $update_query)) {
        $response['status'] = 1;
        $response['message'] = "The post has been updated!";
        echo json_encode($response);
      } else {
        $response['status'] = 0;
        $response['message'] = "Failed to update the post.";
        echo json_encode($response);
      }
    }
  }
}
?>