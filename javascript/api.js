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

function getPost(id) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.id}</p> <h6> Message: ${data.body} </h6> 
      <a href="file:///C:/Users/adaptech/Desktop/Adaptechtask/post.html"> <button class="btn1"> Go back </button> </a>`
      jsonDataDiv.appendChild(postDiv);
      getComment(id);
      $("#comments").show();
    });
}

function getComment(id) {
  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('comments');
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h6 style="font-weight: bold"> Email: ${post.email} </h6> <p style="color: darkblue; font-size: 15px"> ID: ${post.id} </p> <p style="color: darkblue"> <p> Comment: ${post.body}</p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").show();
      });
    });
}

function getall() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      data.forEach(post => {
        // {
        //   //request to https://jsonplaceholder.typicode.com/users/{post.userId}
        //   $("#user_" + post.username).innerHTML(newdata) = `<p> Username: ${post.username}</p>`
        // }
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<a href="?post=${post.id}"  style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${post.title + "..."} </a> 
      <p style="color: darkblue" font-size: 25px"> Message: ${post.body} </p>
      <p id="user_${post.id}"></p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").hide();
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