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
var blackCoffee = new Coffee("black",0,0)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
 var coffeeTwo = new Coffee("regular",1,2)
 console.log(coffeeTwo.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
//
class Latte {
  constructor(flavor,milkType,shots) {
    this.flavor = flavor
    this.milkType = milkType
    this.shots = shots
  }
  latteProfile(){
    return `A ${this.flavor} latte with ${this.milkType} milk, and ${this.espressoShots()}. `
  }

  espressoShots(){
    if(this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }


}


// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regLatte = new Latte("regular","whole", 1)

console.log(regLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazLatte = new Latte("hazelnut", "almond", 2)
console.log(hazLatte.latteProfile())
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
// V = PIr^2h

class VolCyl {
  constructor (radius, height){
    this.pi = 3.1416
    this.radius = radius
    this.height = height
  }

  myCylinder(){
    return this.pi * (this.radius ** 2)  * this.height;

  }
}
var cylinder1 = new VolCyl (5, 10) // 785.3981
var cylinder2 = new VolCyl (3, 10) // 282.74
var cylinder3 = new VolCyl (1, 2) // 6.28
console.log (cylinder1.myCylinder())
console.log (cylinder2.myCylinder())
console.log (cylinder3 .myCylinder())
