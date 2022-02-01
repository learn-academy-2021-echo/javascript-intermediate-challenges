//1
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   hisData: function(){
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }
//
// console.log(person.hisData())

//2
// var product = {
//   name: "chair", price: 14.99,
//   describeProduct: function(){
//     return `This product is ${this.name}. It costs $${this.price}.`
//   }
// }
// console.log(product.describeProduct());


//3
// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   lunchSet: function() {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
//   }
// }
// console.log(lunch.lunchSet());
// //Write the code that accesses the ingredients property.
// //console.log(lunch.ingredients);
// //Write the code that access the 3rd ingredient of the lunch object.
// //console.log(lunch.ingredients[2]);
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


//4
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },

]

// var cats = animals.filter(value => value.type === "cat")
// console.log(cats);

//not this one below
// var petNames = animals.filter(value => value.name)
// console.log(petNames);

const petNames = (array) => {
  return array.map(value => {
    return value.name
  })
}
console.log(petNames(animals));


//5
// let author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
// }
//
// var {name, genre} = author
// console.log(`${name} is a ${genre} author`);

// let pokeOne = {
//     species: "Charmandar",
//     pokemon_type: "Fire",
//     describePokemon: function(){
//       return `${pokeOne.species} is a ${pokeOne.pokemon_type} pokemon.`
//     }
// }
//
// var {species, pokemon_type, describePokemon} = pokeOne
// console.log(describePokemon(pokeOne))
//
//
//
// let pokeTwo = {
//     species: "Magikarp",
//     pokemon_type: "Water",
//     describePokemon: function(){
//       return `${pokeTwo.species} is a ${pokeTwo.pokemon_type} pokemon.`
//     }
// }
// var {species, pokemon_type, describePokemon} = pokeTwo
// console.log(describePokemon(pokeTwo))
