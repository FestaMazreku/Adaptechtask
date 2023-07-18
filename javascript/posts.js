function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Delete post
function deletePost(postsid, button) {
    if (confirm("Are you sure you want to delete this post?")) {
        $.ajax({
            url: 'database/posts.php',
            type: "POST",
            data: "deleteid=" + postsid,
            success: function (response) {
                console.log(response);
                if (response == "1") {
                    $(button).closest('tr').remove();
                    alert("The post is deleted successfully!");
                }
                else {
                    alert("The post is not deleted.");
                }
            },
            error: function (error) {
                console.log(error);
                alert("Error: The post is not deleted. " + error);
            },
        });
    }
}

//Get post data
function getpostdata(postid) {
    if (postid == null) {
        window.location.href = "posts.html";
    } else {
        $.ajax({
            type: "GET",
            url: `database/posts.php?post=${postid}`,
            dataType: 'json',
        }).then(post => {
            $("#editpostsid").val(post.postsid);
            $("#userid").val(post.userid);
            $("#title").val(post.title);
            $("#body").val(post.body);
        });
    }
}

//Update post
function updatePost() {
    var formdata = $('#editpostform').serialize();
    $.ajax({
        type: "POST",
        url: 'database/posts.php',
        data: formdata,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.hasOwnProperty("status") && response.status == 1) {
                alert(response.message);
                window.location.href = "posts.html";
            } else if (response.message === "No direct access!") {
                alert("You don't have permission to update the post.");
            } else {
                alert("Error: Failed to update the post.");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to update the post. " + error.responseText);
        }
    });
}

//Add post
function addPost() {
    var formdata = $('#addpostform').serialize();
    $.ajax({
        type: "POST",
        url: 'database/addPost.php',
        data: formdata,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.hasOwnProperty("success") && response.success) {
                alert(response.message);
                window.location.href = "posts.html";
            } else if (response.message === "No direct access!") {
                alert("You don't have permission to add a new post.");
            } else {
                alert("Error: Failed to add a new post.");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to add a new post. " + error.responseText);
        }
    });
}

//Get All
let currentPage = 1;
let totalPosts = 0;

function GetAll(page, perPage) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    history.pushState({}, '', `?page=${page}`);

    $.ajax({
        type: 'GET',
        url: 'database/posts.php?posts',
        dataType: 'json',
    }).then((postData) => {
        totalPosts = postData.length;
        const totalPages = Math.ceil(totalPosts / perPage);

        const from = (page - 1) * perPage;
        const to = page * perPage;
        const tableRows = postData.slice(from, to).map((post) => {
            return `<tr id="row-${post.postsid}">
                <td><p class="table-element1">${post.postsid}</p></td>
                <td><p class="table-element2">${post.userid}</p></td>
                <td><p class="table-element3">${post.title}</p></td>
                <td>
                <p class="table-element4" id="body-${post.postsid}" style="cursor: pointer;">
                ${post.body}
                </p>
                </td>
                <td>
                <button class="btn12"><a href="post.html?post=${post.postsid}">View</a></button>
                <br>
                <br>
                <button class="btn10"><a href="editPost.html?postid=${post.postsid}">Update</a></button>
                <br>
                <br>
                <button class="btn7" onclick="deletePost(${post.postsid}, this)">Delete</button>
                </td>
                </tr>`;
        });

        tableBody.innerHTML = tableRows.join('');

        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const prevPageLink = document.createElement('li');
        prevPageLink.classList.add('page-item');
        prevPageLink.innerHTML = `<a class="page-link" href="#" onclick="prevPage()">&laquo;</a>`;
        pagination.appendChild(prevPageLink);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('li');
            pageLink.classList.add('page-item');
            pageLink.innerHTML = `<a class="page-link" href="#" onclick="getPage(${i})">${i}</a>`;
            pagination.appendChild(pageLink);
        }

        const nextPageLink = document.createElement('li');
        nextPageLink.classList.add('page-item');
        nextPageLink.innerHTML = `<a class="page-link" href="#" onclick="nextPage()">&raquo;</a>`;
        pagination.appendChild(nextPageLink);

        const paginationLinks = document.querySelectorAll('#pagination li.page-item');
        paginationLinks.forEach((link) => {
            link.classList.remove('active');
        });

        const currentPageLink = document.querySelector(`#pagination li.page-item:nth-child(${page + 1})`);
        currentPageLink.classList.add('active');

        postData.slice(from, to).forEach((post) => {
            const bodyElement = document.getElementById(`body-${post.postsid}`);
            bodyElement.textContent = truncateString(post.body, 100);
            bodyElement.addEventListener('click', () => {
                if (bodyElement.textContent === truncateString(post.body, 100)) {
                    bodyElement.textContent = post.body;
                } else {
                    bodyElement.textContent = truncateString(post.body, 100);
                }
            });
        });

    }).catch((error) => {
        console.error('Error retrieving post data:', error);
    });
}

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.substring(0, maxLength) + '...';
}

//Previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        GetAll(currentPage, 10);
    }
}

//Next page
function nextPage() {
    const totalPages = Math.ceil(totalPosts / 10);
    if (currentPage < totalPages) {
        currentPage++;
        GetAll(currentPage, 10);
    }
}

function getPage(page) {
    currentPage = page;
    GetAll(currentPage, 10);
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    if (currentUrl.indexOf("editPost.html") > 0) {
        const postid = searchParams.get('postid');
        if (postid == null) {
            window.location.href = "posts.html";
        } else {
            getpostdata(postid);
        }
    }

    if (currentUrl.indexOf("posts.html") > 0) {
        const page = searchParams.get('page');
        if (page == null) {
            GetAll(1, 10);
        } else {
            GetAll(page, 10);
        }
    }
});
