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
          <a href="index.html" class="navigation">Home</a>
          <a href="aboutus.html" class="navigation">About Us</a>
          <a href="contactus.html" class="navigation">Contact Us</a>
          <a href="post.html" class="navigation">Posts</a>
          <a href="database/logout.php" class="navigation">Log Out</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
          
          <div class="btn-group">
          <button class="btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services </button>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="users.html">Table Users</a></li>
          <li><a class="dropdown-item" href="posts.html">Table Posts</a></li>
          <li><a class="dropdown-item" href="messages.html">Messages</a></li>
          </ul>
          </div>`;

        } else {
          navigation.innerHTML = `
          <a href="index.html" class="navigation">Home</a>
          <a href="aboutus.html" class="navigation">About Us</a>
          <a href="contactus.html" class="navigation">Contact Us</a>
          <a href="post.html" class="navigation">Posts</a>
          <a href="database/logout.php" class="navigation">Log Out</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
          `;
        }

        document.getElementById("contentLoggedIn").style.display = "block";
        document.getElementById("contentLoggedOut").style.display = "none";
      } else {
        navigation.innerHTML = `
        <a href="index.html" class="navigation">Home</a>
        <a href="aboutus.html" class="navigation">About Us</a>
        <a href="post.html" class="navigation">Posts</a>
        <a href="signup.html" class="navigation">Sign Up</a>
        <a href="login.html" class="navigation">Log In</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
        `;

        document.getElementById("contentLoggedIn").style.display = "none";
        document.getElementById("contentLoggedOut").style.display = "block";
      }
    })
    .catch(error => {
      console.error("Error fetching login status:", error);
    });
}