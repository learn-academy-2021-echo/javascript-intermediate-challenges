class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

let black = new Coffee("black", 0, 0)
// console.log(black.type);
// console.log(black.coffeeProfile());

// define the idea/ the class
class Latte {
  // give the class a number of paramters (in this case three)
  constructor(flavor, milkType, numberOfShots){
    // use this.parameter to make them all keys and values
    this.flavor = flavor
    this.milkType = milkType
    this.numberOfShots = numberOfShots
  }
  // create a method. This method is supposed to return a string with the paramaters in it
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milkType} milk, ${this.numberOfShots} shot(s)`
  }
}

// let latte = new Latte("regular", "no", "single")
// console.log(latte.latteProfile());
// use the blueprint of the class "latte" to create a REAL object, with three specific arguments
// let nextLatte = new Latte("hazelnut", "almond", "double");
// // log that object and call on the method "latteProfile", which returns a string
// console.log(nextLatte.latteProfile());
// --> "A hazelnut latte with almond milk, double shot(s)"

class Volume {
  constructor(radius, height){
    this.radius = radius
    this.height = height
  }
  volumeOfCylinder(){
    let decimiled = (Math.PI * (this.radius ** 2) * this.height).toFixed(4)
    return Number (decimiled)
  }
}
// let cylinderOne = new Volume(2,4)
// console.log(cylinderOne.volumeOfCylinder());
//
// let cylinderTwo = new Volume(5,6)
// console.log(cylinderTwo.volumeOfCylinder());
//
// let cylinderThree = new Volume(7,8)
// console.log(cylinderThree.volumeOfCylinder());
