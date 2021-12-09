// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

describe("tiredFunction", () => {

    it("take a boolean value then returns a string 'drink coffe' or 'keep working'", () => {

        expect(tiredFunction(true)).toEqual("Drink coffee")
    })
})

//Function checks for true or false of been tired and outputs a statement
const tiredFunction = (tired) => {
    if (tired === true) {
        return "Drink coffee"
    }
    else {
        return "Keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
describe("stressTest", () => {

    it("takes a boolean value and returns a string", () => {

        expect(stressTest(false)).toEqual("keep going")
    })
})

const stressTest = (stress) => {
    if (stress === true) {
        return "relax"
    }
    else {
        return "keep going"
    }
}



// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

describe("budgetFunct", () => {

    it("take in a number and return a string", () => {

        expect(budgetFunct(250)).toEqual("in budget")
    })
})

const budgetFunct = (price) => {
    if (price < 300) {
        return "in budget"
    }
    else {
        return "not in budget"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("smallNum", () => {

    it("takes in two numbers and returns smaller number", () => {

        expect(smallNum(10, 20)).toEqual(10)
    })
})

const smallNum = (num1, num2) => {
    if (num1 < num2) {
        return num1
    }
    else if (num1 > num2) {
        return num2
    }
    else {
        return num1
    }
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

describe("oddTest", () => {

    it("takes a number and returns a string", () => {

        expect(oddTest(33)).toEqual("odd")
    })
})

const oddTest = (num) => {
    if (num % 2 !== 0) {
        return "odd"
    }
    else {
        return "even"
    }
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

describe("colorTest", () => {

    it("take a fruit name and return color", () => {

        expect(colorTest("banana")).toEqual("yellow")
    })
})

const colorTest = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    }
    else if (fruit === "apple") {
        return "red"
    }
    else if (fruit === "grape") {
        return "purple"
    }


}

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

describe("rick", () => {

    it("function returns Morty", () => {

        expect(rick()).toEqual("Morty")
    })
})

const rick = () => ("Morty")

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

describe("greeter", () => {

    it("it takes a name and returns a greeting", () => {

        expect(greeter("salvador")).toEqual("Hello salvador")
    })
})

const greeter = (name) => {
    return `Hello ${name}`
}



// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

describe("oddOrEven", () => {

    it("takes in a number and returns string odd or even", () => {

        expect(oddOrEven(56)).toEqual("even")
    })
})

const oddOrEven = (number) => {
    if (number % 2 !== 0) {
        return "odd"
    }
    else {
        return "even"
    }
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.

describe("doubler", () => {

    it("takes a number and doubles it", () => {

        expect(doubler(973)).toEqual(1946)
    })
})

const doubler = (num) => {
    return num * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

describe("multiply", () => {

    it("takes two numbers and multiplies them", () => {

        expect(multiply(10, 12)).toEqual(120)
    })
})

const multiply = (num1, num2) => {
    return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.

describe("divisibleBy", () => {

    it("takes two numbers and determines if first number is divisible by the second equally", () => {

        expect(divisibleBy(10, 5)).toEqual("10 is divisible by 5")
    })
})


const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is divisible by ${num2}`
    }
    else {
        return "not divisible"
    }
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.


describe("fizzbuzz", () => {
  it("takes in a number and determines if it is divisble by 3,5,or both",()=>{
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
    expect(fizzbuzz(9)).toEqual("fizz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(43)).toEqual("Number is not divisible by 3 or 5")
    expect(fizzbuzz(42)).toBe("fizz")
    expect(fizzbuzz(42)).not.toBe("fizzbuzz")
    expect(fizzbuzz(99)).toBe("fizz")
    expect(fizzbuzz(134)).toBe("fizz")
  })

})

const fizzbuzz = (number) => {
if(number % 3 === 0 && number % 5 === 0){
  return "fizzbuzz"
} else if(number % 3 === 0){
  return "fizz"
}else if(number % 5 === 0){
  return "buzz"
} else{
return "Number is not divisible by 3 or 5"
}


}





//extra practive
//
// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });
