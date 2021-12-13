//1.
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


//Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

// let blackCoffee = new Coffee("black", 0, 0)
// console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// let noLongerBlackCoffee = new Coffee("not black", 1, 2)
// console.log(noLongerBlackCoffee.coffeeProfile());

//2 Latte maker
// class LatterMaker {
//   constructor(flavor, milk, numberOfShots){
//     this.flavor = flavor
//     this.milk = milk
//     this.numberOfShots = numberOfShots
//   }
//   coffeeProfile(){
//     return `A ${this.flavor} coffee with ${this.milk} milk, and ${this.numberOfShots} shot`
//   }
// }

//Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// let latte = new LatterMaker("latte", "oat", 1)
// console.log(latte.coffeeProfile());
