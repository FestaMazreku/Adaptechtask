function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function New() {
  var new_title = document.getElementById("new_title").value;
  console.log("Comment: " + new_title);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: new_title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log('Data: ' + JSON.stringify(json));
      alert("Article successfully added! Look at the console.");
    })
}

//add user
function addUser() {
  var formdata = $('#adduserform').serialize();
  $.ajax({
    url: 'http://adaptechtask.test/database/addUser.php',
    type: "POST",
    data: formdata,
    success: function (response) {
      console.log(response);
      var result = JSON.parse(response);
      if (result.success) {
        alert("User is added successfully!");
        window.location.href = "users.html";
      } else {
        alert("User is not added.");
      }
    },
    error: function (error) {
      console.log(error);
      alert("Error: User is not added! " + error.responseText);
    }
  });
}

//edit/update user
function updateUser() {
  var id = $('#id').val();
  var name = $('#name').val();
  var username = $('#username').val();
  var age = $('#age').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var city = $('#city').val();

  // Create an object with the form data
  var formData = {
    id: id,
    name: name,
    username: username,
    age: age,
    email: email,
    phone: phone,
    city: city
  };

  $.ajax({
    url: 'http://adaptechtask.test/database/updateUser.php',
    type: 'GET',
    data: formData,
    success: function (response) {
      var result = JSON.parse(response);
      if (result.success) {
        alert("User is updated successfully!");
        window.location.href = "users.html";
      } else {
        alert("Failed to update user.");
      }
    },
    error: function (xhr, status, error) {
      console.log(xhr.responseText);
      alert("Error: Failed to update user.");
    }
  });
}

// function fetchUser(id) {
//   $.ajax({
//     url: 'http://adaptechtask.test/database/getUser.php',
//     type: 'GET',
//     data: { id: id },
//     success: function (response) {
//       var result = JSON.parse(response);
//       if (result.success) {
//         var user = result.user;
//         $('#id').val(user.id);
//         $('#name').val(user.name);
//         $('#username').val(user.username);
//         $('#age').val(user.age);
//         $('#email').val(user.email);
//         $('#phone').val(user.phone);
//         $('#city').val(user.city);
//       } else {
//         alert("Failed to fetch user data.");
//       }
//     },
//     error: function (xhr, status, error) {
//       console.log(xhr.responseText);
//       alert("Error: Failed to fetch user data.");
//     }
//   });
// }

// // Get the user ID from the query string or other sources
// var id = id; // Obtain the user ID from your source

// // Call the fetchUser function with the user ID
// fetchUser(id);


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
};

function getComment(id) {
  fetch('http://adaptechtask.test/database/comments.php?comment=' + id)
    .then(response => response.json())
    .then(data => {
      $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/users.php?users',
        dataType: 'json',
      }).then(commentData => {
        const jsonDataDiv = document.getElementById('comments');
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<hr>
        <p style="font-weight:bold"> Name: ${commentData[data.postid - 1].name} </p> 
        <p style="color: darkblue"> <p> Comment nr.${data.postid}: ${data.body} </p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").show();
      });
    });
};

function getall() {
  fetch('http://adaptechtask.test/database/posts.php?posts')
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      data.forEach(post => {
        $.ajax({
          type: "GET",
          url: 'http://adaptechtask.test/database/users.php?users',
          dataType: 'json',
        }).then(userData => {
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `<p style="font-weight: bold"> ID: ${userData[post.postsid - 1.].id} </p>
          <p style="font-weight: bold"> Name: ${userData[post.postsid - 1].name} </p> 
          <p style="color: darkblue"> Email: ${userData[post.postsid - 1].email} </p> 
          <a href="?post=${post.postsid}" style="font-size: 17px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> 
          Title: ${post.title + "..."} </a>
          <p style="color: black" font-size: 25px"> Message: ${post.body} </p>
          <hr>`;
          jsonDataDiv.appendChild(postDiv);
          $("#comments").hide();
        });
      });
    });
}

$(document).ready(function () {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  const post = searchParams.get('post');
  if (post == null) {
    getall();
  }
  else {
    getPost(post);
  }
});

$(document).ready(function () {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  const data = searchParams.get('user');
  if (data == null) {
    null;
  }
  else {
    getPost(data);
  }
});

$(document).ready(function () {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  const data = searchParams.get('comments');
  if (data == null) {
    null;
  }
  else {
    getComment(data);
  }
});