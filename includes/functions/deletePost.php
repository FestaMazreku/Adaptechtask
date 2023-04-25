<?php

$con=mysqli_connect("localhost","root","","adaptechtask");
mysqli_select_db($con,"adaptechtask");

if(isset($_GET['delete'])){
	
	$delete = $_GET['delete'];
	
	$delete_query = "DELETE from posts where postsid='$delete'";
	
	if(mysqli_query($con, $delete_query)){
	
	echo "<script>alert('The post has been deleted!')</script>";
	echo "<script> window.open('../../posts.html','_self')</script>";
	 }
  }
?>