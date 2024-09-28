console.log("###### Question 1 ######")

// 1.Create a function that will display the smallest value in the array.

function findSmallest(nums){
  var min = nums[0]

  for(let i = 1; i < nums.length; ++i){
    if (nums[i] < min)
      min = nums[i]
  }

  return min
}
console.log(findSmallest([10, 2, 3, 45, 12,]))



// 2. Function that will return your string in Alphabetical order
function alphabeticalOrder(string){

  let orderedString = ""
  for(let i = 0; i < string.length; ++i){
    // if (string[i])
  }


  return orderedString
}
console.log(alphabeticalOrder("hello"))






// 3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all
// positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this:

function factorial(number){
  if(number === 1)
    return 1
  else
    return factorial(number-1) * number
}
console.log(factorial(8))



// 4. A Write a function that lets you know if a number is Even or Odd .
function oddOrEven(number = 0){
  if(number % 2 == 0)
    return "even"
  else
    return "odd"
}
console.log(oddOrEven(9))


// 5. Remove all Odd number(s) in an array and return a new array that contains Even numbers only.
function evenNum(nums){
  let newArr = []
  for(let i = 0; i < nums.length; ++i){
    if(oddOrEven(nums[i]) === "even")
      newArr.push(nums[i])
  }

  return newArr;
}
console.log(evenNum([1, 2, 3, 4, 5, 6,7,8,9]))




// 6. Create a function that takes in an array as an argument, checks the data type of each
// element, and removes any elements that are strings. The function should return the modified
// array.

function numbersOnly(arr){
  for(let i = 0; i < arr.length; ++i){
    if(typeof arr[i] === "string")
      arr.splice(i, 1)
  }

  return arr
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']))



// 7. Return the sum of a number going back to it's root. In other words, the function will work
// like this:
// Add Up(6);
// 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21

function addUp(number){
  if(number === 1)
    return 1
  else
    return addUp(number-1) + number
}
console.log(addUp(8))





// 8. Create a function that will accept an array and do the following:
// ● Get the lowest element
// ● Get the highest element
// ● Get the length of array
// ● Get the Average of all element;
// ● Store these criteria in a new array

// to find max num
function max(nums){
  var max = nums[0]

  for(let i = 1; i < nums.length; ++i){
    if (nums[i] > max)
      max = nums[i]
  }

  return max
}
// to find the avg of an integers
function avg(nums){
  let sum = 0;
  for (let i = 0; i < nums.length; ++i){
    sum += nums[i]
  }

  return sum/ nums.length
}

function minMaxLengthAverage(numbers){
  return [findSmallest(numbers), max(numbers), numbers.length, avg(numbers)]
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]))




// 9. Convert the given number to a Roman Numeral

function romanNumbers(num){
  
}


// 10. Return how many words was given
function countWords(string){
  let count = 0;
  for (let i = 0; i <= string.length; i++){
    if ((string[i] === " " && string[i-1] !== " ") || i == string.length)
      count++
  }

  return count
}
console.log(countWords("hello from CodingAcademy!"))



// 11.Create function to Multiply all elements in an array by it's length
function MultiplyByLength(nums){
  const SIZE = nums.length
  for (let i = 0; i <= SIZE; i++){
    nums[i] *= SIZE
  }

  return nums
}
console.log(MultiplyByLength([4,2,5]))




// 12
// 13


// 14. Return the index location of an element from a given array. First argument is the array
// you'd like to search and the second one is the element (either string/number) to look for.

function findIndex(stack, needle){
  for (let i = 0; i <= stack.length; i++){
    if (stack[i] === needle)
      return i+1
  }

  return -1
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'))



// 15.Create function to Return the absolute sum of all the array elements
function getAbsSum(nums){
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum += Math.abs(nums[i])
  }
  
  return sum
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]))





console.log("########################")