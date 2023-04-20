function New() {
  var new_title = document.getElementById("new_title").value;
  console.log("Titulli i ri: " + new_title);
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
      console.log('Të dhënat: ' + JSON.stringify(json));
      alert("Artikulli i shtua me sukses! Shikoni në console.");
    })
}

// function getPost(id) {
//   fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     .then(response => response.json())
//     .then(data => {
//       $.ajax({
//         type: "GET",
//         url: 'https://jsonplaceholder.typicode.com/users',
//         dataType: 'json',
//       }).then(userData => {
//         const jsonDataDiv = document.getElementById('posts');
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.id}</p> 
//           <h6> Message: ${data.body} </h6>
//           <p style="font-weight: bold"> Name: ${userData[data.id - 1].name} </p> 
//           <h6 style="color: #0F52BA"> Email: ${userData[data.id - 1].email} </h6> 
//           <p> Username: ${userData[data.id - 1].username} </p> 
//           <p> Phone: ${userData[data.id - 1].phone} </p>
//           <p> Website: ${userData[data.id - 1].website} </p>
//           <a href="post.html" onclick="getPost()"> <button class="btn1"> Go back </button> </a>`
//         jsonDataDiv.appendChild(postDiv);
//         getComment(id);
//         $("#comments").show();
//       });
//     });
// };

function getPost(id) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(data => {
      $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/users.php',
        dataType: 'json',
      }).then(userData => {
        const jsonDataDiv = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.id}</p> 
          <h6> Message: ${data.body} </h6>
          <p style="font-weight: bold"> Name: ${userData[data.id - 1].name} </p> 
          <h6 style="color: #0F52BA"> Email: ${userData[data.id - 1].email} </h6> 
          <p> Username: ${userData[data.id - 1].username} </p> 
          <p> Age: ${userData[data.id - 1].age} </p>
          <p> Phone: ${userData[data.id - 1].phone} </p>
          <p> City: ${userData[data.id - 1].city} </p>
          <a href="post.html" onclick="getPost()"> <button class="btn1"> Go back </button> </a>`
        jsonDataDiv.appendChild(postDiv);
        getComment(id);
        $("#comments").show();
      });
    });
};

function getComment(id) {
  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('comments');
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h6 style="font-weight: bold"> Email: ${post.email} </h6> <p style="color: darkblue; font-size: 15px"> ID: ${post.id} </p> 
        <p style="color: darkblue"> <p> Comment: ${post.body}</p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").show();
      });
    });
}

// function getall() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//       const jsonDataDiv = document.getElementById('posts');
//       data.forEach(post => {
//         $.ajax({
//           type: "GET",
//           url: 'https://jsonplaceholder.typicode.com/users',
//           dataType: 'json',
//         }).then(userData => {
//           const postDiv = document.createElement('div');
//           postDiv.innerHTML = `<p style="font-weight: bold"> Name: ${userData[post.id - 1].name} </p> 
//         <a href="?post=${post.id}" style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> 
//         Title: ${post.title + "..."} </a> 
//       <p style="color: darkblue" font-size: 25px"> Message: ${post.body} </p>`;
//           jsonDataDiv.appendChild(postDiv);
//           $("#comments").hide();
//         });
//       });
//     });
// }

function getall() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      data.forEach(post => {
        $.ajax({
          type: "GET",
          url: 'http://adaptechtask.test/database/users.php',
          dataType: 'json',
        }).then(userData => {
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `<p style="font-weight: bold"> Name: ${userData[post.id - 1].name} </p> 
        <a href="?post=${post.id}" style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> 
        Title: ${post.title + "..."} </a> 
      <p style="color: darkblue" font-size: 25px"> Message: ${post.body} </p>`;
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