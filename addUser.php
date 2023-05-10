<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title> Add </title>
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
        <a href="contactus.php" style="color: black; font-size:17px;
                font-weight: bold; padding-right: 15px"> Contact Us </a>
        <a href="post.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Posts </a>
        <a href="otherposts.php" style="color: black;font-size:17px;
                font-weight: bold; padding-right: 15px"> Other Posts </a>
        <a href="tableusers.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px" class="active"> Users </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
    </div>
</header>
<br>

<body>
    <center>
        <form method="post" action="addUserDB.php" enctype="multipart/form-data">

            <table width="600" bgcolor="lightgray" align="center" border="6">
                <tr>
                    <td align="center" bgcolor="white" colspan="6">
                        <h1>Add a new user here:</h1>
                    </td>
                </tr>
                <tr>
                    <td align="middle">Id:</td>
                    <td>
                        <input type="text" name="id" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">Name & Surname:</td>
                    <td>
                        <input type="text" name="name" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">Username:</td>
                    <td>
                        <input type="text" name="username" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">Age:</td>
                    <td>
                        <input type="text" name="age" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">Email:</td>
                    <td>
                        <input type="text" name="email" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">Phone:</td>
                    <td>
                        <input type="tel" name="phone" size="30">
                    </td>
                </tr>
                <tr>
                    <td align="middle">City:</td>
                    <td>
                        <input type="text" name="city" size="30">
                    </td>
                </tr>
                <div class="input-group">
                    <tr>
                        <td align="center" colspan="8">
                            <br>
                            <input type="submit"
                                style="padding: 6px; background: black; opacity: 0.7; color: white; font-weight: bold; border: 2px; border-radius: 2px; font-size: 20px; width: 40%"
                                name="submit" value="Add now">
                        </td>
                    </tr>
                </div>
            </table>
        </form>
    </center>

    <br>
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
</body>

</html>