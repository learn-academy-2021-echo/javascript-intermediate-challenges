// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

var Arr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]
for(var i=0; i<Arr1.length; i++) {
	//Let's take the constant factor as 3
	Arr1[i] = Arr1[i] * 10;
}
console.log(Arr1);

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
let evenOrOdd = arr2.map(value => {
    if(value % 2 === 0){
      return "even"
    } else if(value % 2 !== 0){
      return "odd"
    } else {
      return "not a number"
    }
  })
  console.log(evenOrOdd)



// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
const onlyLetters = (array) => {
    return array.filter(value => typeof value === "string")
}

console.log(onlyLetters(comboArr).join(""))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
const noFalse = (array) => {

    return array.filter(value => {
        newString = string.replace(/\s+/g,' ').trim();
        if(typeof value === "number"){
        return value 
    }else if (typeof value !== "false"){
        return value
    }else if (value ===  " "){
        return value    
    }else if (str === ' ')
        return str
})
}
console.log(noFalse(filterArrayValues))
// Output [58, ' ', 'abcd', true]


// STRETCH Challenges[]

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
newString = str.replace().trim();

console.log(newString)



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]