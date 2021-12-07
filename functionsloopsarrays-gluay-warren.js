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
