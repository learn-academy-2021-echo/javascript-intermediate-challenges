// Inheritance exercise

// 1. Story: As a programmer, I can make a car. Write a variable called myCar which is an instance of the class Car
// class Car{
//     constructor(){

//     }
// }
// let myCar = new Car()
// console.log(myCar)

// 2. Story: As a programmer, I can give my car a model on initialization. The model for the car class can be "generic car"
// class Car{
//     constructor(a){
//         this.model = a
//     }
// }
// let myCar = new Car("generic car")
// console.log(myCar)

// 3. Story: As a programmer, I can give my car a year on initialization. The year for the car class can be "myCar year"
// class Car{
//     constructor(a){
//         this.year = a
//     }
// }
// let myCar = new Car("myCar year")
// console.log(myCar)

// 4. Story: As a programmer, I can tell how many wheels myCar has. Calling the method wheels will return 4
// class Car{
//         constructor(){
//         }
//         wheels(){
//             return 4
//         }
//     }
//     let myCar = new Car()
//     console.log(myCar.wheels())

// 5. Story: As a programmer, I can make a Tesla car. class Tesla inherits from class Car. Create an object called myTesla which is a instance of class Tesla
class Car{
    constructor(){
    }
}
class TeslaCar extends Car{
    constructor(){
        super()
    }
}
let myTesla = new TeslaCar
console.log(myTesla)

// 6. Story: As a programmer, I can give my Tesla a model on initialization. The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 7. Story: As a programmer, I can give my Tesla a year on initialization. The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 8. Story: As a programmer, I can make a Toyota car. class Toyota inherits from class Car. Create an object called myToyota which is a instance of class Toyota

// 9. Story: As a programmer, I can give my Toyota a model on initialization. The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 10. Story: As a programmer, I can give my Toyota a year on initialization. The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 11. Story: As a programmer, I can make a Volkswagen car. class Volkswagen inherits from class Car create an object called myVolkswagen which is a instance of class Volkswagen

// 12. Story: As a programmer, I can give my Volkswagen a model on initialization. The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// 13. Story: As a programmer, I can give my Volkswagen a year on initialization. The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// 14. Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// 15. Story: As a programmer, I can turn the lights in all my cars on and off.

// 16. Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// 17. Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// 18. Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// 19. Story: As a programmer, I can slow my Tesla down by 7 per braking.

// 20. Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// 21. Story: As a programmer, I can slow my Toyota down by 2 per braking.

// 22. Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// 23. Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// 24. Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// 25. The method can be created in the parent class and accessed by all child classes