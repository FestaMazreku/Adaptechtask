<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
  if (isset($_GET['messages'])) {
    $sql = "SELECT * from contactus";
    $result = mysqli_query($con, $sql);
    if ($result) {
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $response[$i]['messageid'] = $row['messageid'];
        $response[$i]['name'] = $row['name'];
        $response[$i]['email'] = $row['email'];
        $response[$i]['usermessage'] = $row['usermessage'];

        $i++;
      }
      echo json_encode($response, JSON_PRETTY_PRINT);
      exit();
    }
  }

  if (isset($_GET['message'])) {
    $id = $_GET['message'];
    $sql = "SELECT * from contactus where messageid = " . $id;
    $result = mysqli_query($con, $sql);
    if ($result) {
      if ($row = mysqli_fetch_assoc($result)) {
        $response['messageid'] = $row['messageid'];
        $response['name'] = $row['name'];
        $response['email'] = $row['email'];
        $response['usermessage'] = $row['usermessage'];
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit();
  }

  //Delete Message
  if (isset($_POST['deleteid'])) {

    if (!IsLoggedInAsAdmin())
      die("No direct access!");
    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM contactus WHERE messageid = '" . $delete . "' ";

    if (mysqli_query($con, $sql)) {
      echo "1";
    } else {
      echo "0";
    }
    exit();
  }
}
?>