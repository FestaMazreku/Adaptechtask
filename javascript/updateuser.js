function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// //update user

function updateUser(userid) {
    if (userid == null) {
        window.location.href = "users.html";
    }
    else {
        $.ajax({
            type: "GET",
            url: `http://adaptechtask.test/database/users.php?user=${post.id}`,
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