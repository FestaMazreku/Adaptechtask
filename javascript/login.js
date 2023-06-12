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
            var result = JSON.parse(response);
            if (result.success) {
                alert("User is signed up successfully!");
                window.location.href = "contactus.html";
            } else {
                alert("User is not signed up!");
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
            if (response.trim() === 'success') {
                alert("User is logged in!");
                window.location.href = "contactus.html";
            } else {
                alert("User is not logged in!");
            }
        },
        error: function (error) {
            console.log(error);
            alert("Error: User is not logged in! " + error.responseText);
        }
    });
}