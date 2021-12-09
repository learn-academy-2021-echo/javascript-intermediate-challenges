//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

var testArr1 = [3, 9, 15, 4, 10]

const mult3 = (array) => {
  let sumNum = []
  for (var i = 0; i < array.length; i++) {
    sumNum.push(array[i] * 3)

  }
  return sumNum


}
console.log(mult3(testArr1));


//Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// --> [-7, 3, 5, 13]

const oddNums = (array) => {
 let odds = []
 for (var i = 0; i < array.length; i++) {
   if (array[i] % 2 !== 0) {
     odds.push(array[i])
   }
 }

  return odds
}
console.log(oddNums(testArr2));


//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// --> "nicework"

const letters = (array) => {
  let lett = []
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      lett.push(array[i])
    }
  }
  return lett.join("")
}
console.log(letters(comboArr));



//Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// --> 10

var addThese2 = []
// --> 0
//creat a function and for loop inside function to iterate over array
const addMach = (array) => {
let sum = 0 ;
for (var i = 0; i < array.length; i++) {
  sum += array[i]
}

  return sum
}
console.log(addMach(addThese2));


//Create a function that takes in an array of numbers and returns the index of the largest number.


var indexHighestNumber = [1, 4, 2, 3]
// --> 1 need a function that returns the largest number in the array
// create a function
const bigNum = (array) => {
  let num = 0
for (var i = 0; i < array.length; i++) {
  if (array[i] >= num){
    num = array[i]
  }
}
return num;
}
console.log(bigNum(indexHighestNumber));
