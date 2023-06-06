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
        postDiv.innerHTML = `
          <p style="font-size: 18px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> Title: ${data.title} </p>
          <h6> Description: ${data.body} </h6>
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
        <p style="color: darkblue"> <p> Comment: ${data.body} </p>`;
        jsonDataDiv.appendChild(postDiv);
        $("#comments").show();
      });
    });
}

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
          const fullDescription = post.body;
          const maxLength = 100;

          let shortenedDescription = fullDescription;
          let showFullDescription = false;

          if (fullDescription.length > maxLength) {
            shortenedDescription = fullDescription.substring(0, maxLength) + '...';
            showFullDescription = true;
          }
          
          postDiv.innerHTML = `
            <p style="font-weight: bold">Name: ${userData[post.postsid - 1].name}</p> 
            <p style="color: darkblue">Email: ${userData[post.postsid - 1].email}</p> 
            <a href="?post=${post.postsid}" style="font-size: 17px; font-weight: bold; color: black; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"> 
              Title: ${post.title}
            </a>
            <p style="color: black; font-size: 18px">Description: 
              <span id="description-${post.postsid}" style="cursor: pointer;">
                ${shortenedDescription}
              </span>
            </p>
            <p style="color: black; font-size: 17px; font-weight: bold">Date: ${post.date}</p>
            <hr>`;

          jsonDataDiv.appendChild(postDiv);

          if (showFullDescription) {
            const descriptionElement = document.getElementById(`description-${post.postsid}`);
            descriptionElement.addEventListener('click', () => {
              descriptionElement.textContent = fullDescription;
            });
          }
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

  const user = searchParams.get('user');
  if (user == null) {
    null;
  }
  else {
    getPost(user);
  }

  const comment = searchParams.get('comments');
  if (comment == null) {
    null;
  }
  else {
    getComment(comment);
  }
});