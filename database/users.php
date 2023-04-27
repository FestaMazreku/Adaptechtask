<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
if ($con) {
  if (isset($_GET['users'])) {
    $sql = "select * from users";
    $result = mysqli_query($con, $sql);
    if ($result) {
      header("Content-Type: JSON");
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $response[$i]['id'] = $row['id'];
        $response[$i]['name'] = $row['name'];
        $response[$i]['username'] = $row['username'];
        $response[$i]['age'] = $row['age'];
        $response[$i]['email'] = $row['email'];
        $response[$i]['phone'] = $row['phone'];
        $response[$i]['city'] = $row['city'];
        $response[$i]['comment'] = $row['comment'];

        $i++;
      }
      echo json_encode($response, JSON_PRETTY_PRINT);
    }
  }

  if (isset($_GET['userid'])) {
    $id = $_GET['userid'];
    $sql = "select * from users where id = " . $id;
    $result = mysqli_query($con, $sql);
    if ($result) {
      header("Content-Type: JSON");
      if ($row = mysqli_fetch_assoc($result)) {
        $response['id'] = $row['id'];
        $response['name'] = $row['name'];
        $response['username'] = $row['username'];
        $response['age'] = $row['age'];
        $response['email'] = $row['email'];
        $response['phone'] = $row['phone'];
        $response['city'] = $row['city']; 
        $response['comment'] = $row['comment'];
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }
}
?>