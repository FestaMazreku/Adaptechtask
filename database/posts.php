<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }

  //Delete post
  if (isset($_POST['deleteid'])) {
    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM posts WHERE postsid = '" . $delete . "' ";

    if (mysqli_query($con, $sql)) {
      echo "1";
    } else {
      echo "0";
    }
    exit();
  }

  //Update user
  if (isset($_POST['editpost'])) {
    $postsid = $_POST['postsid'];
    $userid = $_POST['userid'];
    $title = $_POST['title'];
    $body = $_POST['body'];
  
    $update_query = "UPDATE posts SET ";
    $fields = array();

    if (!empty($name)) {
      $fields[] = "title='$title'";
    }
    if (!empty($username)) {
      $fields[] = "body='$body'";
    }

    if (!empty($fields)) {
      $update_query .= implode(", ", $fields);
      $update_query .= " WHERE postsid='$postsid'";

      if (mysqli_query($con, $update_query)) {
        if (mysqli_affected_rows($con) > 0) {
          echo "<script>alert('The post has been updated!')</script>";
          echo "<script>window.open ('../posts.html','_self');</script>";
        } else {
          echo "<script>alert('No changes were made to the post.')</script>";
          echo "<script>window.open ('../posts.html','_self');</script>";
        }
      } else {
        echo "<script>alert('Failed to update the post.')</script>";
      }
    }
  }
}
?>