function checkLoginStatus() {
  return $.ajax({
    url: 'database/check_login_status.php',
    type: 'GET',
    dataType: 'json',
  });
}

function redirectToLogin() {
  window.location.href = 'login.html';
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
      redirectToLogin();
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