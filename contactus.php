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
    <title> Contact Us </title>
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
                font-weight: bold; padding-right: 15px" class="active"> Contact
            Us </a>
        <a href="post.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Posts </a>
        <a href="otherposts.php" style="color: black;font-size:17px;
                font-weight: bold; padding-right: 15px"> Other Posts </a>
        <a href="tableusers.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Users </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
    </div>
</header>

<body>
    <!-- Contact Us -->
    <center>
        <br>
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="contact">
                <h3 style="font-weight: bold"> Contact Us </h3>
                <br>
                <p class="p4">
                    Address: PN Emin Abazi, Prizren 20000
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi
                bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6
                10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <br> Email: info@adaptech.me
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95
                        1.555L8 8.414.05 3.555zM0
                        4.697v7.104l5.803-3.558L0 4.697zM6.761
                        8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0
                        1.808-1.144l-6.57-4.027L8
                        9.586l-1.239-.757zm3.436-.586L16
                        11.801V4.697l-5.803 3.546z" />
                    </svg> <br>
                    Telephone: +383 49 249 843
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-telephone-fill" viewBox="0 0 16
                                    16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745
                                        1.745 0 0 1 2.61.163L6.29
                                        2.98c.329.423.445.974.315 1.494l-.547
                                        2.19a.678.678 0 0 0 .178.643l2.457
                                        2.457a.678.678 0 0 0
                                        .644.178l2.189-.547a1.745 1.745 0 0 1
                                        1.494.315l2.306 1.794c.829.645.905
                                        1.87.163
                                        2.611l-1.034 1.034c-.74.74-1.846
                                        1.065-2.877.702a18.634 18.634 0 0
                                        1-7.01-4.42 18.634 18.634 0 0
                                        1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                </p>
            </div>
        </div>

        <!-- Message -->
        <div class="mt-5 mb-2 d-flex justify-content-center
                            row">
            <form method="post">
                <div class="mb-8">
                    <label for="exampleFormControlInput1" class="form-label"> Title
                    </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Write a title."
                        name="title">
                </div>
                <br>
                <div class="mb-8">
                    <label for="exampleFormControlTextarea1" class="form-label"> Message
                    </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write a message."
                        rows="3" name="message"></textarea>
                    <br>
                    <input type="submit" class="btn5" name="send" value="Send">
                    </button>
                </div>
            </form>
        </div>

        <!-- Map-->
        <section id="contact" class="py-5">
            <h1 class="location"> OUR LOCATION
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-geo-alt-fill" viewBox="0 0
                                    16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2
                                        6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
                                        0-6 3 3 0 0 1 0 6z" />
                </svg>
            </h1>
            <br>
            <div class="row">
                <div class="mapouter">
                    <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no"
                            marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=prizren
                                                &amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                            href="https://www.embedmymap.com/">Embed
                            My Map</a></div>
                    <style>
                        .mapouter {
                            position: relative;
                            text-align: right;
                            width: 100%;
                            height: 400px;
                        }

                        .gmap_canvas {
                            overflow: hidden;
                            background: none !important;
                            width: 100%;
                            height: 400px;
                        }

                        .gmap_iframe {
                            height: 400px !important;
                        }
                    </style>
                </div>
            </div>
        </section>
    </center>

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
                            <li><a href="otherposts.html">Other
                                    posts</a></li>
                            <li><a href="contactus.html">Contact
                                    us</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job
                                    openings</a></li>
                            <li><a href="#">Employee
                                    success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <p class="copyright"> Adaptech
                        LLC ©
                        2023 </p>
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