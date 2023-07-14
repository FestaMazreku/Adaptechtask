function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const usermessage = document.getElementById('usermessage').value;

  if (name !== '' && email !== '' && usermessage !== '') {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('usermessage', usermessage);

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
          newMessageElement.innerHTML = `<br> <p> ${name} </p> <p> <strong> ${email} </strong> </p> <p> Message: ${usermessage} </p>`;

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
    alert('The message can not be sent! Please fill in the fields!');
  }
}

function addComment() {
  const title = $('#title').val();
  const comment = $('#comment').val();
  const email = $('#email').val();
  const postId = $('#postId').val();

  console.log('Title:', title);
  console.log('Comment:', comment);
  console.log('Email:', email);
  console.log('Post ID:', postId);

  if (title.trim() !== '' && comment.trim() !== '' && email.trim() !== '') {
    const data = { title: title, comment: comment, email: email, postId: postId };
    $.ajax({
      type: 'POST',
      url: 'http://adaptechtask.test/database/comments.php',
      data: data,
      dataType: 'json',
      success: function (response) {
        if (response.success) {
          alert(response.message);
        } else {
          alert(response.message);
        }
      },
      error: function (error) {
        console.error('Error:', error);
      },
    });
  } else {
    alert('The comment cannot be added! Please fill in the fields!');
  }
}

//Date and Time
function getFormattedDateTime(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'http://adaptechtask.test/database/getComments.php',
    data: { postId: localStorage.getItem('currentPostId') },
    dataType: 'json',

    success: function (response) {
      if (response.success) {
        const comments = response.comments;

        comments.forEach((comment) => {
          const newCommentElement = document.createElement('div');
          newCommentElement.className = 'comment';
          newCommentElement.innerHTML = `<strong> Email: ${comment.email} </strong> <br> Title: ${comment.title} <br> Comment: ${comment.comment} <br> 
          <br> <p style="font-size: 14px"> ${getFormattedDateTime(comment.date)} </p> `;
          $('#comments').append(newCommentElement);
        });
      } else {
        alert(response.message);
      }
    },
    error: function (error) {
      console.error('Error:', error);
    },
  });

  $('#commentForm').submit(addComment);
});

