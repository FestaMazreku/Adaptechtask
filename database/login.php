<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

$email = $_POST['email'];
$password = $_POST['password'];

$login = true;

if (empty($email) && empty($password)) {
    $login = false;
} else {
    if (empty($email)) {
        $errorEmail = "The email field must be filled!";
        $login = false;
    } else {
        $query1 = "SELECT * FROM users WHERE email = '$email';";
        $query1Res = mysqli_query($connect, $query1);
        $count1 = mysqli_num_rows($query1Res);

        if ($count1 == 0) {
            $errorEmail = "This user does not exist!";
            $login = false;
        }
    }

    if (empty($password)) {
        $errorPassword = "The password field must be filled!";
        $login = false;
    } else {
        $query2 = "SELECT password FROM users WHERE email = '$email';";
        $query2Res = mysqli_query($connect, $query2);
        $query2Row = mysqli_fetch_array($query2Res);
        $passwordDB = $query2Row['password'];

        if ($passwordDB != $password) {
            $errorPassword = "The password is not correct!";
            $login = false;
        }
    }

    if ($login == true) {

        $query3 = "SELECT isadmin FROM perdoruesi WHERE email = '$email';";
        $query3Res = mysqli_query($connect, $query3);
        $query3Row = mysqli_fetch_array($query3Res);
        $roli = $query3Row['isadmin'];

        $_SESSION['email'] = $email;
        $_SESSION['isadmin'] = $roli;


        header("Location: contactus.html");
    }
}
?>