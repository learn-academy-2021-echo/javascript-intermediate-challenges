
// Story: As a programmer, I can make a car.

class Car {
    constructor(model, year){
        this.carModel = model
        this.carYear = year
        this.wheels = 4
        this.carLights = false
        this.carSignal = false
        this.carSpeed = 0
        this.lights = "off"
    }
    lightSwitch(){
        //return this.carLights === (true) ? this.carLights = false: this.carLights = true
        if (this.carLights === true){
            this.lights = "off"
            this.carLights = false
        }else {
            this.lights = "on"
            this.carLights = true
        }
    }
    areTheLightsOn(){
        return `bro, your lights are ${this.lights}`
    }
    carInfo(){
        return `You have a ${this.carModel} from year ${this.carYear} with ${this.wheels}. The lights are currently ${this.lights}`
    }


}

// Write a variable called myCar which is an instance of the class Car

var myCar = new Car() 



// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car{
    constructor(model, year){
        super(model, year)
    }
    acceleration(){
        return this.carSpeed += 10
    }
    breaking(){
        return this.carSpeed -= 7
    }
}

// Create an object called myTesla which is a instance of class Tesla

var myTesla = new Tesla("Type X", 2020)

// Story: As a programmer, I can give my Tesla a model on initialization.

// console.log(myTesla.carModel)
// console.log(myTesla.carYear)
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car{
    constructor(model, year){
        super(model, year)
    }
    acceleration(){
        return this.carSpeed += 5
    }
    breaking(){
        return this.carSpeed -= 2
    }
}

// create an object called myToyota which is a instance of class Toyota

var myToyota = new Toyota("corolla", 2013)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// console.log(myToyota);
// console.log(myToyota.carModel)
// console.log(myToyota.carYear)
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
class Volkswagen extends Car{
    constructor(model, year){
        super(model, year)
    }
    acceleration(){
        return this.carSpeed += 7
    }
    breaking(){
        return this.carSpeed -= 5
    }
}
var myVolkswagen = new Volkswagen("The Thing", 1960)


// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
console.log(myVolkswagen.areTheLightsOn());
myVolkswagen.lightSwitch()
console.log(myVolkswagen.areTheLightsOn());
// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
console.log(myVolkswagen.carSpeed)
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

myTesla.acceleration()
// go fast
myTesla.acceleration()
//even faster
myTesla.acceleration()
// not fast enough
myTesla.acceleration()
//check how fast you are going
console.log(myTesla.carSpeed)

// Story: As a programmer, I can slow my Tesla down by 7 per braking.
myTesla.breaking()
console.log(myTesla.carSpeed)
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
myToyota.acceleration()
// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes
console.log(myTesla.carInfo())
console.log(myToyota.carInfo())
console.log(myVolkswagen.carInfo())