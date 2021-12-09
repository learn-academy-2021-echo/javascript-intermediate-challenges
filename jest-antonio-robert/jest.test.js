// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.
// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.
//
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//

const { it } = require("@jest/globals")

describe("areYouTired", () => {
  it("returns drink coffee or keep working based on input", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
})
// Write the function that will make the test pass.

const areYouTired = (string) => {
  if(string === "yes"){
    return "drink coffee"
  } else if(string ==="no") {
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
  it("returns relax or keep going based on input", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})
// Write the function that will make the test pass.

const areYouStressed = (string) => {
  if(string === "yes"){
    return "relax"
  } else if(string ==="no") {
    return "keep going"
  }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
  it("returns in budget or not based on input", () => {
    expect(inBudget(301)).toEqual("too expensive")
    expect(inBudget(257)).toEqual("in budget")
  })
})

// Write the function that will make the test pass.

const inBudget = (moneys) => {
  if (moneys > 300){
    return "too expensive"
  } else {
    return "in budget"
  }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallerNum", () => {
  it("compares two numbers and returns the smaller of the two", () =>{
    expect(smallerNum(5, 1)).toEqual(1)
    expect(smallerNum(1, 6)).toEqual(1)
    expect(smallerNum(6, 6)).toEqual("they are equal")
  })
})

// Write the function that will make the test pass.

const smallerNum = (num1, num2) => {
  if(num1 > num2) {
    return num2
  } else if (num2 > num1){
    return num1
  } else {
    return "they are equal"
  }
}



// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("returnOdd", () => {
  it("checks to see if number is odd", () =>{
    expect(returnOdd(1)).toEqual("odd")
    expect(returnOdd(32)).toEqual("even")
    expect(returnOdd("string")).toEqual("not a number")
  })
})

// Write the function that will make the test pass.

const returnOdd = (num) => {
  if(num % 2 === 0){
     return "even"
  } else if(num % 2 === 1 || num % 2 === -1){
    return "odd"
  } else{
    return "not a number"
  }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitCheck", () => {
  it("return color of fruit", () =>{
    expect(fruitCheck("apple")).toEqual("red")
    expect(fruitCheck("banana")).toEqual("yellow")
    expect(fruitCheck("grape")).toEqual("purple")
    expect(fruitCheck("rock")).toEqual("not a fruit")
  })
})

// Write the function that will make the test pass.

const fruitCheck = (fruit) => {
  if(fruit === "apple"){
    return "red"
  } else if(fruit === "banana"){
    return "yellow"
  } else if(fruit === "grape"){
    return "purple"
  } else{
    return "not a fruit"
  }
}

// Write the test for a function called rick that returns "Morty".

describe("pickleRick", () =>{
  it("fucntion that returns Morty if Rick is passed as an argument", () => {
    expect(pickleRick("Rick")).toEqual("Morty")
    expect(pickleRick("gazoorpazorp")).toEqual("burp")
  })
})

// Write the function that will make the test pass.

const pickleRick = (string) => {
  if (string === "Rick"){
    return "Morty"
  } else {
    return "burp"
  }
}

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
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'
// Write the function that will make the test pass.