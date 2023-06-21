<div class="topnav" id="myTopnav">
    <a href="home.html">Home</a>
    <a href="aboutus.html">About Us</a>

    <?php
    if (!isset($_SESSION['email'])) {
        echo '<a href="signup.html"> Sign Up </a>';
        echo '<a href="login.html"> Log In </a>';
    } else {
        if ($_SESSION['isadmin'] == 1) {
            echo '<a href="users.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Table Users </a>';
            echo '<a href="posts.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Table Posts </a>';
        } else if ($_SESSION['isadmin'] == 0) {
            echo '<a href="contactus.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Contact Us </a>';
            echo '<a href="post.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Posts </a>';
        }

        echo '<a href="database/logout.php" style="color: #f0f0f0;"> Log Out </a>';
    }
    ?>
</div>

<?php //startimi i sesionit
session_start();
if (isset($_POST["loggedin"]))  {

	//nese perdoruesi nuk eshte kycur, atehere paraqitja kete pamje te kesaj web faqeje
	if (!isset($_SESSION['email'])) {
		echo 0;
	} else {
		//nese perdoruesi eshte i kycur, atehere ridrejtoje ne faqen baze pas kycjes
		echo 1;
	}
}
?>