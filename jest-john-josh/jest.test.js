// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("coffee", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(coffee("I am not tired")).toEqual("keep working")
//     })
//   })

// const coffee = (string) => {
//     if(string === "I am tired"){
//         return "drink coffee"
//     }
//     else if(string === "I am not tired"){
//         return "keep working"
//     }
// }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("relax", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("a function that returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(relax("I am stressed")).toEqual("relax")
//     })
//   })

// const relax = (string) => {
//     if(string === "I am stressed"){
//         return "relax"
//     }
//     else if(string === "I am not stressed"){
//         return "keep going"
//     }
// }

// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("in budget", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("A function that returns 'in budget' if a price is lower than $300",() => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(inBudget(299)).toEqual("in budget")
//     })
//   })

// const inBudget = (number) => {
//     if(number >= 300){
//         return "not in budget"
//     } else if(number < 300){
//         return "in budget"
//     }
// }

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// describe("smol number", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("a function that takes in two arguments(numbers) and returns the smaller number.",() => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(smolNumber(9, 7)).toEqual(7)
//     })
//   })

// const smolNumber = (num1, num2) => {
//     if(num1 > num2){
//         return num2
//     } else if (num1 < num2){
//         return num1
//     }
// }

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("oddity", () => {
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("a function that takes in one argument(number) and returns whether the number is odd.",() => {
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(oddity(9)).toEqual("odd")
    })
  })

const oddity = (num) => {
    if(num % 2 !== 0){
        return "odd"
    } else if (num % 2 ===0){
        return "even"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.


// Write the test for a function called rick that returns "Morty".


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.