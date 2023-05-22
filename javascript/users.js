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
                    alert("User is deleted successfully!");
                }
                else {
                    alert("User is not deleted.");
                }
            },
            error: function (error) {
                console.log(error);
                alert("Error: User is not deleted! " + error);
            },
        });
    }
}

//update user
function updateUser(userid) {
    if (userid == null) {
        redirect
    }
    else {
        $.ajax({
            type: "GET",
            url: 'http://adaptechtask.test/database/users.php?user=' + userid,
            dataType: 'json'
        }).then(post => {
            $("#id").val(post.id);
            $("#name").val(post.name);
            $("#username").val(post.username);
            $("#age").val(post.age);
            $("#email").val(post.email);
            $("#phone").val(post.phone);
            $("#city").val(post.city);
        });
    }
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);

    const editinguser = searchParams.get('editUser.html');
    if (editinguser != null) {
        const userid = searchParams.get('userid');
        if (userid == null)
            redirect
        else
            updateUser(userid);
    }

    const users = searchParams.get('users.html');
    if (users != null) {
        const page = searchParams.get('page');
        if (page == null)
            GetAll(1, 20)
        else
            GetAll(page, 20)
    }
});

function GetAll(from, count) {
    $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/users.php?users',//from / to 
        dataType: 'json',
    }).then(userData => {
        userData.forEach(post => {
            const postDiv = document.createElement('tr');
            postDiv.innerHTML = `
                <tr id="row-${post.id}">
                    <td> <p class="table-element1">${post.id} </p> </td>
                    <td> <p class="table-element2">${post.name} </p> </td>
                    <td> <p class="table-element3">${post.username} </p> </td>
                    <td> <p class="table-element4">${post.age} </p> </td>
                    <td> <p class="table-element5">${post.email} </p> </td>
                    <td> <p class="table-element6">${post.phone} </p> </td>
                    <td> <p class="table-element7">${post.city} </p> </td>
                    <td>
                    <input type="button" value="Update" class="btn10" onclick="editUser.html?userid=${post.id}">
                    <input type="button" value="Delete" class="btn7" onclick="deleteUser(${post.id}, this)">
                    </td>
                </tr>`;
            $("table").append(postDiv);
        });
    });
}