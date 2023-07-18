function checkLoginStatus() {
    return $.ajax({
        url: 'http://adaptechtask.test/database/check_login_status.php',
        type: 'GET',
        dataType: 'json',
        async: false
    }).responseJSON;
  }
  
  function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function logout() {
    $.ajax({
        url: 'http://adaptechtask.test/database/logout.php',
        type: 'POST',
        success: function() {
            redirectToLogin();
        }
    });
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    var loginStatus = checkLoginStatus();
  
    if (!loginStatus.isLoggedIn) {
        redirectToLogin();
    }
  });