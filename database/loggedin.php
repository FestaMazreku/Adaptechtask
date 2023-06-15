<?php //startimi i sesionit
session_start();

//nese perdoruesi nuk eshte kycur, atehere paraqitja kete pamje te kesaj web faqeje
if(!isset($_SESSION['email'])) {

}

else {
	//nese perdoruesi eshte i kycur, atehere ridrejtoje ne faqen baze pas kycjes
	header("Location: contactus.html");
}
?>