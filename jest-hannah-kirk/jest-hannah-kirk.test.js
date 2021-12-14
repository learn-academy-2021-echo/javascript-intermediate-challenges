// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// 1.) Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("test a function that returns drink coffee or keep working", () => {
  it("returns a string that says drink coffee or keep working", () => {
    expect(tired(true)).toEqual("drink coffee");
    expect(tired(false)).toEqual("keep working");
  });
});

// Write the function that will make the test pass.

const tired = (bool) => {
  if (bool === true) {
    return "drink coffee";
  } else {
    return "keep working";
  }
};

// 2.) Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("test a function that returns relax or keep going", () => {
  it("returns a string that says relax or keep going", () => {
    expect(stressed(true)).toEqual("relax");
    expect(stressed(false)).toEqual("keep going");
  });
});

// Write the function that will make the test pass.

const stressed = (bool) => {
  if (bool === true) {
    return "relax";
  } else {
    return "keep going";
  }
};

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("test a function that returns in budget or keep dreaming", () => {
  it("returns a string that says in budget or keep dreaming", () => {
    expect(budget(299)).toEqual("in budget");
    expect(budget(299.99)).toEqual("in budget");
    expect(budget(300)).toEqual("keep dreaming");
  });
});

// Write the function that will make the test pass.

const budget = (num) => {
  if (num < 300) {
    return "in budget";
  } else {
    return "keep dreaming";
  }
};

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smaller number function", () => {
  it("takes in two numbers and returns the smaller number", () => {
    expect(smNum(77, 144)).toEqual(77);
    expect(smNum(31, 28)).toEqual(28);
    expect(smNum(-100, 28.45)).toEqual(-100);
    expect(smNum(21, 21)).toEqual(21);
  });
});

// Write the function that will make the test pass.

const smNum = (num1, num2) => {
  if (num1 <= num2) {
    return num1;
  } else {
    return num2;
  }
};

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("odd or not odd", () => {
  it("takes in one number and returns odd or not odd", () => {
    expect(oddNotOdd(29)).toEqual("odd");
    expect(oddNotOdd(38)).toEqual("not odd");
    expect(oddNotOdd(-77)).toEqual("odd");
  });
});

// Write the function that will make the test pass.

const oddNotOdd = (num) => {
  if (num % 2 !== 0) {
    return "odd";
  } else {
    return "not odd";
  }
};

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruit colors functions", () => {
  it("will take in a string (fruit), and return a string (color)", () => {
    expect(fruitColor("banana")).toEqual("yellow");
    expect(fruitColor("apple")).toEqual("red");
    expect(fruitColor("grape")).toEqual("purple");
    expect(fruitColor("dragon fruit")).toEqual(
      "I don't know what color that is..."
    );
  });
});

// Write the function that will make the test pass.

const fruitColor = (fruit) => {
  switch (fruit) {
    case "banana":
      return "yellow";
      break;
    case "apple":
      return "red";
      break;
    case "grape":
      return "purple";
      break;
    default:
      return "I don't know what color that is...";
  }
};

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
