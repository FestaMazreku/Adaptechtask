<?php
session_start();

// Check if the user is logged in
if (isset($_SESSION['email'])) {
	// User is logged in
	$loggedIn = true;
	// Redirect to the appropriate page for logged-in users
	header("Location: contactus.html");
	exit(); // Make sure to exit after the redirect
}
?>