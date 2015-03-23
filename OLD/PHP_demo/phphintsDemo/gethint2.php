<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
 // Fill up array 
 
      $a[]="Alabama";
      $a[]="Alaska";
      $a[]="Alberta";
      $a[]="American Samoa";
      $a[]="Arizona";
      $a[]="Arkansas";
      $a[]="Armed Forces Americas";
      $a[]="Armed Forces Etc.";
      $a[]="Armed Forces Pacific";
      $a[]="British Columbia";
      $a[]="California";
      $a[]="Colorado";
      $a[]="Connecticut";
      $a[]="Delaware";
      $a[]="District of Columbia";
      $a[]="Federated States of Micronesia";
      $a[]="Florida";
      $a[]="Georgia";
      $a[]="Guam";
      $a[]="Hawaii";
      $a[]="Idaho";
      $a[]="Illinois";
      $a[]="Indiana";
      $a[]="Iowa";
      $a[]="Kansas";
      $a[]="Kentucky";
      $a[]="Louisiana";
      $a[]="Maine";
      $a[]="Manitoba";
      $a[]="Marshall Islands";
      $a[]="Maryland";
      $a[]="Massachusetts";
      $a[]="Michigan";
      $a[]="Minnesota";
      $a[]="Mississippi";
      $a[]="Missouri";
      $a[]="Montana";
      $a[]="Nebraska";
      $a[]="Nevada";
      $a[]="New Brunswick";
      $a[]="New Hampshire";
      $a[]="New Jersey";
      $a[]="New Mexico";
      $a[]="New York";
      $a[]="Newfoundland and Labrador";
      $a[]="North Carolina";
      $a[]="North Dakota";
      $a[]="Northern Mariana Islands";
      $a[]="Northwest Territories";
      $a[]="Nova Scotia";
      $a[]="Nunavut";
      $a[]="Ohio";
      $a[]="Oklahoma";
      $a[]="Ontario";
      $a[]="Oregon";
      $a[]="Palau";
      $a[]="Pennsylvania";
      $a[]="Prince Edward Island";
      $a[]="Puerto Rico";
      $a[]="Quebec";
      $a[]="Rhode Island";
      $a[]="Saskatchewan";
      $a[]="South Carolina";
      $a[]="South Dakota";
      $a[]="Tennessee";
      $a[]="Texas";
      $a[]="Utah";
      $a[]="Vermont";
      $a[]="Virgin Islands";
      $a[]="Virginia";
      $a[]="Washington";
      $a[]="West Virginia";
      $a[]="Wisconsin";
      $a[]="Wyoming";
      $a[]="Yukon";


 // get the q parameter from URL
$q=$_REQUEST["q"]; $hint="";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
  $q=strtolower($q); $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name,0,$len))) {
      if ($hint==="") {
        $hint=$name;
      } else {
        $hint .= ", $name";
      }
     }
  }
}

// Output "no suggestion" if no hint was found
// or output the correct values 
 echo $hint==="" ? "no suggestion" : $hint;
?> 
</body>
</html>