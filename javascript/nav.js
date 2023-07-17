function setupNavigation() {
  var navigation = document.getElementById("myTopnav");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://adaptechtask.test/database/navigation.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var loggedIn = response.loggedIn;
        var isadmin = response.isadmin;

        if (loggedIn) {
          if (isadmin == 1) {
            navigation.innerHTML = `
            <a href="home.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Home</a>
            <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">About Us</a>
            <a href="post.html"
            style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Posts</a>
            <a href="users.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Table Users</a>
            <a href="posts.html"
            style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Table Posts</a>
            <a href="messages.html"
            style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Messages</a>
            <a href="/database/logout.php" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Log Out</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
              `;

            //Content for logged-in users
            document.getElementById("contentLoggedIn").style.display = "block";
            document.getElementById("contentLoggedOut").style.display = "none";
          } else {
            navigation.innerHTML = `
            <a href="home.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Home</a>
            <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">About Us</a>
            <a href="contactus.html"
            style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Contact Us</a>
            <a href="post.html"
            style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Posts</a>
            <a href="/database/logout.php" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
            padding-right: 16px">Log Out</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i> </a>
              `;

            document.getElementById("contentLoggedIn").style.display = "block";
            document.getElementById("contentLoggedOut").style.display = "none";
          }
        } else {
          navigation.innerHTML = `
          <a href="home.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
          padding-right: 16px">Home</a>
          <a href="#" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
          padding-right: 16px">About Us</a>
          <a href="post.html"
          style="color: #f0f0f0; font-size: 16px; font-weight: 400;
          padding-right: 16px">Posts</a>
          <a href="signup.html" style="color: #f0f0f0; font-size: 16px; font-weight: 400;
          padding-right: 16px">Sign Up</a>
          <a href="login.html"
          style="color: #f0f0f0; font-size: 16px; font-weight: 400;
          padding-right: 16px">Log In</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i> </a>
            `;

          //Content for logged-out users
          document.getElementById("contentLoggedIn").style.display = "none";
          document.getElementById("contentLoggedOut").style.display = "block";
        }
      } else {
        window.location.href = "login.html";
      }
    }
  };
  xhr.send();
}
