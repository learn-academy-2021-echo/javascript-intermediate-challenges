class car {
    constructor(myCar, modelCar, carYear, acceleratorUnit, brakingUnit) {
        this.car = myCar
        this.model = modelCar
        this.year = carYear
        this.wheels = 4
        this.lights = false
        this.turningLights = false
        this.speed = 0;
        this.acceleratorUnit = acceleratorUnit
        this.brakingUnit = brakingUnit

    }
    turnOnLights() {
        return this.lights = !this.lights
    }
    turningLight() {
        return this.turningLights = !this.turningLights
    }

    carInfo() {
        return `This car is a ${this.year} ${this.car}, this model ${this.model} has ${this.wheels} wheels.`//cartype, model, year, numberOfWheels
    }
    accelerator() {
        return this.speed = this.speed += this.acceleratorUnit
    }
    braking() {
        return this.speed = this.speed -= this.brakingUnit
    }
}

let myCar = new car("Sport", "Hatchback", 2025, 6, 2)
myCar.turnOnLights()
myCar.turnOnLights()
myCar.accelerator()
myCar.braking()
console.log(myCar)

class Tesla extends car {
    constructor(myCar, modelCar, carYear, acceleratorUnit, brakingUnit) {
        super(myCar, modelCar, carYear, acceleratorUnit, brakingUnit)

    }

}

let myTesla = new Tesla("Tesla", "y", 2021, 10, 7)
console.log(myTesla.carInfo())
myTesla.accelerator()
myTesla.braking()
console.log(myTesla)

class Toyota extends car {
    constructor(myCar, modelCar, carYear, acceleratorUnit, brakingUnit) {
        super(myCar, modelCar, carYear, acceleratorUnit, brakingUnit)
    }

}

let myToyota = new Toyota("Toyota", "Tacoma", 2017, 5, 2)
myToyota.accelerator()
myToyota.braking()
console.log(myToyota)

class Volkswagon extends car {
    constructor(myCar, modelCar, carYear, acceleratorUnit, brakingUnit) {
        super(myCar, modelCar, carYear, acceleratorUnit, brakingUnit)
    }

}

let myVolkswagon = new Volkswagon("Volkswagon", "Golf", 2018, 7, 5)
myVolkswagon.accelerator()
myVolkswagon.braking()
console.log(myVolkswagon)



