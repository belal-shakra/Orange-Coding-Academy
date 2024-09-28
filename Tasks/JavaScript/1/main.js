console.log("##### Question 1 #####");

var first = 1000
var second = 500
console.log(first / second)

// ###########################
var first = 1000
var second = 500
console.log(first - second)




// ###########################

var first = 1000
var second = 500
console.log(first * second)





// ###########################

var first = 8
var second = 5
var third = 10
console.log((first+ second + third) / 3)





// ###########################

var price = 150
var discount = 0.3
console.log(price / (discount +1))


// ###########################

// var input = parseInt(prompt("Enter age older than 18 and less than 30"))
// if (input > 18 && input < 30)
//   console.log(true)
// else
//   console.log(false)





// ###########################
var first = 2
var second = 3
console.log(Math.pow(2,3))


// ###########################
var first = 10
var second = 4
console.log(first%second)




console.log("######################");





console.log("##### Question 2 #####");

console.log(typeof 100)
console.log(typeof 73.3)
console.log(typeof NaN)
console.log(typeof "Water")
console.log(typeof 9 != 11)
console.log("Orang" + "e")
console.log("Orang" - "e")
console.log("4" + "8")
console.log("4" - "8")
console.log("name" + 3)
console.log("name" - 3)
console.log("word" * 82)
console.log(1 + "hello")
console.log("hello" + 1)
console.log(true + 1)
console.log(true + "Word")
console.log(typeof Infinity)
console.log(1 == '1')
console.log(1 === '1')



console.log("######################");






console.log("##### Question 3 #####");

let string = "Welcome to Orange"

console.log(string.toUpperCase())
console.log(string.split(" ")[1].toUpperCase())
console.log("Hello from " + string.split(" ")[2])
console.log(string.toLowerCase())
console.log(string.length)
console.log('Welcome to "Orange"')
console.log(string + " Jordan")



let first_letter = "soso"
console.log(first_letter.replaceAll(first_letter[0], "*"))

console.log("######################");




console.log("##### Question 4 #####");


console.log("######## 1");
var first = ["Coding" , "Academy", "By", "Orange"]
first.push("Jordan")
console.log(first)

var second = ["Coding" , "Academy", "By", "Orange"]
second.slice(0, 2)
console.log(second)

var oca = ["Coding" , "Academy", "By", "Orange"]
oca.splice(2,0, "Welcome" , "To")
console.log(oca)

var oca = ["Coding" , "Academy", "By", "Orange"]
console.log(oca.slice(1,4))

var oca = ["Coding" , "Academy", "By", "Orange"]
console.log(oca.join(" "))

var oca = ["Coding" , "Academy", "By", "Orange"]
console.log(oca)

var oca = ["Coding" , "Academy", "By", "Orange"]
console.log([oca[0], oca[3]])




console.log("######## 2");

var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]


// a. Remove the last item from the vegetable array.
vegetables.pop()

// b. Remove the first item from the fruit array. 
fruit.shift()

// c. Find the index of "orange."
var f_index = fruit.indexOf("orange")

// d. Add that number to the end of the fruit array.
fruit.push(f_index)


// e. Find the length of the vegetable array.
let v_index = vegetables.length

// f. Add that number to the end of the vegetable array.
vegetables.push(v_index)


// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables);

// h. Remove 2 elements from your new array starting at index 4
// food = food.toSpliced(4,6)

// i. Reverse your array. 
food.reverse()

// j. Turn the array into a string.
food.toString()

console.log(food)

console.log("######################");







console.log("##### Question 5 #####");

// 1. Write a function that makes each word in a string an element of an array.
function ourJoin(string){
  let arr = []
  let word = ""

  for(let count = 0; count < string.length; count++){
    // console.log("iteration " + count)
    if(string[count] == " " || count == string.length){
      arr.push(word)
      word = ""
    }
    else {
      word += string[count]
    }
  }
  
  console.log(arr)
}

ourJoin("Belal Shakra")



//2. Write a function that converts the first seven digits of a mobile phone number to a hidden form.
function hide_number(number){
  return "*******"+number.slice(-4)
}

console.log(hide_number("0790761493"))
console.log("######################");
