<?php 
session_start();

?>
<html>
	<head>
		<title>Insert a new post</title>
	</head>
<body>
<form method="post" action="editPost_by_id.php" enctype="multipart/form-data">
	
	<table width="600" bgcolor="red" align="center" border="10">
		 
		 <tr>
			<td align="center" bgcolor="white" colspan="6">
			<h1>Shto nje post te ri ketu</h1></td>
		 </tr>
		 
		 <tr>
			<td align="right">Id:</td>
			<td><input type="text" name="id" size="30"></td>
		 </tr>
		 
		 <tr>
			<td align="right">Title:</td>
			<td><input type="text" name="title" size="50"></td>
		 </tr>
		 
		 <tr>
			<td align="right">Body:</td>
			<td><input type="text" name="body" size="300"></td>
		 </tr>
		 
		 <tr>
			<td align="center" colspan="6"><input type="submit" name="submit" 
			value="Shtoje tani"></td>
		 </tr>
	  </table>
    </form>
  </body>
</html>

<?php 
$con=mysqli_connect("localhost","root","","adaptechtask");
mysqli_select_db($con,"adaptechtask");

if(isset($_POST['submit'])){
	
       $id = $row['id'];
	   $title = $row['title'];
	   $body = $row['body'];
	
	if($id=='' or $title=='' or $body==''){
		
		echo "<script>alert('Ndonjera prej fushave eshte e zbrazet')</script>";
		
		exit();
	}
	else {
		
		$insert_query = "INSERT into posts
        (id,title,body) 
		VALUES ('$id','$title','$body')";
		
		if(mysqli_query($con, $insert_query)){
			
		echo "<script>alert ('Done!')</script>";
		echo "<script>window.open('post.html','_self')</script>";
		}
	}	
}
?>