<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

$name = $_POST['name'];
$email = $_POST['email'];
$password_1 = $_POST['password_1'];
$password_2 = $_POST['password_2'];

if (empty($name) || empty($email) || empty($password_1) || empty($password_2)) {
    echo "All fields must be filled!";

} else {
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        echo "error:name";

    } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "error:email";

        } else {
            if ($password_1 !== $password_2) {
                echo "error:password";

            } else {
                $uppercase = preg_match("@[A-Z]@", $password_1);
                $lowercase = preg_match("@[a-z]@", $password_1);
                $number = preg_match("@[0-9]@", $password_1);

                if (!$uppercase || !$lowercase || !$number || strlen($password_1) < 6) {
                    echo "error:password2";

                } else {
                    $queryEmail = mysqli_query($con, "SELECT email FROM users WHERE email='$email'");
                    $countEmail = mysqli_num_rows($queryEmail);

                    if ($countEmail != 0) {
                        $errorEmail = "Wrong email format.";
                        echo "error:email";

                    } else {
                        $querysql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password_1')";
                        if (mysqli_query($con, $querysql)) {
                            echo "success";
                        } else {
                            echo "error";
                        }
                    }
                }
            }
        }
    }
}
?>