function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//add user
function addUser() {
    var formdata = $('#adduserform').serialize();
    $.ajax({
      url: 'http://adaptechtask.test/database/addUser.php',
      type: "POST",
      data: formdata,
      success: function (response) {
        console.log(response);
        var result = JSON.parse(response);
        if (result.success) {
          alert("User is added successfully!");
          window.location.href = "users.html";
        } else {
          alert("User is not added.");
        }
      },
      error: function (error) {
        console.log(error);
        alert("Error: User is not added! " + error.responseText);
      }
    });
  }