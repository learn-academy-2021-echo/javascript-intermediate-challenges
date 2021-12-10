var person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    getData: function() {
       return `${this.firstName} is from planet ${this.homePlanet}`
    }
  }

//   console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.homePlanet);
// console.log(person.getData());

var product = {
    name: "chair", 
    price: 14.99,
  }

  const describeProduct = () => {
      return `The product is a ${product.name}. It costs ${product.price}.`
  }
// console.log(describeProduct());

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    getData: function () {
        return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}.`
    }
  }

//   console.log(lunch.ingredients);
// console.log(lunch.ingredients[2]);
const pbb = () =>{
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}.`
}
// console.log(pbb());
// console.log(lunch.getData());

var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ]

//   const cat = (array) =>{
//       return array.filter(value => {
//           return value.type === "cat")
//   }
// console.log(cat(animals));
// const nameAnimal = (array) =>{
//     return array.filter(value => {
//         if(value === value.name){
//             return value
//         } else{
//             return null
//         }
//     })
// }
// console.log(nameAnimal(animals));
// const nameAnimal = (array) =>{
//     return array.map((value, index)=> {
//         if(index === 0){
//             return value.name
//         } else if (index === 1){
//             return value.name
//         } else if (index === 2){
//             return value.name
//         } else if (index === 3){
//             return value.name
//         }
//     })
// }
// console.log(nameAnimal(animals));
