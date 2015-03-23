<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$myGlobal = 1;
function myfunction(){
	$myNumber = 2;
	echo "<h2>myGlobal inside the function is $myGlobal</h2>";
	echo "<h2>myNumber inside the function is $myNumber</h2>";
}
myfunction();
	echo "<h2>myGlobal inside the function is $myGlobal<h2>";
	echo "<h2>myNumber inside the function is $myNumber</h2>";
?>
</body>
</html>