// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

const multiplier = arr1.map(value => {
    return value * 10
})

console.log(multiplier)



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

const onlyOdd = (array) => {
  return array.filter(value => value % 2 !== 0)
}

console.log(onlyOdd(arr2))
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
const onlyLetter = (array) => {
  return array.filter(value => typeof value === "string")
}
console.log(onlyLetter(comboArr).join(""))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
const gettingCertainStuff = (array) =>{
   let onlyStuffWeNeed = array.filter(value => {
   return  value !== 0 && value !== false && value !== " " && value !== null
 })
  return onlyStuffWeNeed
}
console.log(gettingCertainStuff(filterArrayValues))

// STRETCH Challenges
//
// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
const takeOutVowels = (string) =>{
   let changeToArray = string.split("")
   let takeOutAction = changeToArray.filter(value => {
   return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
 })
  return takeOutAction.join("")
}
console.log(takeOutVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

// const takeOutDupVal = (array1, array2) =>{
//    let combineArray = array1.concat(array2)
//    return combineArray.filter((value, index) => {
//    combineArray.indexOf(value) !== index
//
//   })

 const takeOutDupVal = (array1, array2) =>{
    let combineArray = array1.concat(array2)
    return combineArray.filter((value, index) => {
    combineArray.indexOf(value) !== index

  })

}
console.log(takeOutDupVal(arr1, arr2))
