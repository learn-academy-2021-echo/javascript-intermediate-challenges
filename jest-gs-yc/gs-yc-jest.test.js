// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// describe("areYouTired", () => {
//   it("returns drink coffee or keep working", () => {
//
//     expect(areYouTired("yes")).toEqual("drink coffee")
//     expect(areYouTired("no")).toEqual("keep working")
//   })
// })
// const areYouTired = (string) => {
//   if(string === "yes"){
//   return "drink coffee"
// } else if(string === "no"){
//   return "keep working"
// }
// }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
// //
// describe("areYouExhausted", () => {
//   it("returns relax or keep going", () => {
//
//     expect(areYouExhausted("yes")).toEqual("relax")
//     expect(areYouExhausted("no")).toEqual("keep going")
//   })
// })
// const areYouExhausted = (string) => {
//   if(string === "yes"){
//   return "relax"
// } else if(string === "no"){
//   return "keep going"
// }
// }
//
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
//   describe("areYouInBudget", () => {
//   it("input number then return a result of the budget", () => {
//     expect(areYouInBudget(299)).toEqual("in budget")
//   })
// })
//
// const areYouInBudget = (budget) => {
//   if(budget < 300) {
//     return "in budget"
//   } else {
//     return "work harder"
//   }


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
//
// describe("smallerNumber", () => {
//
//   it("returns the smaller number", () => {
//
//     expect(smallerNumber(57, 6)).toEqual(6)
//
//   })
// })
// const smallerNumber = (num1, num2) => {
//   if(num1 > num2){
//   return num2
// } else {
//   return num1
//
// }
// }

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
//
// describe("oddNumber", () => {
//   it("returns whether the number is odd", () => {
//     expect(oddNumber(5)).toEqual("odd")
//     expect(oddNumber(6)).toEqual("even")
//
//   })
// })
// const oddNumber = (number) => {
//   if (number %2 === 0) {
//     return "even"
//     }
//     else {
//       return "odd"
//     }
//   }


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

// describe("fruit", () => {
//   it("takes a type of fruit and returns the color of them ", () => {
//     expect(fruit("banana")).toEqual("yellow")
//
//   })
// })
// const fruit = (type, color) => {
//   if ( type === "banana" ) {
//     return "yellow"
//     }
//     else if (type === "apple") {
//       return "red"
//
//     }
// else if (type === "grape"){
//   return "purple"
// }
// }


// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

// describe("tvShow", () => {
//   it("returns the name of the character", () => {
//
//     expect(tvShow("rick")).toEqual("Morty")
//
//   })
// })
// const tvShow = (character) => {
//   if(character === "rick"){
//   return "Morty"
// } }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

// describe("greeter", () => {
//   it("returns a greeting", () => {
//
//     expect(greeter("hi")).toEqual("hi Gluay")
//
//   })
// })
// const greeter = (greeting, name) => {
//   if(greeting === "hi"){
//   return `hi Gluay`
// }
// }


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

// describe("oddOrEven", () => {
//   it("returns whether the number is odd or even", () => {
//     expect(oddNumber(5)).toEqual("odd")
//     expect(oddNumber(6)).toEqual("even")
//
//   })
// })
// const oddNumber = (number) => {
//   if (number %2 === 0) {
//     return "even"
//     }
//     else {
//       return "odd"
//     }
//   }

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
