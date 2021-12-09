// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns a string that says hi", () => {
  
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi")
//     })
//   })



//   IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("coffeeDrinker", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () =>{

        expect(coffeeDrinker("tired")).toEqual("drink coffee")
        expect(coffeeDrinker()).toEqual("keep working")
    })
    
})

// Write the function that will make the test pass.
const coffeeDrinker = (string) =>{
    if(string === "tired"){
        return "drink coffee"
    } else{
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("zen", () => {
    it("returns relax if you are stressed and keep going if you are not stressed", () =>{

        expect(zen("stressed")).toEqual("relax")
        expect(zen("not stressed")).toEqual("keep going")
    })
    
})



// Write the function that will make the test pass.
const zen = (string) =>{
    if(string === "stressed"){
        return "relax"
    } else{
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () => {
    it("returns in budget if a price is lower than 300", () =>{

        expect(budget(299)).toEqual("in budget")
        expect(budget(3000)).toEqual("not in budget")
        
    })
    
})


// Write the function that will make the test pass.
// Create a variable that contains a funtion named budget with a param of num
const budget = (num) => {
    // created an if/ else statement to determine in or out of budget
    if(num < 300){
        return "in budget"
    } else {
        return "not in budget"
    }
}


// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallerNumber", () => {
    it("returns the smaller of two  numbers", () =>{

        expect(smallerNumber(4, 5)).toEqual(4)
        expect(smallerNumber(4, 3)).toEqual(3)
        expect(smallerNumber(-5, 5)).toEqual(-5)
        expect(smallerNumber(4.9, 5.1)).toEqual(4.9)
    })
    
})


// Write the function that will make the test pass.
const smallerNumber = (num1, num2) =>{
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("numOdd", () => {
    it("returns an argument(number) and returns whether or not if odd", () =>{

        expect(numOdd (3)).toEqual("odd")
        expect(numOdd (4)).toEqual("not odd")
        expect(numOdd (7)).toEqual("odd")
        
    })
    
})
 
// Write the function that will make the test pass.
const numOdd = (num) =>{
    if(num % 2 !== 0){
        return "odd"
    } else {
          return "not odd"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColors", () => {
    let fruits = ["apple", "banana", "grape"]
    let colors = ["red", "yellow", "purple"]
    it("write a function that takes a fruit and returns a color", () =>{

        expect(fruitColors ("banana")).toEqual("yellow")
        expect(fruitColors(fruits[0])).toEqual(colors[0])
        expect(fruitColors(fruits[1])).toEqual(colors[1])
        expect(fruitColors(fruits[2])).toEqual(colors[2])
        
    })
    
})
  


    



// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.