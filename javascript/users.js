function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//update User
function updateUser(id) {

    const updatedName = prompt('Enter the updated name:');
    const updatedUsername = prompt('Enter the updated username:');
    const updatedAge = prompt('Enter the updated age:');
    const updatedEmail = prompt('Enter the updated email:');
    const updatedPhone = prompt('Enter the updated phone number:');
    const updatedCity = prompt('Enter the updated city:');

    const updatedUserData = {
        name: updatedName,
        username: updatedUsername,
        age: updatedAge,
        email: updatedEmail,
        phone: updatedPhone,
        city: updatedCity
    };

    $.ajax({
        url: `http://adaptechtask.test/database/users.php?user=` + id,
        type: 'POST',
        data: updatedUserData,
        success: function (response) {
            alert('User information has been updated successfully!');
        },
        error: function (xhr, status, error) {
            console.error('Error updating user:', error);
        }
    });
}

// <?php
// // Check if the request is a POST request
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   // Retrieve the user ID from the query string
//   $id = $_GET['user'];

//   // Retrieve the updated user data from the request body
//   $updatedUserData = $_POST;

//   // TODO: Implement database update logic here
//   // Update the user with the specified ID using the $updatedUserData

//   // Return a success response
//   echo json_encode(['message' => 'User information has been updated successfully!']);
// } else {
//   // Return an error response for unsupported request method
//   http_response_code(405); // Method Not Allowed
//   echo json_encode(['error' => 'Invalid request method']);
// }
// ?>


// delete User
function deleteUser(id, button) {
    $.ajax({
        url: `http://adaptechtask.test/database/users.php?user=` + id,
        type: 'DELETE',
        success: function (response) {
            alert('The user has been deleted!');
            $(button).closest('tr').remove();
        },
        error: function (xhr, status, error) {
            console.error('Error deleting user:', error);
        }
    });
}

// function deleteUser(id) {
//     $.ajax({
//         url: `http://adaptechtask.test/database/users.php?user=${id}`,
//         type: 'DELETE',
//         success: function (response) {
//             alert('The user has been deleted!');
//             // Perform any additional actions or refresh the user list
//         },
//         error: function (xhr, status, error) {
//             console.error('Error deleting user:', error);
//         }
//     });
// }

//"row-id-"id bul emsil 

// add User
function addUser() {

}

// function GetAll(from, count) {
//     $.ajax({
//         type: "GET",
//         url: 'http://adaptechtask.test/database/users.php?users',
//         dataType: 'json',
//     }).then(userData => {
//         userData.forEach(post => {
//             const postDiv = document.createElement('tr');
//             postDiv.innerHTML = `
//           <td> <p class="table-element">${post.id} </p> </td>
//           <td> <p class="table-element">${post.name} </p> </td>
//           <td> <p class="table-element">${post.username} </p> </td>
//           <td> <p class="table-element">${post.age} </p> </td>
//           <td> <p class="table-element">${post.email} </p> </td>
//           <td> <p class="table-element">${post.phone} </p> </td>
//           <td> <p class="table-element">${post.city} </p> </td>
//           <td>
//             <input type="button" value="Update" onclick="updateUser()">
//             <input type="button" value="Delete" onclick="deleteUser(${post.id})">
//           </td>
//           <td><input type="button" value="Add" onclick="addUser()"></input></td>`;
//             $("table").append(postDiv);
//         });
//     });
// }

function GetAll(from, count) {
    $.ajax({
        type: "GET",
        url: 'http://adaptechtask.test/database/users.php?users',
        dataType: 'json',
    }).then(userData => {
        userData.forEach(post => {
            const postDiv = document.createElement('tr');
            postDiv.innerHTML = `
          <td> <p class="table-element">${post.id} </p> </td>
          <td> <p class="table-element">${post.name} </p> </td>
          <td> <p class="table-element">${post.username} </p> </td>
          <td> <p class="table-element">${post.age} </p> </td>
          <td> <p class="table-element">${post.email} </p> </td>
          <td> <p class="table-element">${post.phone} </p> </td>
          <td> <p class="table-element">${post.city} </p> </td>
          <td>
            <input type="button" value="Update" onclick="updateUser(${post.id})">
            <input type="button" value="Delete" onclick="deleteUser(${post.id}, this)">
          </td>
          <td><input type="button" value="Add" onclick="addUser(${post.id})"></input></td>`;
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

$(document).ready(function () {
    $("#show").click(function () {
        $("#divPost").toggle(1000);
    });
});