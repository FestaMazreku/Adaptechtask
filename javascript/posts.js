function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//delete post
function deletePost(postsid, button) {
    if (confirm("Are you sure you want to delete this post?")) {
        $.ajax({
            url: 'http://adaptechtask.test/database/posts.php',
            type: "POST",
            data: "deleteid=" + postsid,
            success: function (response) {
                console.log(response);
                if (response == "1") {
                    $(button).closest('tr').remove();
                    alert("The post is deleted successfully!");
                }
                else {
                    alert("The post is not deleted.");
                }
            },
            error: function (error) {
                console.log(error);
                alert("Error: The post is not deleted. " + error);
            },
        });
    }
}

//get post data
function getpostdata(postid) {
    if (postid == null) {
        window.location.href = "posts.html";
    } else {
        $.ajax({
            type: "GET",
            url: `http://adaptechtask.test/database/posts.php?post=${postid}`,
            dataType: 'json',
        }).then(post => {
            $("#editpostsid").val(post.postsid);
            $("#userid").val(post.userid);
            $("#title").val(post.title);
            $("#body").val(post.body);
            // $("#date").val(post.date);
        });
    }
}

//update post
function updatePost() {
    var formdata = $('#editpostform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/posts.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            var result = JSON.parse(response);
            alert(result.message);
            if (result.status == 1)
                window.location.href = "posts.html";
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to update the post. " + error.responseText);
        }
    });
}

//add post
function addPost() {
    var formdata = $('#addpostform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/addPost.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            var result = JSON.parse(response);
            if (result.success) {
                alert("New post has been added successfully!");
                window.location.href = "posts.html";
            } else {
                alert("New post is not added!");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: New post is not added! " + error.responseText);
        }
    });
}

function GetAll() {
    $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/posts.php?posts',
        dataType: 'json',
    }).then(postData => {
        postData.forEach(post => {
            const postDiv = document.createElement('tr');
            postDiv.innerHTML = `<tr id="row-${post.postsid}">
          <td> <p class="table-element1">${post.postsid} </p> </td>
          <td> <p class="table-element2">${post.userid} </p> </td>
          <td> <p class="table-element3">${post.title} </p> </td>
          <td> <p class="table-element4">${post.body} </p> </td>
       
          <td>
          <button class="btn10"><a href="editPost.html?postid=${post.postsid}"> Update </a></button>
          <button class="btn7" onclick="deletePost(${post.postsid}, this)"> Delete </button>
          </td>
          </tr>`;
            $("table").append(postDiv);
        });
    });
}

//  <td> <p class="table-element5">${post.date} </p> </td> 

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    if (currentUrl.indexOf("editPost.html") > 0) {
        const postid = searchParams.get('postid');
        if (postid == null) {
            window.location.href = "posts.html";
        } else {
            getpostdata(postid);
        }
    }

    if (currentUrl.indexOf("posts.html") > 0) {
        const page = searchParams.get('page');
        if (page == null) {
            GetAll(1, 20);
        } else {
            GetAll(page, 20);
        }
    }
});