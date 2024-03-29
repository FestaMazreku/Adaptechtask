function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Sign Up
function SignUp() {
    var formdata = $('#signupform').serialize();
    $.ajax({
        type: "POST",
        url: 'database/signup.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            if (response === 'success') {
                alert("User is signed up!");
                window.location.href = "login.html";
            } else if (response === 'error:name') {
                alert("Name must contain only letters.");
            } else if (response === 'error:email') {
                alert("Wrong email format.");
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

//Log In
function LogIn() {
    var formdata = $('#loginform').serialize();
    $.ajax({
        type: "POST",
        url: 'database/login.php',
        data: formdata,
        success: function (response) {
            console.log(response);
            if (response === 'success') {
                window.location.href = "index.html";
            } else if (response.startsWith('error:empty')) {
                alert("User can't log in! Please enter email and password!");
            } else if (response.startsWith('error:nonexistent')) {
                alert("This user doesn't exist!");
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