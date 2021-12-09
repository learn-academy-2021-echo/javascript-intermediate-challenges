// //IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe ("isTired", () => {
    it("returns drink coffee if tired or keep working if not tired", () => {
        expect(isTired("yes")).toEqual("drink coffee")
        expect(isTired("no")).toEqual("keep working")
    })
})

const isTired = (str) => {
    if (str === "yes"){
        return "drink coffee";
    }else if (str === "no"){
        return "keep working";
    }
}


// Write the function that will make the test pass
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe ("isStressed", () => {
    it("returns relax if stressed and keep going if not stressed", () => {
        expect(isStressed("yes")).toEqual("relax")
        expect(isStressed("no")).toEqual("keep going")
    })
})

const isStressed = (str) => {
    if (str === "yes"){
        return "relax";
    }else if (str === "no"){
        return "keep going";
    }
}


// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("inBudget", () => {
    it("returns if the price is within budget", () => {
        expect(inBudget("299")).toEqual("you are within budget")
        expect(inBudget("301")).toEqual("you are not within budget")
    })
})

const inBudget = (price) =>{
    if (price <= 300){
        return "you are within budget";
    }else{
        return "you are not within budget";
    }
}


// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe ("smallerNum", () => {
    it("returns the smaller number", () => {
        expect(smallerNum(2,5)).toEqual(2)
        expect(smallerNum(10,4)).toEqual(4)
        expect(smallerNum(2,2)).toEqual("the numbers are the same")
    })
})

const smallerNum = (num1, num2) =>{
    if (num1 === num2){
        return "the numbers are the same";
    }else if (num1 < num2){
        return num1;
    }else if (num2 < num1){
        return num2;
    }
}


// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe ("isOdd", () => {
    it("returns if the number is odd", () => {
        expect(isOdd(2)).toEqual("even")
        expect(isOdd(9)).toEqual("odd")
    })
})

const isOdd = (num) => {
    if (num === 0){
        return "odd";
    }else if (num % 2 !== 0){
        return "odd";
    }else{
        return "even";
    }
}



// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe ("fruitColor", () => {
    it("returns the color of the input fruit", () => {
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

const fruitColor = (fruit) =>{
    if (fruit === "apple"){
        return "red";
    }else if (fruit === "banana"){
        return "yellow";
    }else if (fruit === "grape"){
        return "purple";
    }

}

// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
describe ("Rick", () => {
    it("returs Morty", () => {
        expect(rick("Rick")).toEqual("Morty")
        expect(rick(22)).toEqual("Morty")
    })
})

const rick = (input) => {
  return "Morty"
}
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe ("greeting", () => {
    it("returns a greeting with name", () => {
        expect(greeting("Kevin")).toEqual("Hello Kevin")
        expect(greeting("Mikka")).toEqual("Hello Mikka")
        expect(greeting("Rick")).toEqual("Hello Rick")
    })
})

const greeting = (name) => {
  return 'Hello ' + name
}
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe ("oddOrEven", () => {
    it("returns the color of the input fruit", () => {
        expect(OddOrEven("apple")).toEqual("red")
        expect(oddOrEven("banana")).toEqual("yellow")

    })
})
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
