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
var coffee1 = new Coffee("black", "hazelnut", "brown")
console.log(coffee1.coffeeProfile());
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
var coffee2 = new Coffee("black", "heavy", ["white", "brown"])
console.log(coffee2.coffeeProfile());
// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milkType, shots){
    this.flavor = flavor
    this.milkType = milkType
    this.shots = shots
  }

  latteProfile(){
    return `A ${this.flavor} coffee with ${this.milkType}, ${this.shots}`
  }
}
// Write a method for your Latte class that outputs the latte's profile.
var latte1 = new Latte("hazelnut", "silk", "two shots")
console.log(latte1.latteProfile());
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var latte2 = new Latte("single shot", "regular", "white")
console.log(latte2.latteProfile());
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var latte3 = new Latte("double shot hazelnut", "almond", "brown")
console.log(latte3.latteProfile());

class Cylinder {
  constructor(height, radius) {
    this.height = height
    this.radius = radius
  }

  volume () {
    const squared = this.radius * this.radius;
    return (Math.PI * squared * this.height).toFixed(4);
   }
 };

var c1 = new Cylinder(7, 4);
var c2 = new Cylinder(8, 2);
var c3 = new Cylinder(9, 3);
// Volume of the cylinder with four decimal places.
console.log(`volume = ${c1.volume()}`);
console.log(`volume = ${c2.volume()}`);
console.log(`volume = ${c3.volume()}`);



// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
