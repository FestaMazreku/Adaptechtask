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
      postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.id}</p> <h6> Message: ${data.body}</h6> <h6 style="color: darkgray"> 
      <a href="#" class="#"
      onclick="getall()"> Show more... </a>`;
      jsonDataDiv.appendChild(postDiv);
      $("#comments").show();
    });

  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('comments');
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<p style="font-weight: bold"> Id: ${post.id} </p> <h6 style="color: darkblue"> Email: ${post.email} </h6> <p> Comment: ${post.body}</p>`;
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
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<a href="?post=${post.id}" onclick="OpenTab()" style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${post.title + "..."} </a> 
      <p style="color: darkblue" font-size: 25px"> Message: ${post.body} </p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").hide();
      });
    });
}

$(document).ready(function () {
  getPost(5);
});

$(document).ready(function () {
  getall();
});

function OpenTab() {
  getPost()
  window.open("file:///C:/Users/adaptech/Desktop/Adaptechtask/postt.html", target="_blank");
}