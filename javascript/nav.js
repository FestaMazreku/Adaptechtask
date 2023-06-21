function setupNavigation() {
    var navigation = document.getElementById("myTopnav");
  
    // Send a request to check the user's login status and role
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://adaptechtask.test/database/navigation.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var loggedIn = response.loggedIn;
          var isAdmin = response.isAdmin;
  
          // Show or hide the navigation bar based on the login status
          navigation.style.display = loggedIn ? "block" : "none";
  
          // Add the appropriate links based on the user's role
          if (loggedIn) {
            if (isAdmin) {
              navigation.innerHTML = `
                <a href="home.html">Home</a>
                <a href="aboutus.html">About Us</a>
                <a href="users.html">Table Users</a>
                <a href="posts.html">Table Posts</a>
                <a href="/database/logout.php">Log Out</a>
              `;
            } else {
              navigation.innerHTML = `
                <a href="home.html">Home</a>
                <a href="aboutus.html">About Us</a>
                <a href="contactus.html">Contact Us</a>
                <a href="post.html">Posts</a>
                <a href="/database/logout.php">Log Out</a>
              `;
            }
          } else {
            navigation.innerHTML = `
              <a href="home.html">Home</a>
              <a href="aboutus.html">About Us</a>
              <a href="signup.html">Sign Up</a>
              <a href="login.html">Log In</a>
            `;
          }
        } else {
          console.log("Failed to check login status");
        }
      }
    };
    xhr.send();
  }  