function setupNavigation() {
  var navigation = document.getElementById("myTopnav");
  var loggedIn = false;
  var isAdmin = false;

  fetch("database/navigation.php")
    .then(response => response.json())
    .then(data => {
      loggedIn = data.loggedIn;
      isAdmin = data.isadmin;

      if (loggedIn) {
        if (isAdmin) {
          navigation.innerHTML = `
          <a href="home.html" class="navigation">Home</a>
          <a href="aboutus.html" class="navigation">About Us</a>
          <a href="post.html" class="navigation">Posts</a>
          <a href="users.html" class="navigation">Table Users</a>
          <a href="posts.html" class="navigation">Table Posts</a>
          <a href="messages.html" class="navigation">Messages</a>
          <a href="database/logout.php" class="navigation">Log Out</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
          `;

        } else {
          navigation.innerHTML = `
          <a href="home.html" class="navigation">Home</a>
          <a href="aboutus.html" class="navigation">About Us</a>
          <a href="contactus.html" class="navigation">Contact Us</a>
          <a href="post.html" class="navigation">Posts</a>
          <a href="database/logout.php" class="navigation">Log Out</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
          `;
        }

        const contentLoggedIn = document.getElementById("contentLoggedIn");
        const contentLoggedOut = document.getElementById("contentLoggedOut");

        if (contentLoggedIn && contentLoggedOut) {
          contentLoggedIn.style.display = "block";
          contentLoggedOut.style.display = "none";
        }

      } else {
        navigation.innerHTML = `
        <a href="home.html" class="navigation">Home</a>
        <a href="aboutus.html" class="navigation">About Us</a>
        <a href="post.html" class="navigation">Posts</a>
        <a href="signup.html" class="navigation">Sign Up</a>
        <a href="login.html" class="navigation">Log In</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
        `;
      }
    })

    .catch(error => {
      console.error("Error fetching login status:", error);
    });
}