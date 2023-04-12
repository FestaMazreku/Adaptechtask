function getall() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<a href="?post=${post.id}" style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${post.title}</a> 
      <p style="color: darkblue" font-size: 25px"> Message: ${post.body}</p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").hide();
      });
    });
}

function getPost(id) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> ID: ${data.id}</p> <h6> Message: ${data.body}</h6> <h6 style="color: darkgray">`;
      jsonDataDiv.appendChild(postDiv);
      $("#comments").show();
    });

  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('comments');
      data.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<h6 style="color: darkblue"> Email: ${post.email} </h6> <p> Comment: ${post.body}</p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").show();
      });
    });
}

// $(document).ready(function () {
//   getall();
// });

$(document).ready(function () {
  getPost(5);
});