function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//delete user
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

//get user data
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
            $("#username").val(post.username);
            $("#age").val(post.age);
            $("#email").val(post.email);
            $("#phone").val(post.phone);
            $("#city").val(post.city);
        });
    }
}

//update user
function updateUser() {
    var formdata = $('#edituserform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/users.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            var result = JSON.parse(response);
            alert(result.message);
            if (result.status == 1)
                window.location.href = "users.html";
        },
        error: function (error) {
            console.log(error);
            alert("Error: Failed to update the user." + error.responseText);
        }
    });
}

//add user
function addUser() {
    var formdata = $('#adduserform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/addUser.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            var result = JSON.parse(response);
            if (result.success) {
                alert("New user has been added successfully!");
                window.location.href = "users.html";
            } else {
                alert("New user is not added!");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: New user is not added! " + error.responseText);
        }
    });
}

let currentPage = 1;

function GetAll(page, perPage) {
    const from = (page - 1) * perPage;
    const to = page * perPage;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    history.pushState({}, '', `?page=${page}`);

    $.ajax({
        type: 'GET',
        url: 'http://adaptechtask.test/database/users.php?users',
        dataType: 'json',
    }).then((userData) => {
        const tableRows = userData.slice(from, to).map((post) => {
            return `<tr id="row-${post.id}">
          <td><p class="table-element1">${post.id}</p></td>
          <td><p class="table-element2">${post.name}</p></td>
          <td><p class="table-element3">${post.username}</p></td>
          <td><p class="table-element4">${post.age}</p></td>
          <td><p class="table-element5">${post.email}</p></td>
          <td><p class="table-element6">${post.phone}</p></td>
          <td><p class="table-element7">${post.city}</p></td>
          <td>
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

        const currentPageLink = document.querySelector(`#pagination li.page-item:nth-child(${page + 1})`);
        currentPageLink.classList.add('active');
    });
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