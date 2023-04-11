fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    const jsonDataDiv = document.getElementById('posts');
    data.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `<a href="#" style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${post.title}</a> 
      <p style="color: darkblue" font-size: 25px"> Message: ${post.body}</p>`;
      jsonDataDiv.appendChild(postDiv);
    });
  });

// if(post.title.length < 10){
//   post.title = post.title.slice(0, 19) + "...";
// }

$(document).ready(function () {
  $("#show").click(function () {
    $("#comments").toggle();
  });
});

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    const jsonDataDiv = document.getElementById('comments');
    data.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `<p style="font-size: 15px; color: darkblue; font-weight: bold"> Email: ${post.email}</p> <h6> Name: ${post.name}</h6> <h6 style="color: darkgray"> Comment: ${post.body}</h6>`;
      jsonDataDiv.appendChild(postDiv);
    });
  });