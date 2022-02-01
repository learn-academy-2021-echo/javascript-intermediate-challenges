// Challenges
//Coffee Maker
class Coffee {
    constructor(type, cream, sugar) {
        this.type = type.toLowerCase()
        this.cream = cream
        this.sugar = sugar
    }

    coffeeProfile() {
        return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }

    creams() {
        if (this.cream > 1) {
            return `${this.cream} creams`
        } else {
            return `${this.cream} cream`
        }
    }

    sugars() {
        if (this.sugar > 1) {
            return `${this.sugar} sugars`
        } else {
            return `${this.sugar} sugar`
        }
    }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
let blackCoffe = new Coffee("black", 2, 1)
console.log(blackCoffe.coffeeProfile());



// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
let latte = new Coffee("latte", 1, 2)
console.log(latte.coffeeProfile());


// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {

    constructor(flavor, milkType, numberOfShots) {
        this.flavor = flavor,
            this.milkType = milkType,
            this.numberOfShots = numberOfShots
    }

    latte() {
        return `Here your ${this.flavor} with ${this.milkType} milk and ${this.shots()}`
    }

    shots() {
        if (this.numberOfShots > 1) {
            return `${this.numberOfShots} shots`
        } else {
            return `${this.numberOfShots} shot`
        }
    }
}


// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
let mocha = new Latte("mocha", "low-fat", 2)
console.log(mocha.latte());

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
let hazelnut = new Latte("hazelnut", "almond", 2)
console.log(hazelnut.latte());

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
    constructor(height, radius) {
        this.height = height,
            this.radius = radius
    }

    volume() {
        return (Math.PI * (this.radius ** 2) * this.height).toFixed(4)
    }

}

// Write the code that creates three unique cylinder objects
let cylinder1 = new Cylinder(7, 8)
console.log(cylinder1.volume());

let cylinder2 = new Cylinder(10000, 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
console.log(cylinder2.volume());

let cylinder3 = new Cylinder(1.7, 0.003)
console.log(cylinder3.volume());

