<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");
error_reporting();

if (isset($_POST['update'])) {
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
            $response['success'] = true;
            $response['message'] = "The user has been updated!";
        } else {
            $response['success'] = false;
            $response['message'] = "Error: User update failed.";
        }
    } else {
        $response['success'] = false;
        $response['message'] = "Error: One or more fields are empty.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Error: Invalid request.";
}

echo json_encode($response);
?>