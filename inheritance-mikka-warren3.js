// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

class Car {
  constructor(model,year,wheels,lights,signals){
    this.model = model
    this.year = year
    this.wheels = wheels
    this.lights = lights
    this.signals = signals
  }
      lightsOn() {
        this.lights = "on"
        return `The lights on our ${this.year} ${this.model} are ${this.lights}.`
        }
        lightsOff() {
          this.lights = "off"
          return `The lights on our ${this.year} ${this.model} are ${this.lights}.`
        }
        signalsOn(){
          this.signals = "on"
        return  `The signals on our ${this.year} ${this.model} are ${this.signals}.`
        }
        signalsOff(){
          this.signals = "off"
          `The signals on our ${this.year} ${this.model} are ${this.signals}.`
        }
}


 var myCar = new Car("generic","1999",4,"off")
console.log(myCar)
console.log(myCar.signalsOn())
// console.log(myCar.wheels)
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
 // Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.

// class Tesla inherits from class Car

class Tesla extends Car{
  constructor(model,year,wheels){
    super(model,year,wheels)

  }


}

// Create an object called myTesla which is a instance of class Tesla

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model
//through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
var myTesla = new Car("X", 2020, 4)
//console.log(myTesla)
// console.log(myTesla.wheels)


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car{
  constructor(model,year,wheels){
    super(model,year,wheels)
  }
}

// create an object called myToyota which is a instance of class Toyota

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
var myToyota = new Car("Corolla", 2017, 4)
console.log(myToyota.lightsOn())

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
class Volkswagen extends Car {
  constructor(model,year,wheels){
    super(model,year,wheels)

  }
}
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

var myVW = new Car("Rabbit", 1982, 4)
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
