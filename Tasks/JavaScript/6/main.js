console.log("###### JS Objects ######")


// 1. Create an object with properties name, age, and gender and print its values to the console.  

var person = {name: "Belal", age: 24, gender: "Male"}
for (key in person){
  console.log(`${key} : ${person[key]}`)
}



// 2. Create an object and add a new property to it using dot notation.
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

for (key in student){
  console.log(`${key} : ${student[key]}`)
}

// 3. Create an object and add a new property to it using bracket notation. 




// 4. Access the value of a property in an object using dot notation.  
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

console.log(student.name = "Belal")
console.log(student.major = "CS")
console.log(student.grade = "2.73")



// 5. Access the value of a property in an object using bracket notation.


var student = {}
student.name = "Ahmad"
console.log(student["name"])




// 6. Use a for-in loop to iterate through the properties of an object.  

var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

for (key in student){
  console.log(`${key} : ${student[key]}`)
}



// 7. Use the Object.keys() method to get an array of an object's properties.  
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

console.log(Object.keys(student))


// 8. Use the Object.values() method to get an array of an object's values.  
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

console.log(Object.values(student))



// 9. Use the Object.entries() method to get an array of key-value pairs for an object.
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

console.log(Object.entries(student))



// 10. Use the Object.assign() method to merge two objects. 
var student1 = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"


var student2 = {}
student.name = "Ahmad"
student.major = "CIS"
student.grade = "2.11"


Object.assign(student1, student2)
console.log(Object.values(student1))


// 11. Use the Object.freeze() method to prevent changes to an object.  
var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

Object.freeze(student)

try {
  student.name = "Ahmad"
  console.log(Object.values(student))
} catch (error) {
  console.log(error)  
}


// 12. Use the Object.seal() method to prevent changes to an object's properties but allows 
// changes to its values.

var student = {}
student.name = "Belal"
student.major = "CS"
student.grade = "2.73"

Object.seal(student)

// try to change properties
try {
  student.height = 1.72
  console.log(Object.values(student))
} catch (error) {
  console.log(error)  
}


// try to change value
try {
  student.name = "Ahmad"
  console.log(Object.values(student))

} catch (error) {
  console.log(error)  
}



console.log("########################")
