<!DOCTYPE html>
<html lang="en">

<head>
    <title> Other Posts </title>
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
    <script src="javascript/script.js"></script>
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
                font-weight: bold; padding-right: 15px" class="active"> Other
            Posts </a>
        <a href="tableusers.php" style="color: black; font-size: 17px;
                font-weight: bold; padding-right: 15px"> Users </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
    </div>
</header>

<body>
    <div class="mt-5 mb-2 d-flex justify-content-center row">
        <div class="card p-3 col-lg-6 col-md-6 col-sm-12" style="border: 3px
                solid rgb(250, 250, 252); border-radius: 10px; box-shadow: 5px
                5px 7px 4px lightgray;">
            <center>
                <h4 style="font-weight: bold;"> Posts </h4>
                <br>
                <div class="float-start col-lg-1 col-sm-1">
                    <button class="btn3 btn-secondary"></button>
                </div>
                <div class="float-end pt-2 col-lg-11 col-sm-11">
                    <p style="font-weight: bold; color: darkblue" id="user1"></p>
                    <p id="nick1"></p>
                </div>
                <div class="ml-3 mt-3">
                    <p id="email1"></p>
                    <p id="post1"></p>
                    <p id="title1"></p>
                    <p id="comment1"></p>
                </div>
                <div class="ml-3 mt-3">
                    <input type="text" class="post p-3" id="new_title" name="new_title" value=""
                        placeholder="Comment on this post">
                    <button id="add_btn2" class="btn8" onclick="New()">
                        Comment </button>
                </div>
            </center>
        </div>
    </div>

    <div class="mt-5 mb-2 d-flex justify-content-center row">
        <div class="card p-3 col-lg-6 col-md-6 col-sm-12" style="border: 3px
                solid rgb(250, 250, 252); border-radius: 10px; box-shadow: 5px
                5px 7px 4px lightgray;">
            <center>
                <div class="float-start col-lg-1 col-sm-1">
                    <button class="btn4 btn-secondary"></button>
                </div>
                <div class="float-end pt-2 col-lg-11 col-sm-11">
                    <p style="font-weight: bold; color: darkblue" id="user2"></p>
                    <p id="nick2"></p>
                </div>
                <div class="ml-3 mt-3">
                    <p id="email2"></p>
                    <p id="post2"></p>
                    <p id="title2"></p>
                    <p id="comment2"></p>
                </div>
                <div class="ml-3 mt-3">
                    <input type="text" class="post p-3" id="new_title" name="new_title" value=""
                        placeholder="Comment on this post">
                    <button id="add_btn2" class="btn8" onclick="New()">
                        Comment </button>
                </div>
            </center>
        </div>
    </div>
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