function getPost(id) {
  fetch('http://adaptechtask.test/database/posts.php?post=' + id)
    .then((response) => response.json())
    .then((data) => {
      $.ajax({
        type: 'GET',
        url: 'http://adaptechtask.test/database/users.php?users',
        dataType: 'json',
      }).then((userData) => {
        const jsonDataDiv = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
          <p style="font-size: 16px; font-weight: bold; color: #222"> Title: ${data.title} </p>
          <p style="color: black; font-size: 15px"> Description: ${data.body} </p>
          <p style="font-weight: bold"> Name: ${userData[data.postsid - 1].name} </p> 
          <h6 style="color: darkblue"> Email: ${userData[data.postsid - 1].email} </h6> 
          <p> Age: ${userData[data.postsid - 1].age} </p>
          <p> Phone: ${userData[data.postsid - 1].phone} </p>
          <p> City: ${userData[data.postsid - 1].city} </p>
          <a href="post.html" onclick="getPost()"> <button class="btn1"> &laquo; Go back </button> </a> <hr>`;
        jsonDataDiv.appendChild(postDiv);
        $('#comments').show();

        localStorage.setItem('currentPostId', id);
        document.getElementById('postId').value = id;
      });
    });
}

//Date and Time
// function getFormattedDateTime(dateString) {
//   const date = new Date(dateString);
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return date.toLocaleDateString(undefined, options);
// }

// function GetAll() {
//   fetch('http://adaptechtask.test/database/posts.php?posts')
//     .then(response => response.json())
//     .then(data => {
//       const jsonDataDiv = document.getElementById('posts');
//       data.forEach(post => {
//         $.ajax({
//           type: "GET",
//           url: 'http://adaptechtask.test/database/users.php?users',
//           dataType: 'json',
//         }).then(userData => {
//           const postDiv = document.createElement('div');
//           const fullDescription = post.body;
//           const maxLength = 100;

//           let shortenedDescription = fullDescription;
//           let showFullDescription = false;

//           if (fullDescription.length > maxLength) {
//             shortenedDescription = fullDescription.substring(0, maxLength) + '...';
//             showFullDescription = true;
//           }
//           postDiv.innerHTML = `
//             <p style="font-weight: bold">Name: ${userData[post.postsid - 1].name}</p>
//             <p style="color: #333; font-size: 14px"> ${getFormattedDateTime(post.date)}</p>
//             <a href="?post=${post.postsid}" style="font-size: 16px; font-weight: bold; color: #222">
//             Title: ${post.title}
//             </a>
//             <p style="color: black; font-size: 15px"> Description:
//             <span id="description-${post.postsid}" style="cursor: pointer;">
//             ${shortenedDescription}
//             </span>
//             </p>
//             <hr>`;

//           jsonDataDiv.appendChild(postDiv);

//           if (showFullDescription) {
//             const descriptionElement = document.getElementById(`description-${post.postsid}`);
//             descriptionElement.addEventListener('click', () => {
//               descriptionElement.textContent = fullDescription;
//             });
//           }
//           $("#comments").hide();
//         });
//       });
//     });
// }

//Date and Time
// function getFormattedDateTime(dateString) {
//   const date = new Date(dateString);
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return date.toLocaleDateString(undefined, options);
// }

// let currentPage = 1;
// let totalPosts = 0;

// //Get All
// function GetAll(page, perPage) {
//   const jsonDataDiv = document.getElementById('posts');
//   jsonDataDiv.innerHTML = '';
//   history.pushState({}, '', `?page=${page}`);

//   $.ajax({
//     type: 'GET',
//     url: 'http://adaptechtask.test/database/posts.php?posts',
//     dataType: 'json',
//   }).then((postData) => {
//     totalPosts = postData.length;
//     const totalPages = Math.ceil(totalPosts / perPage);

//     const from = (page - 1) * perPage;
//     const to = page * perPage;
//     const postPromises = postData.slice(from, to).map((post) => {
//       return $.ajax({
//         type: 'GET',
//         url: 'http://adaptechtask.test/database/users.php?users',
//         dataType: 'json',
//       }).then((userData) => {
//         const postDiv = document.createElement('div');
//         const fullDescription = post.body;
//         const maxLength = 100;

//         let shortenedDescription = fullDescription;
//         let showFullDescription = false;

//         if (fullDescription.length > maxLength) {
//           shortenedDescription = fullDescription.substring(0, maxLength) + '...';
//           showFullDescription = true;
//         }
//         postDiv.innerHTML = `
//           <p style="font-weight: bold">Name: ${userData[post.postsid - 1].name}</p>
//           <p style="color: #333; font-size: 14px"> ${getFormattedDateTime(post.date)}</p>
//           <a href="?post=${post.postsid}" style="font-size: 16px; font-weight: bold; color: #222">
//           Title: ${post.title}
//           </a>
//           <p style="color: black; font-size: 15px"> Description:
//           <span id="description-${post.postsid}" style="cursor: pointer;">
//           ${shortenedDescription}
//           </span>
//           </p>
//           <hr>`;

//         jsonDataDiv.appendChild(postDiv);

//         if (showFullDescription) {
//           const descriptionElement = document.getElementById(`description-${post.postsid}`);
//           descriptionElement.addEventListener('click', () => {
//             descriptionElement.textContent = fullDescription;
//           });
//         }
//         $("#comments").hide();
//       });
//     });

//     Promise.all(postPromises).then(() => {
//       const pagination = document.getElementById('pagination');
//       pagination.innerHTML = '';

//       const prevPageLink = document.createElement('li');
//       prevPageLink.classList.add('page-item');
//       prevPageLink.innerHTML = `<a class="page-link" href="#" onclick="prevPage()">&laquo;</a>`;
//       pagination.appendChild(prevPageLink);

//       for (let i = 1; i <= totalPages; i++) {
//         const pageLink = document.createElement('li');
//         pageLink.classList.add('page-item');
//         pageLink.innerHTML = `<a class="page-link" href="#" onclick="getPage(${i})">${i}</a>`;
//         pagination.appendChild(pageLink);
//       }

//       const nextPageLink = document.createElement('li');
//       nextPageLink.classList.add('page-item');
//       nextPageLink.innerHTML = `<a class="page-link" href="#" onclick="nextPage()">&raquo;</a>`;
//       pagination.appendChild(nextPageLink);

//       const paginationLinks = document.querySelectorAll('#pagination li.page-item');
//       paginationLinks.forEach((link) => {
//         link.classList.remove('active');
//       });

//       const currentPageLink = document.querySelector(`#pagination li.page-item:nth-child(${page + 1})`);
//       currentPageLink.classList.add('active');
//     });

//   }).catch((error) => {
//     console.error('Error retrieving post data:', error);
//   });
// }

// // Previous page
// function prevPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     GetAll(currentPage, 10);
//   }
// }

// // Next page
// function nextPage() {
//   const totalPages = Math.ceil(totalPosts / 10);
//   if (currentPage < totalPages) {
//     currentPage++;
//     GetAll(currentPage, 10);
//   }
// }

// function getPage(page) {
//   currentPage = page;
//   GetAll(currentPage, 10);
// }

// Date and Time
function getFormattedDateTime(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

function GetAll(page, perPage) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  fetch(`http://adaptechtask.test/database/posts.php?posts&start=${startIndex}&end=${endIndex}`)
    .then(response => response.json())
    .then(data => {
      const jsonDataDiv = document.getElementById('posts');
      jsonDataDiv.innerHTML = '';

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
            <p style="color: #333; font-size: 14px"> ${getFormattedDateTime(post.date)}</p>
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

  // Update active class for pagination links
  const paginationLinks = document.querySelectorAll('#pagination .page-item');
  paginationLinks.forEach(link => {
    link.classList.remove('active');
    if (link.textContent === page.toString()) {
      link.classList.add('active');
    }
  });
}

$(document).ready(function () {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(new URL(currentUrl).search);
  const post = searchParams.get('post');
  if (post == null) {
    GetAll();
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
    addComment();
  }

  if (currentUrl.indexOf("users.html") > -1) {
    const page = searchParams.get('page');
    if (page == null) {
      GetAll(1, 10);
    } else {
      GetAll(parseInt(page), 10);
    }
  }
});