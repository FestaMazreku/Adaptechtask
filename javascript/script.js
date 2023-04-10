function New() {
    var new_title = document.getElementById("new_title").value;
    console.log("Titulli i ri: " + new_title);
    fetch('https://jsonplaceholder.typicode.com/posts', {
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
            console.log('Te dhenat: ' + JSON.stringify(json));
            alert("Artikulli i shtua me sukses! Shikoni në console.");
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
        success: function (user) {
            $user1.append('<p>' + user[0].name + '</p>');
            $nick1.append('<p> @' + user[0].username + '</p>');
            $user2.append('<p>' + user[1].name + '</p>');
            $nick2.append('<p> @' + user[1].username + '</p>');
            $user3.append('<p>' + user[2].name + '</p>');
            $nick3.append('<p> @' + user[2].username + '</p>');
            $user4.append('<p>' + user[3].name + '</p>');
            $nick4.append('<p> @' + user[3].username + '</p>');
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
        success: function (post) {
            $title1.append('<p>' + post[0].title + '</p>');
            $post1.append('<p>' + post[0].body + '</p>');
            $title2.append('<p>' + post[10].title + '</p>');
            $post2.append('<p>' + post[10].body + '</p>');
            $title3.append('<p>' + post[20].title + '</p>');
            $post3.append('<p>' + post[20].body + '</p>');
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

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/comments',
        success: function (comment) {
            $email1.append('<p>' + comment[0].email + '</p>');
            $comment1.append('<p>' + comment[0].body + '</p>');
            $email2.append('<p>' + comment[1].email + '</p>');
            $comment2.append('<p>' + comment[1].body + '</p>');
            $email3.append('<p>' + comment[50].email + '</p>');
            $comment3.append('<p>' + comment[50].body + '</p>');
            $email4.append('<p>' + comment[51].email + '</p>');
            $comment4.append('<p>' + comment[51].body + '</p>');
            $email5.append('<p>' + comment[100].email + '</p>');
            $comment5.append('<p>' + comment[100].body + '</p>');
            $email6.append('<p>' + comment[101].email + '</p>');
            $comment6.append('<p>' + comment[101].body + '</p>');
        }
    });
});