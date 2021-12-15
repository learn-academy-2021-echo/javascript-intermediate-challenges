// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// console.log(myCar.wheels)
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

class Car {
  constructor(model,year, accel, brake){
    this.model = model
    this.year = year
    this.wheels = 4
    this.lights = "OFF"
    this.signals = "OFF"
    this.speed = 0
    this.accelRate = accel
    this.brake = brake
  }
        lightsOn() {
        this.lights = "ON"
        }
        lightsOff() {
          this.lights = "OFF"
        }
        signalsOn(){
          this.signals = "ON"
        }
        signalsOff(){
          this.signals = "OFF"
        }
        speedUp(){
          this.speed = this.speed + this.accelRate
        }
        slowDown(){
          this.speed = this.speed - this.brake
        }
        carInfo(){
          return `This cars is a ${this.year} ${this.model} with ${this.wheels} wheels going at ${this.speed} MPH. The lights are ${this.lights} and the signals are ${this.signals}`
        }
}


var myCar = new Car("Generic","1999", 5, 2)
// myCar.speedUp()
// console.log (myCar.carInfo())
// myCar.slowDown()
console.log (myCar.carInfo())

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model
//through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Tesla extends Car{
  constructor(model,year, accel, brake){
    super(model,year, accel, brake)
  }
}

var myTesla = new Car("X", 2020, 10, 7)
myTesla.speedUp()
// console.log (myTesla.carInfo())
myTesla.slowDown()
myTesla.lightsOn()
console.log (myTesla.carInfo())


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Toyota extends Car{
  constructor(model,year){
    super(model,year)
  }
}

var myToyota = new Car("Corolla", 2017, 5, 2)
myToyota.speedUp()
// console.log (myToyota.carInfo())
myToyota.slowDown()
console.log (myToyota.carInfo())

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Volkswagen extends Car {
  constructor(model,year){
    super(model,year)

  }
}

var myVW = new Car("Rabbit", 1982, 7, 5)
myVW.speedUp()
// console.log (myVW.carInfo())
myVW.slowDown()
console.log (myVW.carInfo())

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position. DONE
//
// Story: As a programmer, I can turn the lights in all my cars on and off. DONE
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position. DONE
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph. DONE
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration. DONE
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
