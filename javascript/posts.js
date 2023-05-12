function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//update User
// function updateUser(id) {
// }

// delete User
// function deleteUser(id, button) {
// }

// add User
// function addUser(id) {
// }

function GetAll(from, count) {
    $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/posts.php?posts',
        dataType: 'json',
    }).then(data => {
        data.forEach(post => {
            const postDiv = document.createElement('tr');
            postDiv.innerHTML = `
                <tr id="row-${post.id}">
                    <td> <p class="table-element">${post.postsid} </p> </td>
                    <td> <p class="table-element">${post.title} </p> </td>
                    <td> <p class="table-element">${post.body} </p> </td>
                    <td>
                    <input type="button" value="Update" class="btn10" onclick="updateUser(${post.id})">    
                    <br>
                    <br>
                    <input type="button" value="Delete" class="btn7" onclick="deleteUser(${post.id}, this)">
                    </td>
                </tr>`;
            $("table").append(postDiv);
        });
    });
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const page = searchParams.get('page');
    if (page == null) {
        GetAll(1, 20);
    }
    else {
        GetAll(page, 20)
    }
});