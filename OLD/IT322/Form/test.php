<!doctype html>
<html lang="en">
<head>
<title>Example Form</title>
<meta charset="utf-8">
<link href="formstyles.css" rel="stylesheet">
</head>
<body>
<div id="wrapperPost">
<div id="contentPost">
Thank you, <?php echo $_POST["firstname"]; ?>!<br>
Your contact information is:
<div id="infoPost">
 <?php echo $_POST["email"]; ?> <br />
 <?php echo $_POST["phone"]; ?>
</div>
 </div>
</div>
</body>
</html> 