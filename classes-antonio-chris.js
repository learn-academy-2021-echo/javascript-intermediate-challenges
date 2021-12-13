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

// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

var blackCoffee = new Coffee ("black", 0, 0)
  console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

var regCoffee = new Coffee ("plain", 1, 2)
  console.log(regCoffee.coffeeProfile());

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

  class Latte {
    constructor(flavor, milkType, shots){
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType
      this.shots = shots

    }

    latteProfile(){
      return `A ${this.flavor} Latte with ${this.milkType}, ${this.numShots()}`
    }

    numShots(){
      if(this.shots > 1){
        return `${this.shots} shots`
      } else {
        return `${this.shots} a shot`
      }
    }
  }

  var regLatte = new Latte ("regular", "almond milk", 1)
    console.log(regLatte.latteProfile());

  // Write a method for your Latte class that outputs the latte's profile.

  //

  // Write the code that makes a regular, single shot latte. Then, log the latte's profile.
   var regLatte = new Latte ("regular", "almond milk", 1)
    // console.log(regLatte.latteProfile());
  // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
   var hazelnutLatte = new Latte ("hazelnut", "almond milk", 2)
  console.log(hazelnutLatte.latteProfile());
  
  
  
  // Volume of a Cylinder
  // Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
  //
  class Cylinder{
    constructor(radius, height){
      this.radius = radius
      this.height = height
      

    }
     calc(){
      if(this.radius > 0 && this.height > 0){
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4)
      } else {
        return "this is not a circle"
      }
     }
  }
  
  var newCylinder = new Cylinder(45, 57)
  // console.log(newCylinder.calc());
  // // Write the code that creates three unique cylinder objects
  
  var secondCylinder = new Cylinder (11,3)
  // console.log(secondCylinder.calc());

  var thirdCylinder = new Cylinder(5,9)
  // console.log(thirdCylinder.calc());

  var newArr = [newCylinder, secondCylinder, thirdCylinder]

  var combinedCylinder = (array) =>{
   return array.map(value =>{
      return parseFloat(value.calc())
    })
  }
console.log(combinedCylinder(newArr));