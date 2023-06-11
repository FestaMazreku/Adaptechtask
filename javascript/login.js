function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function signUp() {
    // Retrieve form data
    var formData = new FormData(document.getElementById("signupform"));

    // Make an Ajax request to the PHP file for sign-up
    fetch("signup.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from PHP (e.g., display success or error messages)
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function logIn() {
    // Retrieve form data
    var formData = new FormData(document.getElementById("signupform"));

    // Make an Ajax request to the PHP file for login
    fetch("login.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from PHP (e.g., redirect to a new page or display an error message)
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}