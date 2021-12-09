// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

var arr1 = [3, 9, 15, 4, 10]

const multiplied = arr1.map(value => {
  return  value * 10
  })
console.log(multiplied)
// // --> [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
  return array.filter(value => {
    return value % 2 !== 0
  })
}
console.log(onlyOdd(arr2));
// // --> [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const lettersOnly = (array) => {
  let lettersArray =  array.filter(value => {
  return typeof value === "string"

  })
return lettersArray.join('')
}
console.log(lettersOnly(comboArr))

// // --> "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
 var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

const noNothing = (array) => {
  let result = array.filter(value => {
  return value !== null && value !== false && value !== 0 && value !== " "
  })
  return result
}
console.log(noNothing(filterArrayValues));

// // --> [58, "abcd", true]
// STRETCH Challenges
//
// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"

const noVowels = (string) => {
  let lettersArray = string.split('')
  let conArr = lettersArray.filter(value => {
    return value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u'
  })
  return conArr.join('')
}
console.log(noVowels(str));
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

const noDups = (array1, array2) => {

let bothArr = [3, 7, 10, 5, 4, 3].concat([7, 8, 2, 1, 5, 4])

let newArray = []

bothArr.forEach(element, index, array => {
   if (!newArray.includes(element)) {
     newArray.push(element)
   }
})
return newArray
}
console.log(noDups(arr1, arr2));
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
