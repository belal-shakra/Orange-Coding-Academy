<?php

echo "<br>######### Question 1 #########";
echo '
<pre>
1. Write a script to generate the following paragraph

"The memory of that scene for me is like a frame of film forever frozen at that moment: the red carpet, 
the green lawn, the white house, the leaden sky. The new president and his first lady. - Richard M. 
Nixon" 
The words "red", "green" and "white" should come from $colors array. 
</pre>
';

$colors = ["red", "green", "white"];

echo <<<EOD
  The memory of that scene for me is like a frame of film forever frozen at that moment: the $colors[0] carpet, 
  the $colors[1] lawn, the $colors[2] house, the leaden sky. The new president and his first lady. - Richard M. 
  Nixon
EOD;




echo "<br>######### Question 2 #########";
echo '
<pre>
2. $colors = array("white", "green", "red")
Write a PHP script that will display the colors as unordered list :
Expected Output:
● green 
● red 
● white
</pre>
';

$colors = array("white", "green", "red")
?>

<ul>
  <?php foreach($colors as $color): ?>
    <li><?php echo $color; ?></li>
  <?php endforeach ?>
</ul>


<?php


echo "<br>######### Question 3 #########";
echo '
<pre>
3. $cities= array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels", 
"Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", 
"Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", 
"Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid" );  

Create a PHP script to displays the capital and country name from the above array $cities. Sort the list 
by the capital of the country.  
Expected Output: 
The capital of Netherlands is Amsterdam  
The capital of Greece is Athens  
The capital of Germany is Berlin 
</pre>
';

$cities= array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels", 
"Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", 
"Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", 
"Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid" );  

asort($cities);

?>

<?php foreach($cities as $country => $capital): ?>
    <p>
      <?php echo "The capital of $country is $capital" ?></p>
<?php endforeach ?>



<?php

echo "<br>######### Question 4 #########";
echo "
<pre>
4. color = array (4 => 'white', 6 => 'green', 11=> 'red'); 

Write a PHP script to display the first element of the above array.  
Expected Output:  white
</pre>
";

$color = array (4 => 'white', 6 => 'green', 11=> 'red');
echo $color[4]."<br>";





echo "<br>######### Question 5 #########";
echo "
<pre>
5. Write a PHP script that inserts a specific new item in an array in any position. 

Sample Input: 
Array 1 2 3 4 5
Location: 4 
New Item: 
Expected Output: 1 2 3 $ 4 5
</pre>
";

$nums = [1, 2, 3, 4, 5];
$first =  "$";
$second = "";
$pos = 4;
$length = count($nums);


for ($i=$pos; $i <= $length; $i++) {
  if ($i == $length){
    $nums[$i-1] = $second-1;
    array_push($nums, $first);
  }



  $second = $nums[$i-1]; //1- 4  // 2- 5
  $nums[$i-1] = $first; // 1- $  // 2- 5
  $first = @$nums[@$i]; // 1- 5 // 2- null
}

var_dump($nums);





echo "<br>######### Question 6 #########";
echo "
<pre>
6. Write a PHP script to sort the following associative array depending on the key value [asc] :  
 
Sample Input:  
 
fruits = array('d' => 'lemon', 'a' => 'orange', 'b' => 'banana', 'c' => 'apple'); 
 
Expected Output: 
 
c = apple 
b = banana 
d = lemon 
a = orange
</pre>
";

$fruits = array('d' => 'lemon', 'a' => 'orange', 'b' => 'banana', 'c' => 'apple');
asort($fruits);
var_dump($fruits);




echo "<br>######### Question 7 #########";
echo "
<pre>
7. Write a PHP script to calculate and display the average temperature for the recorded reads, also the 
script should display the list of the five lowest and the five highest temperatures  

Sample Input:  78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 
65, 64, 68, 73, 75, 79, 73 

Expected Output: 
Average Temperature is: 70.6  
List of seven lowest temperatures: 60, 62, 63, 63, 64,  
List of seven highest temperatures: 76, 78, 79, 81, 85,
</pre>
";

