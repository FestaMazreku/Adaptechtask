<?php

$con=mysqli_connect("localhost","root","","adaptechtask");
mysqli_select_db($con,"adaptechtask");
error_reporting();
if(isset($_POST['update'])){
    $postsid1=$_POST['postsid'];
	$id1 = $_POST['id'];
	$title1 = $_POST['title'];
	$body1 = $_POST['body'];

	if($id1!='' or $title1!='' or $body1!=''){

		$update_query="UPDATE posts SET id='$id1', title='$title1', body='$body1'
        WHERE
        postsid='$postsid1'";
		
		if(mysqli_query($con, $update_query)){
		
			echo "<script>alert('The post has been updated!')</script>";
//			header("location: .../post.html");
            echo "<script> window.open ('../../post.html','_self');</script>";
		}
	}

   else{	
		echo "<script>alert('Ndonjera prej fushave eshte e zbrazet!')</script>";
		exit();
	   }
	}
?>