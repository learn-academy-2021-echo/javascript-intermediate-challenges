//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10
// var arr1 = [3, 9, 15, 4, 10]
// const multTen = (array) => {
//   return array.map(value => value * 10)
// }
// console.log(multTen(arr1));

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// const oddNumbers = (array) => {
//   return array.filter(value => value % 2 !== 0)
// }
// console.log(oddNumbers(arr2));

//3
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// const letters = comboArr.filter(value => {
//   return typeof value === "string"
// })
// console.log(letters.join(""));


//4
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// const newArray = filterArrayValues.filter(value => {
//   if(value !== false || value !== null || value !== " " ||
//    value.lenght > 0)
//   return value
// })
// console.log(newArray);

// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
//
// const noVals =(sentance) => {
// let newArray = sentance.split("")
// let resultArray = newArray.filter(value => {
// return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
//
// })
// console.log(resultArray.join(""))
// }
// console.log(noVals(str));

// --> "jvscrpt s wsm"



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

let arr3 = arr1.concat(arr2)
let filter = arr3.filter(value =>{
  return value !==3 && value !==4 && value !== 5

})
console.log(arr3)


//
//
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
