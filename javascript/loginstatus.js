function checkLoginStatus() {
  return $.ajax({
    url: 'database/check_login_status.php',
    type: 'GET',
    dataType: 'json',
  });
}

function redirectToLogin(loginStatus) {
  if (loginStatus.isLoggedIn) {
    window.location.href = 'index.html'; 
  } else {
    window.location.href = 'login.html';
  }
}

function handleLoginStatus(loginStatus) {
  if (!loginStatus.isLoggedIn) {
    redirectToLogin();
  }
}

function logout() {
  $.ajax({
    url: 'database/logout.php',
    type: 'POST',
    success: function () {
      redirectToLogin({ isLoggedIn: false }); 
    }
  });
}

window.addEventListener('DOMContentLoaded', function () {
  checkLoginStatus()
    .done(function (loginStatus) {
      handleLoginStatus(loginStatus);
    })
    .fail(function () {
      redirectToLogin();
    });
});