<?php

$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");

if (isset($_GET['edit'])) {

    $edit_id = $_GET['edit'];

    $edit_query = "SELECT * FROM posts WHERE postsid ='$edit_id'";

    $run_edit = mysqli_query($con, $edit_query);

?>
<html>
    <body>

        <?php
        while ($erow = mysqli_fetch_array($run_edit)) {
        ?>

            <form method="post" enctype="multipart/form-data" action="editPost_by_id.php">

                <table width="600" bgcolor="#C19A6B" align="center" border="8">

                    <tr>
                        <td align="center" bgcolor="#5d432c" colspan="6">
                            <h1>Update the posts here:</h1>
                        </td>
                    </tr>
                    <input type="text" name="postsid" size="30" value="<?php echo $erow['postsid']; ?>">

                    <tr>
                        <td align="right">Id:</td>
                        <td>
                            <input type="date" name="id" size="30" value="<?php echo $erow['id']; ?>">
                        </td>
                    </tr>

                    <tr>
                        <td align="right">Title:</td>
                        <td>
                            <input type="text" name="title" size="30" value="<?php echo $erow['title']; ?>">
                        </td>
                    </tr>

                    <tr>
                        <td align="right">Message:</td>
                        <td>
                            <input type="text" name="body" size="30" value="<?php echo $erow['body']; ?>">
                        </td>
                    </tr>


                    <div class="input-group">
                        <tr>
                            <td align="center" colspan="6">
                                <input type="submit" style="padding: 3px; background: black; opacity: 0.7; color: white; font-weight: bold; border: 2px; border-radius: 1px; font-size: 20px; width: 70%" name="update" value="Update now">
                            </td>
                        </tr>
                    </div>

                <?php
            }
                ?>
            <?php
        }
            ?>
                </table>
            </form>
    </body>
</html>