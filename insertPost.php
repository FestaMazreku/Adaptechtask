<?php
session_start();

?>
<html>

<head>
    <title>Insert a new post</title>
</head>

<body>
    <form method="post" action="editPost_by_id.php" enctype="multipart/form-data">

        <table width="600" bgcolor="lightblue" align="center" border="10">
            <tr>
                <td align="center" bgcolor="white" colspan="6">
                    <h1>Update the post here:</h1>
                </td>
            </tr>
            <tr>
                <td align="middle">Name:</td>
                <td>
                    <input type="text" name="name" size="30">
                </td>
            </tr>
            <tr>
                <td align="middle">Username:</td>
                <td>
                    <input type="text" name="username" size="30">
                </td>
            </tr>
            <tr>
                <td align="middle">Age:</td>
                <td>
                    <input type="text" name="age" size="30">
                </td>
            </tr>
            <tr>
                <td align="middle">Email:</td>
                <td>
                    <input type="text" name="email" size="30">
                </td>
            </tr>
            <tr>
                <td align="middle">Phone:</td>
                <td>
                    <input type="tel" name="phone" size="30">
                </td>
            </tr>
            <tr>
                <td align="middle">City:</td>
                <td>
                    <input type="text" name="city" size="30">
                </td>
            </tr>
            <tr>
                <td align="center" colspan="6"><input type="submit" name="submit" value="Add now"></td>
            </tr>
        </table>
    </form>
</body>

</html>

<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_POST['submit'])) {

    $id = $row['id'];
    $name = $row['name'];
    $username = $row['username'];
    $age = $row['age'];
    $email = $row['email'];
    $phone = $row['phone'];
    $city = $row['city'];

    if ($name != '' or $username != '' or $age != '') {
        echo "<script>alert('Ndonjera prej fushave eshte e zbrazet')</script>";
        exit();
    } else {

        $insert_query = "INSERT into users
        (name,username,age,email,phone,city) 
		VALUES ('$name','$username','$age',
		'$email','$phone','$city')";

        if (mysqli_query($con, $insert_query)) {
            echo "<script>alert ('The post is completed successfully!')</script>";
            echo "<script>window.open('tablepost.php','_self')</script>";
        }
    }
}
?>