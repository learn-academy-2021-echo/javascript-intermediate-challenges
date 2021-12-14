// 1. Coffee Maker

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
// var blackCoffee = new Coffee("black", "0", "0")
// console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
var sweetCoffee = new Coffee("black", "1", "2")
// console.log(sweetCoffee.coffeeProfile());

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
    constructor(flavor, milk, shot){
        this.flavor = flavor.toLowerCase()
        this.milk = milk.toLowerCase()
        this.shot = shot
    }

    latteProfile(){
        return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots()}`
    }

    shots(){
        if(this.shot > 1){
          return `${this.shot} shots`
        } else {
          return `${this.shot} shot`
        }
      }
}
// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var singleShot = new Latte ("regular","regular", "1")
console.log(singleShot.latteProfile());
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnut = new Latte ("hazelnut", "almond", "2")
console.log(hazelnut.latteProfile());


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderVol {
  constructor (radius, height){
    this.radius = radius
    this.height = height
  }

  calcVolume() {
    return (this.height * (this.radius ** 2) * Math.PI).toFixed(4)
  }

}


// Write the code that creates three unique cylinder objects

var cylinder1 = new CylinderVol (1, 1)

var cylinder2 = new CylinderVol (5, 2)

var cylinder3 = new CylinderVol (3, 7)

console.log(cylinder1.calcVolume())

console.log(cylinder2.calcVolume())

console.log(cylinder3.calcVolume())