// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.
//
// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.
//
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

const isTired = (tired) => {
  if (tired) {
    return "drink coffee"
  }
  return "keep working"
}

describe("isTired", () => {
  it("it should return \"drink cofee\" if you're tired", () => {
    expect(isTired(true)).toEqual("drink coffee")
  })
  it("should return \"keep working\" if you're not tired", () => {
    expect(isTired(false)).toEqual("keep working")
  })
})

// Write the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

const isStressed = (stressed) => {
  if (stressed) {
    return "relax"
  }
  return "keep going"
}

describe("isStressed", () => {
  it("it should return \"relax\" if you're stressed", () => {
    expect(isStressed(true)).toEqual("relax")
  })
  it("should return \"keep going\" if you're not stressed", () => {
    expect(isStressed(false)).toEqual("keep going")
  })
})


// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

const inBudget = (value) => {
  return (value < 300 ) ? 'in budget' : 'not in budget';
}

describe("inBudget", () => {
  it("should return \"in budget\" if price is lower than $300",  () => {
    expect(inBudget(299)).toEqual("in budget")
  })
})

// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

const smaller = (a, b) => {
  return (a < b) ? a : b;
}

describe("smaller", () => {
  it("should return a if a is smaller", () => {
    expect(smaller(3, 9)).toEqual(3)
  })
  it("should return b if b is smaller", () => {
    expect(smaller(9, 3)).toEqual(3)
  })
})
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
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
