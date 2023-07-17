function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Delete user
function deleteUser(id, button) {
    if (confirm("Are you sure you want to delete this user?")) {
        $.ajax({
            url: 'http://adaptechtask.test/database/users.php',
            type: "POST",
            data: "deleteid=" + id,
            success: function (response) {
                console.log(response);
                if (response == "1") {
                    $(button).closest('tr').remove();
                    alert("The user is deleted successfully!");
                }
                else {
                    alert("The user is not deleted.");
                }
            },
            error: function (error) {
                console.log(error);
                alert("Error: The user is not deleted. " + error);
            },
        });
    }
}

//Get user data
function getuserdata(userid) {
    if (userid == null) {
        window.location.href = "users.html";
    } else {
        $.ajax({
            type: "GET",
            url: `http://adaptechtask.test/database/users.php?user=${userid}`,
            dataType: 'json',
        }).then(post => {
            $("#editid").val(post.id);
            $("#name").val(post.name);
            $("#age").val(post.age);
            $("#email").val(post.email);
            $("#phone").val(post.phone);
            $("#city").val(post.city);
        });
    }
}

//Update user
function updateUser() {
    var formdata = $('#edituserform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/users.php',
        data: formdata,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.hasOwnProperty("status") && response.status === 1) {
                alert(response.message);
                window.location.href = "users.html";
            } else if (response.message === "No direct access!") {
                alert("You don't have permission to update the user.");
            } else {
                alert("Error: Failed to update the user.");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to update the user. " + error.responseText);
        }
    });
}

//Add user
function addUser() {
    var formdata = $('#adduserform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/addUser.php',
        data: formdata,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response.hasOwnProperty("success") && response.success) {
                alert(response.message);
                window.location.href = "users.html";
            } else if (response.message === "No direct access!") {
                alert("You don't have permission to add a new user.");
            } else {
                alert("Error: Failed to add a new user.");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to add a new user. " + error.responseText);
        }
    });
}

//Get All
function GetAll(page, perPage) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    history.pushState({}, '', `?page=${page}`);

    $.ajax({
        type: 'GET',
        url: 'http://adaptechtask.test/database/users.php?users',
        dataType: 'json',
    }).then((userData) => {
        const totalUsers = userData.length;
        const totalPages = Math.ceil(totalUsers / perPage);

        const from = (page - 1) * perPage;
        const to = page * perPage;
        const tableRows = userData.slice(from, to).map((post) => {
            return `<tr id="row-${post.id}">
          <td><p class="table-element1">${post.id}</p></td>
          <td><p class="table-element2">${post.name}</p></td>
          <td><p class="table-element4">${post.age}</p></td>
          <td><p class="table-element5">${post.email}</p></td>
          <td><p class="table-element6">${post.phone}</p></td>
          <td><p class="table-element7">${post.city}</p></td>
          <td>
          <button class="btn12"><a href="http://adaptechtask.test/post.html?post=${post.id}">View</a></button>
          <button class="btn10"><a href="editUser.html?userid=${post.id}">Update</a></button>
          <button class="btn7" onclick="deleteUser(${post.id}, this)">Delete</button>
          </td>
        </tr>`;
        });

        tableBody.innerHTML = tableRows.join('');

        const paginationLinks = document.querySelectorAll('#pagination li.page-item');
        paginationLinks.forEach((link) => {
            link.classList.remove('active');
        });

        const currentPageLink = document.querySelector(`#pagination li.page-item:nth-child(${page})`);
        currentPageLink.classList.add('active');

        updatePagination(totalPages, page);

    }).catch((error) => {
        console.error('Error retrieving user data:', error);
    });
}

function updatePagination(totalPages, currentPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    //Previous page
    const prevPageLink = document.createElement('li');
    prevPageLink.classList.add('page-item');
    const prevPageButton = document.createElement('a');
    prevPageButton.classList.add('page-link');
    prevPageButton.href = 'javascript:void(0);';
    prevPageButton.onclick = () => GetAll(currentPage - 1, 10);
    prevPageButton.innerHTML = '&laquo;';
    prevPageLink.appendChild(prevPageButton);
    pagination.appendChild(prevPageLink);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('li');
        pageLink.classList.add('page-item');
        const pageButton = document.createElement('a');
        pageButton.classList.add('page-link');
        pageButton.href = 'javascript:GetAll(' + i + ', 10)';
        pageButton.innerHTML = i;
        pageLink.appendChild(pageButton);
        pagination.appendChild(pageLink);

        if (i === currentPage) {
            pageLink.classList.add('active');
        }
    }

    //Next page
    const nextPageLink = document.createElement('li');
    nextPageLink.classList.add('page-item');
    const nextPageButton = document.createElement('a');
    nextPageButton.classList.add('page-link');
    nextPageButton.href = 'javascript:void(0);';
    nextPageButton.onclick = () => GetAll(currentPage + 1, 10);
    nextPageButton.innerHTML = '&raquo;';
    nextPageLink.appendChild(nextPageButton);
    pagination.appendChild(nextPageLink);
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    if (currentUrl.indexOf("editUser.html") > 0) {
        const userid = searchParams.get('userid');
        if (userid == null) {
            window.location.href = "users.html";
        } else {
            getuserdata(userid);
        }
    }

    if (currentUrl.indexOf("users.html") > 0) {
        const page = searchParams.get('page');
        if (page == null) {
            GetAll(1, 10);
        } else {
            GetAll(page, 10);
        }
    }
});