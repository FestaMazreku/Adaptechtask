<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_GET['delete'])) {
	$delete = $_GET['delete'];
	$sql = "DELETE FROM users WHERE id ='$delete'";

	if (mysqli_query($con, $sql)) {
		echo "<script> alert('The user has been deleted!')</script>";
		echo "<script> window.open ('../../tableusers.php','_self');</script>";
	} else {
		echo "Error deleting post: " . mysqli_error($con);
	}
	mysqli_close($con);
}

?>