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
//
// describe("areYouExhausted", () => {
//   it("returns relax or keep going", () => {
//
//     expect(areYouExhausted("yes")).toEqual("relax")
//     expect(areYouExhausted("no")).toEqual("keep going")
//   })
// })
//
// const areYouExhausted = (string) => {
//   if(string === "yes"){
//   return "relax"
//   } else if(string === "no"){
//   return "keep going"
//   }
// }

//3
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
//
// describe("areYouInBudget", () => {
//   it("input number then return a string", () => {
//     expect(areYouInBudget(290)).toEqual("in budget")
//   })
// })
//
// const areYouInBudget = (budget) => {
//   if(budget < 300) {
//     return "in budget"
//   } else {
//     return "work harder"
//   }
// }

//4
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// describe("smallerNum", (num1, num2) => {
//   it("takes two numbers and compare them and then returns the smaller number", () => {
//     expect(smallerNum(num1 > num2)).toEqual(num1)
//     expect(smallerNum(num2 > num1)).toEqual(num2)
//   })
// })
//
// const smallerNum = (num1, num2) => {
//   if(num1 > num2) {
//     return num1
//   } else {
//     return num2
//   }
// }

//5
//Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// describe("oddNum", (number) => {
//   it("takes a number and return a tring", () => {
//     expect(oddNum(number%2===0)).toEqual("odd")
//
//   })
// })
// const oddNum = (number) => {
//   if(number % 2 === 0) {
//     return "odd"
//   } else {
//     return "even"
//   }
// }

//6
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// describe("fruitColors", (fruit) => {
//   it("takes a type of fruits and return the colors of them", () => {
//     expect(fruitColors("banana")).toEqual("yellow")
//   })
// })
//
// const fruitColors = (fruit) => {
//   if(fruit==="banana") {
//     return "yellow"
//   } else if(fruit === "apple"){
//     return "red"
//   } else if(fruit === "grape") {
//     return "purple"
//   } else {
//     return "not a fruit"
//   }
// }


//7 Write the test for a function called rick that returns "Morty".
// describe("buddies", (character) => {
//   it("takes rick and returns Morty", () => {
//     expect(buddies("rick")).toEqual("Morty")
//   })
// })
//
// const buddies = (character) => {
//   if(character === "rick"){
//     return "Morty"
//   }
// }


//8
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// describe("greeter", (name) => {
//   it("takes name and returns Hello! name", () => {
//     expect(greeter(name)).toEqual("Hello! name")
//   })
// })
//
// const greeter = (name) => {
//   return `Hello! name`
// }

//9
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// describe("oddOrEven", (numbers) => {
//   it("takes numbers returns the value odd or even", () => {
//     expect(oddOrEven(numbers%2===0)).toEqual("even")
//     expect(oddOrEven(numbers%2!==0)).toEqual("odd")
//   })
// })
//
// const oddOrEven = (numbers) => {
//   if(numbers % 2 === 0) {
//     return "even"
//   } else {
//     return "odd"
//   }
// }

//
//10
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// describe("doubler", (numbers) => {
//   it("takes numbers returns the value multiplied by 2", () => {
//     expect(doubler(numbers * 2)).toEqual(numbers * 2)
//   })
// })
//
// const doubler = (numbers) => {
//   return numbers * 2
// }

//11
// // Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// describe("multiply", (num1, num2) => {
//   it("takes two numbers returns the those two numbers multiplied by the other", () => {
//     expect(multiply(num1 * num2)).toEqual(num1 * num2)
//   })
// })
//
// const multiply = (num1, num2) => {
//   return num1 * num2
// }
