function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function SignUp() {
    var formdata = $('#signupform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/signup.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            if (response === 'success') {
                alert("User is signed up!");
                window.location.href = "login.html";
            } else if (response === 'error:name') {
                alert("Name must contain only letters.");
            } else if (response === 'error:email') {
                alert("Wrong email format or user already exists.");
            } else if (response === 'error:password') {
                alert("Wrong password or password confirmation mismatch.");
            } else if (response === 'error:password2') {
                alert("Weak password! It should contain at least 6 characters, including one uppercase letter and one number.");
            } else {
                alert("User can't sign up! Please fill all the fields.");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: User is not signed up! " + error.responseText);
        }
    });
}

function LogIn() {
    var formdata = $('#loginform').serialize();
    $.ajax({
        type: "POST",
        url: 'http://adaptechtask.test/database/login.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            if (response === 'success') {
                alert("User is logged in!");
                window.location.href = "contactus.html";
            } else if (response.startsWith('error:empty')) {
                alert("User can't log in! Please enter email and password!");
            } else if (response.startsWith('error:nonexistent')) {
                alert("This user does not exist!");
            } else if (response.startsWith('error:incorrect')) {
                alert("The password is incorrect!");
            } else {
                alert(response);
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: User is not logged in! " + error.responseText);
        }
    });
}

// document.addEventListener("DOMContentLoaded", function () {

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://adaptechtask.test/database/check_login_status.php", true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             var loggedIn = response.loggedIn;
//             var isAdmin = response.isAdmin;

//             updateNavigationBar(loggedIn, isAdmin);
//         }
//     };
//     xhr.send();
// });

// function updateNavigationBar(loggedIn, isAdmin) {
//     var navigationBar = document.getElementById("myTopnav");

//     if (loggedIn) {
//         // User is logged in

//         var links = `
//             <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Home </a>
//             <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> About Us </a>
//             <a href="contactus.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Contact Us </a>
//             <a href="post.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Posts </a>
//             <a href="/database/logout.php" style="color: #f0f0f0;"> Log Out </a>
//         `;

//         if (isAdmin) {
//             // User is an admin

//             links += `
//                 <a href="users.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Table Users </a>
//                 <a href="posts.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Table Posts </a>
//                 <a href="/database/logout.php" style="color: #f0f0f0;"> Log Out </a>
//             `;
//         }


//         navigationBar.innerHTML = links;
//     } else {
//         // User is not logged in

//         navigationBar.innerHTML = `
//             <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> Home </a>
//             <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400; padding-right: 16px"> About Us </a>
//             <a href="login.html" style="color: #f0f0f0;"> Log In </a>
//             <a href="signup.html" style="color: #f0f0f0;"> Sign Up </a>
//         `;
//     }
// }