function preventBack() { window.history.forward() };
setTimeout("preventBack(), 0");
window.onunload = function () { null; }

function checkLoginStatus() {
  
  return $.ajax({
    url: 'database/check_login_status.php',
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
    url: 'database/logout.php',
    type: 'POST',
    success: function () {
      redirectToLogin();
    }
  });
}

window.addEventListener('DOMContentLoaded', function () {
  var loginStatus = checkLoginStatus();

  if (!loginStatus.isLoggedIn) {
    redirectToLogin();
  }
});