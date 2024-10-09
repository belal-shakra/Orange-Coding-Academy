<?php

echo "<br>######### Question 1 #########";
echo "
<pre>
1. Write a PHP script to:  

a. Convert the entered string to uppercase. 
b. Convert the entered string to lowercase. 
c. Make the first letter of the string uppercase. 
d. Make the first letter of each word capitalized
</pre>
";



echo "a- ". strtoupper("Belal Shakra") . "<br>";
echo "b- ". strtolower("Belal Shakra") . "<br>";
echo "c- ". ucfirst("belal shakra") . "<br>";
echo "d- ". ucwords("belal shakra") . "<br>";



echo "<br>######### Question 2 #########";
echo "
<pre>
2. Write a PHP script splitting the following numeric string to be a date format.  

Sample Output: '085119' 
Expected Output: 08:51:19
</pre>
";


echo rtrim(chunk_split("085119", 2, ":"), ":")."<br>";




echo "<br>######### Question 3 #########";
echo "
<pre>
3. Write a PHP script to check whether the sentence contains a specific word. 

Sample Output: ‘I am a full stack developer at orange coding academy’ 
Sample Word: ‘Orange’ 
Expected Output: ‘Word Found!’
</pre>
";

$str = "I am a full stack developer at orange coding academy";
if(strpos($str, "orange"))
  echo "Word Found!<br>";
else
  echo "Word Not Found!<br>";




echo "<br>######### Question 4 #########";
echo "
<pre>
4. Write a PHP script to extract the file name from the URL.

Sample Output: 'www.orange.com/index.php' 
Expected Output: 'index.php'
</pre>
";


$str = "www.orange.com/index.php";
$result = explode("/",$str);
echo $result[count($result) -1]."<br>";




echo "<br>######### Question 5 #########";
echo "
<pre>
5. Write a PHP script to extract the username from the following email address.  

Sample Output: 'info@orange.com' 
Expected Output: 'info' 
</pre>
";


$str = "info@orange.com";
$result = explode("@",$str);
echo $result[0]."<br>";



echo "<br>######### Question 6 #########";
echo "
<pre>
6. Write a PHP script to get the last three characters from the string.  

Sample Output: 'info@orange.com' 
Expected Output: 'com'
</pre>
";


$str = "info@orange.com";
$result = str_split($str, 3);
echo $result[count($result) -1]."<br>";




echo "<br>######### Question 7 #########";
echo "
<pre>
7. Write a PHP script to generate simple random passwords [do not use rand () function] from a 
given string.

Sample Output: '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz'
Expected Output: 254ABCc or h242sfeDAFEe32  -> random number
</pre>
";

// echo str_sh`."<br>";