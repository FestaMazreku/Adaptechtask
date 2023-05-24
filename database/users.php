<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();

if ($con) {
  if (isset($_GET['users'])) {
    $sql = "SELECT * from users";
    $result = mysqli_query($con, $sql);
    if ($result) {
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
      exit();
    }
  }

  if (isset($_GET['user'])) {
    $id = $_GET['user'];
    $sql = "SELECT * from users where id = " . $id;
    $result = mysqli_query($con, $sql);
    if ($result) {
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
    exit();
  }

  // Delete user
  if (isset($_POST['deleteid'])) {
    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM users WHERE id = '" . $delete . "' ";

    if (mysqli_query($con, $sql)) {
      echo "1";
    } else {
      echo "0";
    }
    exit();
  }

  // Update the user
  if (isset($_POST['updateuserform'])) {
    $id1 = $_POST['id'];
    $name1 = $_POST['name'];
    $username1 = $_POST['username'];
    $age1 = $_POST['age'];
    $email1 = $_POST['email'];
    $phone1 = $_POST['phone'];
    $city1 = $_POST['city'];

    if ($name1 != '' || $username1 != '' || $age1 != '') {
      $update_query = "UPDATE users SET name='$name1', username='$username1', age='$age1', email='$email1', phone='$phone1', city='$city1'
        WHERE id='$id1'";

      if (mysqli_query($con, $update_query)) {
        echo "<script>alert('The user has been updated!')</script>";
        echo "<script> window.open ('../users.html','_self');</script>";
      }
    } else {
      echo "<script>alert('One or more fields are empty')</script>";
    }
  }

  mysqli_close($con);

}
?>