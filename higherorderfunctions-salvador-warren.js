//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// taking in an array
// we will be creating a new array that multiplies the elements of the first array by 10
// we'll be using a .map function
//every element will be multiplied by 10
//the result of the .map function will be stored in a new array
// the new array will returned when function is called by console.log

var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]
const mult = (array) => {
  let newArray = array.map(value => {
    return value * 10
  })
  return newArray
}
console.log(mult(arr1));



//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//take an array
// using a .filter function
//we will filter out the even numbers by using % 2
// place the odds into a new array
// return the new array

var arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]

const odds = (array) => {
  let  newAr =  array.filter(value => {
    return value % 2 !== 0

  })
  return newAr
}
console.log(odds(arr2))


//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// take in an array
//using a .filter function
// we will filter out anything that's not a string type
//join new array that was created from .filter
// return new array.join
// invoke new function to show by using comboArr as an argument


var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

const word = (array) => {
  let newWord = array.filter(value =>{
    return typeof value === "string"

  })
  return newWord.join("")
}
console.log(word(comboArr))


//Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
//take in an array
//using filter function
//we will be filtering out false, null, 0, or blank
//return new array from filter


var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// --> [58, "abcd", true]

const newFun = (array) => {
  let newArr = array.filter(value => {
  return value !== false && value !== 0 && value !== null && value !== " "

  })
  return newArr
}
console.log(newFun(filterArrayValues))



//Create a function that takes in a string and returns a new string with all the vowels removed.
// take in a string
// change string to an array using .split
//use .filter function on new array
//we will filter out all vowels
// store the new array
// .join the array to a string

var str = "javascript is awesome"
// --> "jvscrpt s wsm"

const stFun = (string) => {
  let stringToArray = string.split("")
  let splitArray = stringToArray.filter(value => {
return value !== "a" && value !== "e" && value !=="i" && value !== "o" && value !== "u"

  })
  return splitArray.join("")
}
console.log(stFun(str))



//Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]

// take in two separate arrays
//create a new var w/ 2 arrays concatenated
//use .filter to filter out duplicate numbers
// log

const dupDel = (array1,array2) => {
  let conArr = array1.concat(array2)
  let noDup = conArr.filter((value,index) => {
    return conArr.indexOf(value) === index

  })
  return noDup
}
console.log(dupDel(arr1,arr2))
