console.log("###### JS Loops ######")

// 1. Use a for loop to print numbers from 1 to 10 using for.  

for(let i = 0; i < 10; ++i){
  console.log(i+1)
}




// 2. Use a while loop to print numbers from 1 to 10 using while. 
var i = 0
while(i < 10){
  console.log(i++)
}


// 3. Use a for loop to iterate through an array and print each element.
var nums = [1, 2, 3, 4, 5]
for(let i = 0; i < nums.length; ++i){
  console.log(nums[i])
}


// 4. Use a for loop to print even numbers from 0 to 10. 
for(let i = 0; i < 10; ++i){
  if(i+1 % 2 == 0)
    console.log(i+1)
}


// 5. Use a for loop to print the sum of numbers from 1 to 10.  
var sum = 0;
for(let i = 0; i < 10; ++i){
  sum += i+1
}
console.log(sum)


// 6. Use a for loop to find the largest number in an array. 

var max = 1
for(let i = 2; i <= 10; ++i){
  if (i > max)
    max = i
}

console.log(max)




// 7. Use a for loop to find the smallest number in an array.

var min = 1
for(let i = 2; i <= 10; ++i){
  if (i < min)
    min = i
}

console.log(min)



// 11. Use a for loop to find the average of numbers in an array 
var sum = 0;
var arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; ++i){
  sum += arr[i]
}
console.log(sum/arr.length)






// 12. Use a for loop to find the factorial of a number. 
var fact = 1;
for(let i = 1; i < 5; ++i){
  fact *= i
}
console.log(fact)


// 13. Use a for loop to print the Fibonacci sequence up to a given number. 



// 14. Use a for loop to print the prime numbers up to a given number. 



// 15. Use a for loop to print a multiplication table for a given number .
for(let i = 0; i < 10; ++i){
  console.log((i+1) *5)
}



// 16. Use a for loop to print the elements of a 2D array . 

var nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for(let i = 0; i < nums.length; ++i){
  for(let k = 0; k < nums[i].length; ++k){
    console.log(nums[i][k])
  }
}

// 17. Use a for loop to print the elements of an array in reverse order.  
var nums = [1, 2, 3];

for(let i = nums.length; i >= 0; --i){
  console.log(nums[i])
}



// 18. Use a for loop to print the elements of an array in a specific range. 
var nums = [1, 2, 3, 4, 5];
var start = 2
var end = 4

for(let i = start; i <= end; ++i){
  console.log(nums[i])
}



// 19. Use a for loop to print the elements of an array with a specific step. 
var nums = [1, 2, 3, 4, 5];
var step = 2

for(let i = 0; i <= nums.length; i = i + step){
  console.log(nums[i])
}



// 20. Use a for loop to check if a number is in an array. 
var nums = [1, 2, 3, 4, 5];
var find = 2

for(let i = 0; i <= nums.length; i++){
  if(nums[i] == find)
    console.log(nums[i] + " exists")
}


// 21. Use a for loop to find the frequency of a number in an array.
var nums =  [1, 2, 1, 3, 2, 1];
var find = 1
var freq = 0

for(let i = 0; i <= nums.length; i++){
  if(nums[i] == find)
    freq++
}
console.log(freq)


console.log("#####################")