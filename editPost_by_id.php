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
    $comment1 = $_POST['comment'];

    if ($name1 != '' or $username1 != '' or $age1 != '') {

        $update_query = "UPDATE users SET name='$name1', username='$username1', age='$age1', email='$email1', phone='$phone1', city='$city1', comment='$comment1'
        WHERE
        id='$id1'";

        if (mysqli_query($con, $update_query)) {

            echo "<script>alert('The post has been updated!')</script>";
            echo "<script> window.open ('../../tablepost.php','_self');</script>";
        }
    } else {
        echo "<script>alert('Ndonjera prej fushave eshte e zbrazet')</script>";
        exit();
    }
}
?>