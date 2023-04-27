<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_GET['delete'])) {
	$delete_id = $_GET['delete'];
	$delete_query = "DELETE from users where id='$delete_id'";

	if (mysqli_query($con, $delete_query)) {
		echo "<script> alert('The post has been deleted!')</script>";
		echo "<script> window.open ('../../tablepost.php','_self');</script>";
	} else {
		echo "<script> alert(('The post is not deleted'))</script>";
		exit();
	}
}
?>