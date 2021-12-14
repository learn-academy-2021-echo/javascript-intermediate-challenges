class Car{
  constructor(model, year){
    this.model = model
    this.year = year
    this.lights = "off"
    this.signal = "off"
    this.speed = 0
  }
  wheels(){
    return 4
  }
  lightsOn(){
this.lights= "on"
    return this.lights
  }
  signalOn(){
this.signal= "on"
    return this.signal
  }
}

// let myCar = new Car()
// console.log(myCar.wheels());


class Tesla extends Car {
  constructor(model, year){
    super(model, year)
  }
  acceleration(){
    return this.speed += 10
  }
  braking(){
    return this.speed -= 7
  }
}
let myTesla = new Tesla()

// console.log(myTesla.acceleration());
// console.log(myTesla.braking());

class Toyota extends Car {
  constructor(model, year){
    super(model, year)
  }
  acceleration(){
    return this.speed += 5
  }
  braking(){
    return this.speed -= 2
  }
}

let myToyota = new Toyota()


class Volkswagen extends Car {
  constructor(model, year){
    super(model, year)
  }
  acceleration(){
    return this.speed += 7
  }
  braking(){
    return this.speed -= 5
  }
}

let myVolkswagen = new Volkswagen()
