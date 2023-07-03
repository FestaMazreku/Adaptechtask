<?php
session_start();
function IsLoggedIn()
{
    return isset($_SESSION['email']);
}
function IsLoggedInAsAdmin()
{
    return isset($_SESSION['isadmin']) && $_SESSION['isadmin'] == 1;
}
?>