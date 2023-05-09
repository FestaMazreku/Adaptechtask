<?php
session_start();


$message = '';

if (isset($_POST["send"])) {

    $message = '
		<h3 align="center">Programmer Details</h3>
		<table border="1" width="100%" cellpadding="5" cellspacing="5">
			
          
			<tr>
				<td width="30%">Title</td>
				<td width="70%">' . $_POST["title"] . '</td>
			</tr>
              
			<tr>
				<td width="30%">Message</td>
				<td width="70%">' . $_POST["message"] . '</td>
			</tr>
			  
		</table>
	';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title> Posts </title>
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
                font-weight: bold; padding-right: 15px" class="active"> Posts
        </a>
        <a href="otherposts.html" style="color: black;font-size:17px;
                font-weight: bold; padding-right: 15px"> Other Posts </a>
        <a href="users.html" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Users </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
    </div>
</header>

<body>
    <!-- Posts -->
    <center>
        <div class="mt-5 mb-2 d-flex justify-content-center row" style="cursor: pointer" id="show">
            <div class="card p-3 col-lg-5 col-md-5 col-sm-12" style="border: 3px solid rgb(250, 250, 252); border-radius: 10px;
            box-shadow: 5px 5px 7px 4px lightgray; background-color: rgb(247, 247, 247);">
                <img src="images/Logo-redesign-06.png" alt="..." style="width: 20%; height: 20%" ;>
                <h2 style="font-weight: bold"> Posts </h2>
                <div class="row ml-3 mt-3 mr-3">
                    <div id="posts"></div>
                    <div id="user"></div>
                </div>
                <div class="row ml-6 mt-6 mr-8">
                    <br>
                    <div id="comments">
                        <h2 style="font-weight: bold"> Comment </h2>

                        <div class="ml-3 mt-3">
                            <form method="post">
                                <div class="mb-9">
                                    <label for="exampleFormControlInput1" class="form-label">
                                    </label>
                                    <input type="text" class="form-control" id="title" placeholder="Write a title."
                                        name="title">
                                </div>
                                <div class="mb-9">
                                    <label for="exampleFormControlTextarea1" class="form-label">
                                    </label>
                                    <textarea class="form-control" id="message" placeholder="Write a comment." rows="3"
                                        name="message"></textarea>
                                </div>
                                <br>
                                <div class="send">
                                    <input type="submit" class="btn8" name="send" value="Send">
                                </div>
                                <br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

$errors = array();

if (isset($_POST['send'])) {

    $title = mysqli_real_escape_string($con, $_POST['title']);
    $message = mysqli_real_escape_string($con, $_POST['message']);

    if (empty($title)) {
        array_push($errors, "Title is required");
    }


    if (empty($message)) {
        array_push($errors, "Message is required");
    }

    $query = "SELECT * FROM comment WHERE title='$title' OR message='$message' LIMIT 1";

    $result = mysqli_query($con, $query);
    $user = mysqli_fetch_assoc($result);
    // if user exists
    if ($user) {

        if ($user['message'] === $message) {
            array_push($errors, "The comment has been sent successfully!");
        }
    }

    if (count($errors) == 0) {

        $regist = "INSERT INTO comment (title, message)
              VALUES ('$title','$message')";

        $rows = "SELECT * FROM comment WHERE title='$title' AND message='$message'";

        $run = mysqli_query($con, $rows);

        if (mysqli_num_rows($run) < 10) {

            mysqli_query($con, $regist);

            echo "<script>alert('The message has been sent successfully!');</script>";
        }
    }
}
?>
</html>