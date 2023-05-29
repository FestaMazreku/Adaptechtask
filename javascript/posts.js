function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
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
            <button class="btn10"><a href="editPost.html?postid=${post.postsid}"> Update </a></button>
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
    if (currentUrl.indexOf("users.html") > 0) {
        const page = searchParams.get('page');
        if (page == null) {
            GetAll(1, 20);
        } else {
            GetAll(page, 20);
        }
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('post');
    if (post == null) {
      getAll();
    }
    else {
      getPost(post);
    }
});