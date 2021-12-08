//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// var arr1 = [3, 9, 15, 4, 10]
// // // --> [30, 90, 150, 40, 100]
// //
// // create custom function with one paramater
// // nest map method within function
// const functionOne = (array) => { let multiplied = array.map(value => {
// // multiply each index by 10 and return value
//   return value * 10
// })
// return multiplied
// }
//
// console.log(functionOne(arr1));

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
// // create custom function with one paramater
// // nest filter method within function
// const onlyOdds = (array) => {
//   // use filter to iterate over array and locate odds
//   var iable = array.filter(value => value %2 === 1)
//   return iable
// }
// console.log(onlyOdds(arr2));

// array.filter((value)=> {whatever values I want back})
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// const onlyLetters = (array) => {
//   var iable = array.filter(value => typeof value === "string")
//   return iable
// }
// console.log(onlyLetters(comboArr).join(""));
// --> "nicework"

//Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// const onlyString = (array) => {
//   let iable = array.filter(value => value !== false && value !== null && value !== 0 && value !== " ")
//   return iable
// }
// console.log(onlyString(filterArrayValues));
// // --> [58, "abcd", true]

//Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// str= str.split("")
// // console.log(str);
// const noVowels = (array) => {
//   let iable = array.filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" )
//   return iable
// }
// console.log(noVowels(str).join(""));
// // --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
//
// let iable = arr1.concat(arr2)
// const noDups = (array) => {
//   let none = array.filter()
// }
// console.log(arr1);
// --> [3, 7, 10, 5, 4, 8, 2, 1]
