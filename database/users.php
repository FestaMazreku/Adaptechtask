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

        $i++;
      }
      echo json_encode($response, JSON_PRETTY_PRINT);
    }
  }

  if (isset($_GET['user'])) {
    $id = $_GET['user'];
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
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
  }

  //delete user
  if (isset($_POST['deleteid'])) {
    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM users WHERE id = '" . $delete . "' ";

    if (mysqli_query($con, $sql))
      echo "1";
    else
      echo "0";
  }
  mysqli_close($con);

  //update
  // if (isset($_POST['updateid'])) {
  //   $id1 = $_POST['id'];
  //   $name1 = $_POST['name'];
  //   $username1 = $_POST['username'];
  //   $age1 = $_POST['age'];
  //   $email1 = $_POST['email'];
  //   $phone1 = $_POST['phone'];
  //   $city1 = $_POST['city'];

  //   if ($name1 != '' or $username1 != '' or $age1 != '') {

  //     $update_query = "UPDATE users SET name='$name1', username='$username1', age='$age1', email='$email1', phone='$phone1', city='$city1'
  //       WHERE
  //       id='$id1'";

  //     if (mysqli_query($con, $update_query)) {
  //       echo "<script>alert('The user has been updated!')</script>";
  //       echo "<script> window.open ('users.html','_self');</script>";
  //     }
  //   } else {
  //     echo "<script>alert('Ndonjera prej fushave eshte e zbrazet')</script>";
  //     exit();
  //   }
  // }
}
?>