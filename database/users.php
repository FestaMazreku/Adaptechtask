 <?php
  $con = mysqli_connect("localhost", "root", "", "adaptechtask");
  mysqli_select_db($con, 'adaptechtask');
  $response = array();
  if ($con) {
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
  ?>