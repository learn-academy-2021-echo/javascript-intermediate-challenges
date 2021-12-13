class car{
    constructor(myCar, modelCar, carYear){
    this.car = myCar
    this.model = modelCar
    this.year = carYear
    this.wheels = 4
    this.lights = false
    }
    turnOnLights (){
        return this.lights = !this.lights
    }
}

let myCar = new car("Sport", "Hatchback", 2025)
myCar.turnOnLights()
myCar.turnOnLights()

console.log(myCar)

class Tesla extends car {
    constructor(myCar, modelCar, carYear){
        super(myCar, modelCar, carYear)
    }
}

let myTesla = new Tesla( "Sport", "y", 2021)
console.log(myTesla)

class Toyota extends car {
    constructor(myCar, modelCar, carYear){
        super(myCar, modelCar, carYear)
    }
}

let myToyota = new Toyota( "Sport", "Tacoma", 2017)
console.log(myToyota)

class Volkswagon extends car {
    constructor(myCar, modelCar, carYear){
        super(myCar, modelCar, carYear)
    }
}

let myVolkswagon = new Volkswagon( "GTI", "Golf", 2018)
console.log(myVolkswagon)

