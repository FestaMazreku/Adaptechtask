function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addComment() {
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  if (email.trim() !== '' && comment.trim() !== '') {
    const data = new FormData();
    data.append('email', email);
    data.append('comment', comment);

    fetch('http://adaptechtask.test/database/addComment.php', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(responseData => {

        if (responseData.success) {
          alert(responseData.message);

          const newCommentElement = document.createElement('div');
          newCommentElement.className = 'comment';
          newCommentElement.innerHTML = `<strong>${email}</strong>: ${comment}`;

          const commentsSection = document.getElementById('comments');
          commentsSection.appendChild(newCommentElement);
        } else {
          alert(responseData.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    alert('The comment is not added! Please fill in the fields!');
  }
}

function addMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name !== '' && email !== '' && message !== '') {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    fetch('http://adaptechtask.test/database/addMessage.php', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(responseData => {

        if (responseData.success) {
          alert(responseData.message);

          const newMessageElement = document.createElement('div');
          newMessageElement.className = 'message';
          newMessageElement.innerHTML = `<br> <p> Name: ${name} </p> <p> <strong> ${email} </strong> </p> <p> Message: ${message} </p>`;

          const messageSection = document.getElementById('message');
          messageSection.appendChild(newMessageElement);
        } else {
          alert(responseData.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    alert('The message is not sent! Please fill in the fields!');
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
        postDiv.innerHTML = `
          <p style="font-size: 16px; font-weight: bold; color: #222"> Title: ${data.title} </p>
          <p style="color: black; font-size: 15px"> Description: ${data.body} </p>
          <hr>
          <p style="font-weight: bold"> Name: ${userData[data.postsid - 1].name} </p> 
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
      <p> <b> Comment: </b> ${data.body} </p>`;
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
            <p style="color: #333; font-size: 14px; font-weight: bold"> Date: ${post.date}</p>
            <a href="?post=${post.postsid}" style="font-size: 16px; font-weight: bold; color: #222"> 
            Title: ${post.title}
            </a>
            <p style="color: black; font-size: 15px"> Description: 
            <span id="description-${post.postsid}" style="cursor: pointer;">
            ${shortenedDescription}
            </span>
            </p>
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