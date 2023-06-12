<?php
$con = mysqli_connect("localhost", "root", "", "adaptechtask");
mysqli_select_db($con, 'adaptechtask');

$name = $_POST['name'];
$email = $_POST['email'];
$password_1 = $_POST['password_1'];
$password_2 = $_POST['password_2'];

//Kjo pjese na nevojitet te shikojme nese ekziston perdoruesi me email te njejte
$queryEmail = mysqli_query($connect, "SELECT email FROM users WHERE email='$email'");
$countEmail = @mysqli_num_rows($queryEmail);

$register = true;

//errori i pergjithshem
if(empty($name) && empty($email) && empty($password_1) && empty($password_2)){
   $errorGen = "Te gjitha fushat duhet te plotesohen!";
   $register = false;
}

//nese te pakten njera nga fushat permban nje vlere perkatese, na nevojitet ta validojme ate vlere
//nese fusha e emrit eshte e zbrazet
else {
   if(empty($name)){
    $errorName = "Fusha e emrit duhet te plotesohet!";
    $register = false;
}

//nese emri permban edhe karaktere tjera jo-shkronje
else {
    if(!preg_match("/^[a-zA-Z ]*$/", $name)){
        $errorName = "Emri duhet te permbaje vetem shkronja!";
        $register = false;
    }
}

//nese fusha e email adreses eshte e zbrazet
if(empty($email)) {
    $errorEmail = "Fusha e email adreses duhet te plotesohet!";
    $register = false;
}

//email adresa ka vlere, validoje ate
else {
    //nese formati i email adreses se shenuar nuk eshte i sakte
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errorEmail = "Formati i email adreses nuk eshte i sakte!";
        $register = false;
    }
    
    //nese ekziston nje perdorues qe e ka kete email adrese
    else if($countEmail != 0){
        $errorEmail = "Ky perdorues tashme ekziston!";
        $register = false;
    }
}

if(empty($password_1)){
    $errorPassword1 = "Fusha e fjalekalimit duhet te plotesohet!";
    $register = false;
}

//fjalekalimi ka vlere, validoje ate
else {
    $uppercase = preg_match("@[A-Z]@", $password_1);
    $lowercase = preg_match("@[a-z]@", $password_1);
    $number = preg_match("@[0-9]@", $password_1);

 //nese fjalekalimi eshte i dobet
//nese nuk plotesohet njeri nga kushtet e meposhtem atehere konsiderohet qe fjalekalimi eshte i dobet
 if(!$uppercase || !$lowercase || !$number || strlen($password_1) < 6){
    $errorPassword1 = "Fjalekalimi i dobet!";
    $errorPassTooltip = "Fjalekalimi duhet te permbaje te pakten 6 karaktere dhe duhet te perfshije te pakten nje shkronje te madhe dhe nje numer!";
    $register = false;
    }
}

if($password_1 != $password_2)
{
    $errorPassword2 ="Fusha confirm password duhet te jete e njejte me fushen password!";
    $register=false;
}

if($register == true){

    //tani jemi gati te insertojme perdoruesin e ri ne db
    //ne rastin tone do te bejme nje insertim
    $querysql = "INSERT INTO users
        (name, email, password)
        VALUES ('$name', '$email', '$password_1', 2);";

    //funksioni ne vazhdim perdoret per te ekzekutuar deklarata te shumta te sql query ne mysql
    if (mysqli_multi_query($connect, $querysql)){
        header("Location: contactus.html");

    }
    
    else {
        echo '<script type="text/javascript">';
        echo 'alert("Ka ndodhur nje gabim ne insertim!")';  
        echo '</script>';
      }
  }
}
?>