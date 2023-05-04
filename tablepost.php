<?php
require "database/connect.php";
//startimi i sesionit
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title> Table Post </title>
    <meta charset="UTF-8" />
    <meta name="keywords" content="adaptech">
    <meta name="description" content="adaptech">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='shortcut icon' type='image/x-icon' href='images/adaptech_logo.png' />
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- jQuery -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"> </script>
    <!-- css -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <!-- javascript -->
    <script src="javascript/api.js"></script>
</head>

<header>
    <!-- Navigation bar -->
    <div class="topnav" id="myTopnav">
        <a href="#" style="color: black; font-size: 17px; font-weight: bold;
        padding-right: 15px"> Home </a>
        <a href="#" style="color: black; font-size: 17px; font-weight: bold;
                padding-right: 15px"> About Us </a>
        <a href="#" style="color: black; font-size: 17px; font-weight: bold;
                padding-right: 15px"> Our Projects </a>
        <a href="contactus.html" style="color: black; font-size:17px;
                font-weight: bold; padding-right: 15px"> Contact Us </a>
        <a href="post.html" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Posts </a>
        <a href="otherposts.html" style="color: black;font-size:17px;
                font-weight: bold; padding-right: 15px"> Other Posts </a>
        <a href="tablepost.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px" class="active"> Table Post </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
    </div>
</header>

<!-- Tabela -->
<table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">ID</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">Name</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">Username</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">Age</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">Email</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">Phone</th>
            <th scope="col" style="font-size: 17px; color: lightgray; font-weight: bold">City</th>
            <th> </th>
            <th> </th>
        </tr>
    </thead>

    <tbody>
        <?php
        $con = mysqli_connect("localhost", "root", "", "adaptechtask");
        mysqli_select_db($con, "adaptechtask");

        $query = "select * from users order by 1 ASC";

        $run = mysqli_query($con, $query);

        while ($row = mysqli_fetch_array($run)) {
            $id = $row['id'];
            $name = $row['name'];
            $username = $row['username'];
            $age = $row['age'];
            $email = $row['email'];
            $phone = $row['phone'];
            $city = $row['city'];
            ?>
            <tr>
                <th scope="row">
                    <?php echo $id ?>
                </th>
                <th scope="row">
                    <?php echo $name ?>
                </th>
                <td>
                    <?php echo $username ?>
                </td>
                <td>
                    <?php echo $age ?>

                </td>
                <td>
                    <?php echo $email ?>
                </td>
                <td>
                    <?php echo $phone ?>
                </td>
                <td>
                    <?php echo $city ?>
                </td>
                <td><button class="btn7"><a href="editPost.php?edit=<?php echo $id; ?>">Update</a></button></td>
                <td><button class="btn7"><a href="deletePost.php?delete=<?php echo $id; ?>">Delete</a></button></td>
            </tr>
        <?php } ?>
    </tbody>
</table>

<!-- Footer -->
<div class="footer-clean">
    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="post.html">Posts</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="otherposts.html">Other posts</a></li>
                        <li><a href="contactus.html">Contact us</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li><a href="#">Job openings</a></li>
                        <li><a href="#">Employee success</a></li>
                        <li><a href="#">Benefits</a></li>
                    </ul>
                </div>
                <p class="copyright"> Adaptech LLC © 2023 </p>
            </div>
        </div>
    </footer>
</div>
</html>