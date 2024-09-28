console.log("###### IF statement #######")




// 1-Check if a variable named "age" is greater than 18 and display a message "You are an
// adult" if it is.

var age = 27
if (age > 18)
  console.log("You are adult")



// 2-Check if a variable named "score" is less than or equal to 50 and display a message "You
// failed the test" if it is.

var score = 27
if (score <= 50)
  console.log("Youfailed the test")



// 3- Check if a variable named "name" is equal to "John" and display a message "Hello, John" if it is.

var name = "John"
if (name === "John")
  console.log("Hello, John")


// 4-Check if a variable named "day" is not equal to "Saturday" and "Sunday" and display a
// message "It's a weekday" if it is.

var day = "Monday"
if (day === "Saturday" && day === "Sunday")
  console.log("It's a weekday")




// 5- Check if a variable named "num" is divisible by 2 and display a message "The number is
// even" if it is. 

var num = 12
if (num % 2 === 0)
  console.log("The number is even")




// 6- Check if a variable named "char" is a letter and display a message "It's a letter" if it is.

var char = "A"
if (char.length === 1)
  console.log("It's a letter")




// 7-Check if a variable named "list" is an array and display a message "It's an array" if it is.

var list = ["A", "Soso", 3]
if (Array.isArray(list))
  console.log("It's an array")



// 8-Check if a variable named "x" is a positive number and display a message "x is a positive
// number"

var x = 7
if (x > 0)
  console.log("x is a positive number")




// 9-Check if a variable named "y" is a negative number and display a message "y is a negative
// number" if it is.

var y = -7
if (y < 0)
  console.log("y is a negative number")



// 10-Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3"
// if it is.


var z = 9
if (z % 3 === 0)
  console.log("z is a multiple of 3")



// 11- Check if a variable named "gpa" is greater than or equal to 3.0 and display a message
// "Congratulations, you have a good GPA!" if it is.


var gpa = 3.7
if (gpa > 3.0)
  console.log("Congratulations, you have a good GPA!")




// 12- Check if a variable named "password" is at least 8 characters long and display a message
// "Your password is strong" if it is.

var password = 3.7
if (password.length >= 8)
  console.log("Your password is strong")




// 13-Check if a variable named "age" is between 18 and 65 (inclusive) and display a message
// "You are of working age" if it is.

var age = 29
if (age >= 18 && age <= 65)
  console.log("You are of working age")





// 14- Check if a variable named "color" is either "red", "green", or "blue" and display a message
// "color is a primary color" if it is.


var color = 29
if (color === "red" || color === "green" || color === "blue")
  console.log("color is a primary color")




// 15-using Function `isNumber()` checks if input variable is a number by using isNaN() in-built
// JavaScript function.


function isNumber(num){
  if (!isNaN(num))
    console.log(`${num} is a number.`)

}




console.log("###########################")
