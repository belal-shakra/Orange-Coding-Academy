console.log("###### Array ######")

// 1.Create an array of numbers and use the forEach() method to print each element to the console.
var nums = [1, 2, 3, 4, 5]
nums.forEach(element => {
  console.log(element)
});



// 2.Use the map() method to square each element in an array of numbers and return a new array.



// 3.Use the filter() method to create a new array containing only even numbers from an original array.


// 4.Use the reduce() method to sum up all elements in an array of numbers.



// 5.Use the sort() method to sort an array of strings alphabetically. 

var words =  ["apple", "banana", "orange", "cherry"]
console.log(words.sort())



// 6.Use the reverse() method to reverse the order of elements in an array.
var words =  ["apple", "banana", "orange", "cherry"]
console.log(words.reverse())


// 7.Use the concat() method to combine two arrays into a single array.
var nums1 = [1, 2, 3]
var nums2 = [4, 5, 6];
console.log(nums1.concat(nums2))


// 8.Use the slice() method to extract a portion of an array.
console.log( [1, 2, 3, 4, 5, 6].slice(2, 4))


// 9.Use the splice() method to add and remove elements from an array.
console.log( [1, 2, 3, 4, 5].splice(3))


// 10.Use the indexOf() method to find the index of a specific element in an array.
console.log( [1, 2, 3, 4, 5].indexOf(3))


// 11.Use the join() method to convert an array to a string.
console.log( [1, 2, 3, 4, 5].join(", "))



// 12.Use the split() method to convert a string to an array. 
console.log("1,3,4,7,2".split(", "))





// 13.Use the length property to find the number of elements in an array.
console.log( [1, 2, 3, 4, 5].length)



// 14.Use the for...of loop to iterate through an array.
for (const element of  [1, 2, 3, 4, 5]) {
  console.log(element)
}


// 15.Use the for...in loop to iterate through the indexes of an array.
for (const key in [1, 2, 3, 4, 5]) {
  console.log(key)
}


// 16.Use the Array.isArray() method to check if an object is an array.
if ( Array.isArray([1, 2, 3, 4, 5]))
  console.log("is an array")


// 17.Use the Array.from() method to convert an array-like object to an array.
console.log( Array.from({0: "a", 1: "b", 2: "c", length: 3})) 


// 18.Use the Array.of() method to create an array with a set of elements.
console.log(Array.of(1, 2, 3))


// 19.Use the Array.prototype.fill() method to fill an array with a specific value.
console.log([1, 2, 3, 4, 5].fill( 3, 2))



// 20. Use the Array.prototype.copyWithin() method to copy a sequence of elements within an
// array. 

console.log([1, 2, 3, 4, 5].copyWithin(1, 3))




console.log("###################")