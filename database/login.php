<?php
session_start();
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

$email = $_POST['email'];
$password = $_POST['password'];

$login = true;
$error_code = "";
$error_message = "";

if (empty($email) || empty($password)) {
    $login = false;
    echo "error:empty";
    $error_message = "User can't log in! Please enter email and password!";

} else {
    $query = "SELECT * FROM users WHERE email = '$email'";
    $queryRes = mysqli_query($con, $query);
    $count = mysqli_num_rows($queryRes);

    if ($count == 0) {
        $login = false;
        echo "error:nonexistent";
        $error_message = "This user doesn't exist!";

    } else {
        $row = mysqli_fetch_assoc($queryRes);
        $passwordDB = $row['password'];

        if ($passwordDB != $password) {
            $login = false;
            echo "error:incorrect";
            $error_message = "The password is incorrect!";
        }
    }

    if ($login) {
        $_SESSION['email'] = $email;
        $_SESSION['password'] = $row['password'];
        $_SESSION['userid'] = $row['id'];

        if ($row['isadmin'] == 1) {
            $_SESSION['isadmin'] = 1;
        } else {
            $_SESSION['isadmin'] = 0;
        }
        echo "success";
    } else {
        echo $error_code . $error_message;
    }
}
?>