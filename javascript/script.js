function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function New() {
    var new_title = document.getElementById("new_title").value;
    console.log("Comment: " + new_title);
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: new_title,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log('Data: ' + JSON.stringify(json));
            alert("Article successfully added! Look at the console.");
        })
}

$(function () {
    var $user1 = $('#user1');
    var $nick1 = $('#nick1');
    var $user2 = $('#user2');
    var $nick2 = $('#nick2');
    var $user3 = $('#user3');
    var $nick3 = $('#nick3');
    var $user4 = $('#user4');
    var $nick4 = $('#nick4');

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        success: function (users) {
            $user1.append('<p>' + users[0].name + '</p>');
            $nick1.append('<p> @' + users[0].username + '</p>');
            $user2.append('<p>' + users[1].name + '</p>');
            $nick2.append('<p> @' + users[1].username + '</p>');
            $user3.append('<p>' + users[2].name + '</p>');
            $nick3.append('<p> @' + users[2].username + '</p>');
            $user4.append('<p>' + users[3].name + '</p>');
            $nick4.append('<p> @' + users[3].username + '</p>');
        }
    });

    var $title1 = $('#title1');
    var $post1 = $('#post1');
    var $title2 = $('#title2');
    var $post2 = $('#post2');
    var $title3 = $('#title3');
    var $post3 = $('#post3');

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function (posts) {
            $title1.append('<p>' + posts[0].title + '</p>');
            $post1.append('<p>' + posts[0].body + '</p>');
            $title2.append('<p>' + posts[10].title + '</p>');
            $post2.append('<p>' + posts[10].body + '</p>');
            $title3.append('<p>' + posts[20].title + '</p>');
            $post3.append('<p>' + posts[20].body + '</p>');
        }
    });

    var $email1 = $('#email1');
    var $comment1 = $('#comment1');
    var $email2 = $('#email2');
    var $comment2 = $('#comment2');
    var $email3 = $('#email3');
    var $comment3 = $('#comment3');
    var $email4 = $('#email4');
    var $comment4 = $('#comment4');
    var $email5 = $('#email5');
    var $comment5 = $('#comment5');
    var $email6 = $('#email6');
    var $comment6 = $('#comment6');
    var $email7 = $('#email7');
    var $comment7 = $('#comment7');

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/comments',
        success: function (comments) {
            $email1.append('<p>' + comments[0].email + '</p>');
            $comment1.append('<p>' + comments[0].body + '</p>');
            $email2.append('<p>' + comments[1].email + '</p>');
            $comment2.append('<p>' + comments[1].body + '</p>');
            $email3.append('<p>' + comments[50].email + '</p>');
            $comment3.append('<p>' + comments[50].body + '</p>');
            $email4.append('<p>' + comments[51].email + '</p>');
            $comment4.append('<p>' + comments[51].body + '</p>');
            $email5.append('<p>' + comments[100].email + '</p>');
            $comment5.append('<p>' + comments[100].body + '</p>');
            $email6.append('<p>' + comments[101].email + '</p>');
            $comment6.append('<p>' + comments[101].body + '</p>');
            $email7.append('<p>' + comments[150].email + '</p>');
            $comment7.append('<p>' + comments[151].body + '</p>');
        }
    });
});