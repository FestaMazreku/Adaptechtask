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
                  alert("Post is deleted successfully!");
              }
              else {
                  alert("Post is not deleted.");
              }
          },
          error: function (error) {
              console.log(error);
              alert("Error: Post is not deleted! " + error);
          },
      });
  }
}

//add a post
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
              alert("Post is added successfully!");
              window.location.href = "posts.html";
          } else {
              alert("Post is not added! Required fields are missing.");
          }
      },
      error: function (error) {
          console.log(error);
          alert("Error: Post is not added! " + error.responseText);
      }
  });
}

function getPost(id) {
    fetch('http://adaptechtask.test/database/posts.php?post=' + id)
      .then(response => response.json())
      .then(data => {
        $.ajax({
          type: "GET",
          url: 'http://adaptechtask.test/database/users.php?users',
          dataType: 'json',
        }).then(userData => {
          const jsonDataDiv = document.getElementById('posts');
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.userid} </p> 
            <p style="font-size: 20px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${data.title} </p>
            <h6> Message: ${data.body} </h6>
            <hr>
            <p style="font-weight: bold"> Name: ${userData[data.postsid - 1].name} </p> 
            <p> Username: ${userData[data.postsid - 1].username} </p> 
            <h6 style="color: darkblue"> Email: ${userData[data.postsid - 1].email} </h6> 
            <p> Age: ${userData[data.postsid - 1].age} </p>
            <p> Phone: ${userData[data.postsid - 1].phone} </p>
            <p> City: ${userData[data.postsid - 1].city} </p>
            <a href="post.html" onclick="getPost()"> <button class="btn1"> &laquo; Go back </button> </a>`
          jsonDataDiv.appendChild(postDiv);
          getComment(id);
          $("#comments").show();
        });
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
          <td> <p class="table-element3">${post.title} </p> </td>
          <td> <p class="table-element4">${post.body} </p> </td>
          <td>
          <button class="btn10"><a href="editUser.html?userid=${post.postsid}"> Update </a></button>
          <button class="btn7" onclick="deletePost(${post.postsid}, this)"> Delete </button>
          </td>
          </tr>`;
          $("table").append(postDiv);
      });
  });
}

$(document).ready(function () {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  // if (currentUrl.indexOf("editUser.html") > 0) {
  //     const userid = searchParams.get('userid');
  //     if (userid == null) {
  //         window.location.href = "users.html";
  //     } else {
  //         updateUser(userid);
  //     }
  // }

  if (currentUrl.indexOf("posts.html") > 0) {
      const page = searchParams.get('page');
      if (page == null) {
          GetAll(1, 20);
      } else {
          GetAll(page, 20);
      }
  }
});