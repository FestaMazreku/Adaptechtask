function getId() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('id');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="color:rgb(55, 82, 233); font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].id} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getName() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('name');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].name} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getUsername() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('username');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].username} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getAge() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('age');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].age} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getEmail() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('email');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].email} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getPhone() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('phone');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].phone} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

function getCity() {
    fetch('http://adaptechtask.test/database/posts.php?posts')
        .then(response => response.json())
        .then(data => {
            const jsonDataDiv = document.getElementById('city');
            data.forEach(post => {
                $.ajax({
                    type: "GET",
                    url: 'http://adaptechtask.test/database/users.php?users',
                    dataType: 'json',
                }).then(userData => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `<p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"> ${userData[post.postsid - 1.].city} </p>`;
                    jsonDataDiv.appendChild(postDiv);
                    $("#comments").hide();
                });
            });
        });
}

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('id');
    if (post == null) {
        getId();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('name');
    if (post == null) {
        getName();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('username');
    if (post == null) {
        getUsername();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('age');
    if (post == null) {
        getAge();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('email');
    if (post == null) {
        getEmail();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('phone');
    if (post == null) {
        getPhone();
    }
    else {
        null;
    }
});

$(document).ready(function () {
    const currentUrl = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentUrl).search);
    const post = searchParams.get('city');
    if (post == null) {
        getCity();
    }
    else {
        null;
    }
});

$(document).ready(function(){
    $("#show").click(function(){
        $("#divPost").toggle(1000);
    });
});

// function validateForm(){
//     var id = document.getElementById("id").value;
//     var name = document.getElementById("name").value;
//     var username = document.getElementById("username").value;
//     var age = document.getElementById("age").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var city = document.getElementById("city").value;
// }
// if (name == ""){
//     alert("Name is required");
//     return ;
// }

// if (username == ""){
//     alert("Username is required");
//     return false;
// }

// if (age == ""){
//     alert("Age is required");
//     return false;
// }

// if (email == ""){
//     alert("Email is required");
//     return false;
// }

// if (phone == ""){
//     alert("Phone is required");
//     return false;
// }

// if (city == ""){
//     alert("City is required");
//     return false;
// }

// function showPost{
//     var peopleList;
//     if(localStorage.getItem("peopleList") == null){
//         peopleList = [];
//     }
//     else{
//         peopleList = JSON.parse(localStorage.getItem("peopleList"));
//     }
//     var html = "";

//     peopleList.forEach (function (element, index)){
//         html += "<tr>";
//         html += "<td>" + element.id + "</td>";
//         html += "<td>" + element.name + "</td>";
//         html += "<td>" + element.age + "</td>";
//         html += "<td>" + element.email + "</td>";
//         html += "<td>" + element.phone + "</td>";
//         html += "<td>" + element.city + "</td>";
        
//     }
// }