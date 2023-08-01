<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, "adaptechtask");
require_once('IsLoggedIn.php');

if (isset($_POST['title']) && isset($_POST['body']) && isset($_POST['date'])) {
    if (!IsLoggedInAsAdmin()) {
        $response['success'] = false;
        $response['message'] = "No direct access!";
        echo json_encode($response);
        exit();
    }

    $userid = $_SESSION['userid'];
    $title = $_POST['title'];
    $body = $_POST['body'];
    $date = $_POST['date'];

    if (!empty($userid) && !empty($title) && !empty($body) && !empty($date)) {
        $currentDate = date("Y-m-d H:i:s");

        $sql = $con->prepare("INSERT INTO posts (userid, title, body, date, image) VALUES (?, ?, ?, ?, ?)");
        $sql->bind_param("sssss", $userid, $title, $body, $currentDate, $imagePath);

        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $targetDir = "upload/";
            $filename = basename($_FILES["image"]["name"]);
            $targetFilePath = $targetDir . $filename;
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

            $check = getimagesize($_FILES["image"]["tmp_name"]);

            if ($check !== false) {
                if ($imageFileType == "jpg" || $imageFileType == "png" || $imageFileType == "jpeg" || $imageFileType == "gif") {
                    if (file_exists($targetFilePath)) {
                        $response['success'] = false;
                        $response['message'] = "Sorry, the file already exists.";
                        $uploadOk = 0;
                    } else {
                        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
                            $imagePath = $targetFilePath;
                        } else {
                            $response['success'] = false;
                            $response['message'] = "Failed to upload photo.";
                        }
                    }
                } else {
                    $response['success'] = false;
                    $response['message'] = "Sorry, only JPG, JPEG, PNG, and GIF files are allowed.";
                    $uploadOk = 0;
                }
            } else {
                $response['success'] = false;
                $response['message'] = "File is not an image.";
                $uploadOk = 0;
            }
        }

        if ($uploadOk === 1) {
            $sql->execute();

            $response = array();
            if ($sql->affected_rows > 0) {
                $response['success'] = true;
                $response['message'] = "New post and photo have been added successfully!";
            } else {
                $response['success'] = false;
                $response['message'] = "New post is not added!";
            }
        }

        echo json_encode($response);

        $sql->close();

    } else {
        $response['success'] = false;
        $response['message'] = "Required fields are missing.";
        echo json_encode($response);
    }

} else {
    $response['success'] = false;
    $response['message'] = "Invalid request.";
    echo json_encode($response);
}

$con->close();
?>