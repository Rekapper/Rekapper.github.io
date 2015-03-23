<!doctype html>
<html lang="en">
<head>
<title>Ellensburg Fish House | Reservation Made</title>
<meta charset="utf-8">
<link href="fish.css" rel="stylesheet" type="text/css">
<link rel="icon" href="favicon.ico">
</head>
<body>
<div class="bodyphp">
	<div class="header">Ellensburg Fish House
		<div class="nav">
		<a href="home.html">Home</a>&nbsp;&nbsp;|&nbsp;
		<a href="about.html">About</a>&nbsp;&nbsp;|&nbsp;
		<a href="menu.html">Menu</a>&nbsp;&nbsp;|&nbsp;
		<a href="reservations.html">Reservations</a>&nbsp;&nbsp;|&nbsp;
		<a href="credits.html">Credits</a>
		</div>
	</div>
<div class="content">
Thank you, <?php echo $_POST["firstname"];?>!<br>
Your reservation request for <?php echo $_POST["guests"];?> guests on <?php echo $_POST["date"];?> at <?php echo $_POST["time"];?>has been received. A staff memeber will contact you within 24 hours to confirm.
</div>
<footer>
	<div class="social"><a href="http://www.facebook.com"><img src="facebook-pd.png" alt="Facebook"></a></div>
	<div class="social"><a href="http://www.twitter.com"><img src="twitter-pd.png" alt="Twitter"></a></div>
	<div class="social"><a href="http://www.google.com"><img src="google-pd.png" alt="Google+"></a></div>
<div class="notice"><hr>NOTICE: This web site is being used for educational purposes only, and is the sole responsibility of its creator. Any reproduction of copyrighted material complies with the fair use provision established in Section 107 of the U.S. Copyright Act.<br>
For questions regarding this web site, please contact: <a href="mailto:vogtp@cwu.edu">vogtp@cwu.edu</a></div>
</footer>
</div>
</body>
</html>