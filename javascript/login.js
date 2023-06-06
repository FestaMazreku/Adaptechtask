function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $('#login-form').submit(function (e) {
        e.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'http://adaptechtask.test/database/login.php',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function (response) {
                if (response.success) {

                    window.location.href = 'posts.html';
                } else {

                    $('#login-error').text('Invalid username or password.');
                }
            },
            error: function () {
               
                $('#login-error').text('An error occurred while logging in.');
            }
        });
    });
});