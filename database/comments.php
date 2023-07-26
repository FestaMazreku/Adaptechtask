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
        $response[$i]['commentid'] = $row['commentid'];
        $response[$i]['postid'] = $row['postid'];
        $response[$i]['userid'] = $row['userid'];
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
    $sql = "SELECT * FROM comments where commentid = " . $id;
    $result = mysqli_query($con, $sql);
    if ($result) {
      header("Content-Type: JSON");
      if ($row = mysqli_fetch_assoc($result)) {
        $response['commentid'] = $row['commentid'];
        $response['postid'] = $row['postid'];
        $response['userid'] = $row['userid'];
        $response['title'] = $row['title'];
        $response['comment'] = $row['comment'];
        $response['date'] = $row['date'];
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }

  //Add a comment
  if (isset($_POST['title']) && isset($_POST['comment']) && isset($_POST['postId']) && isset($_POST['userid'])) {
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $comment = mysqli_real_escape_string($con, $_POST['comment']);
    $postId = mysqli_real_escape_string($con, $_POST['postId']);
    $userid = mysqli_real_escape_string($con, $_POST['userid']);

    if (!empty($title) && !empty($comment) && !empty($postId)) {
      $currentDate = date("Y-m-d H:i:s");

      $sql = $con->prepare("INSERT INTO comments (title, comment, postId, userid, date) VALUES (?, ?, ?, ?, ?)");
      $sql->bind_param("sssss", $title, $comment, $postId, $userid, $currentDate);
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