var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    getData: function(){
        return `${this.firstName}${this.lastName} is from planet ${this.homePlanet}`
    }
  }

//   Write the code that accesses the first name of the person object.
//   console.log(person.firstName);
// Write the code that accesses the last name of the person object.
// console.log(person.lastName);
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.getData())
var product = {
    name: "chair", price: 14.99,
    describeProduct: function (){
        return `The product is a ${this.name}. It costs ${this.price}`
    }
  }
//   Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// console.log(product.describeProduct())

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }
//   Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
//   Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients)
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana." 


