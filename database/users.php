<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');
$response = array();
require_once('IsLoggedIn.php');

if ($con) {
  if (isset($_GET['users'])) {
    $sql = "SELECT * from users";
    $result = mysqli_query($con, $sql);
    if ($result) {
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $response[$i]['id'] = $row['id'];
        $response[$i]['name'] = $row['name'];
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
        $response['age'] = $row['age'];
        $response['email'] = $row['email'];
        $response['phone'] = $row['phone'];
        $response['city'] = $row['city'];
      }
    }
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit();
  }

  //Delete user
  if (isset($_POST['deleteid'])) {

    if (!IsLoggedInAsAdmin())
      die("No direct access!");

    $delete = $_POST['deleteid'];
    $sql = "DELETE FROM users WHERE id = '" . $delete . "' ";

    if (mysqli_query($con, $sql)) {
      echo "1";
    } else {
      echo "0";
    }
    exit();
  }

  //Update user
  if (isset($_POST['editid'])) {

    if (!IsLoggedInAsAdmin()) {
      $response['status'] = 0;
      $response['message'] = "You don't have permission to update the user.";
      echo json_encode($response);
      exit();
    }

    $id = $_POST['editid'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];

    $update_query = "UPDATE users SET ";
    $fields = array();

    if (!empty($name)) {
      $fields[] = "name='$name'";
    }
    if (!empty($age)) {
      $fields[] = "age='$age'";
    }
    if (!empty($email)) {
      $fields[] = "email='$email'";
    }
    if (!empty($phone)) {
      $fields[] = "phone='$phone'";
    }
    if (!empty($city)) {
      $fields[] = "city='$city'";
    }

    if (!empty($fields)) {
      $update_query .= implode(", ", $fields);
      $update_query .= " WHERE id='$id'";

      if (mysqli_query($con, $update_query)) {
        $response['status'] = 1;
        $response['message'] = "The user has been updated!";
        echo json_encode($response);
      } else {
        $response['status'] = 0;
        $response['message'] = "Failed to update the user.";
        echo json_encode($response);
      }
    }
  }
}

?>