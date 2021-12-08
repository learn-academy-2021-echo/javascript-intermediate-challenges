// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// create a function called mult array, call .map() function to cycle through array and multiply by 10

const multiplier = arr1.map(value => {
    return value * 10
})

console.log(multiplier);

// // --> [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdds = (array) =>{
    return array.filter(value => value %2 !== 0)
}

console.log(onlyOdds(arr2));

// // --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
//create function that takes parameter array
//use .filter() function to evaluate if value @ index = typeof "string"

const onlyStrings = (array) => {
    return array.filter(value => typeof value === "string")
}

console.log(onlyStrings(comboArr).join(""))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

const newArr = (array) => {
    return array.filter((value, index) =>{
        return value !== false || typeof value === null
        //return return typeof value === "false"
    })
}

console.log(newArr(filterArrayValues))

// // --> [58, "abcd", true]
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]