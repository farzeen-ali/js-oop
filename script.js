// OOP => Object Oriented Programming
// Class -> blueprint / template
// Objects -> real world entity
// Properties -> attributes => data store
// Methods -> behavior, action
// Constructors => special method

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`Hello, I'm ${this.name} & my age is: ${this.age}`);
//   }
// }

// const s1 = new Student("Farzeen", 23);
// console.log(s1.name);
// console.log(s1.age);
// s1.introduce();

// car class, model year speed, start accelerate stop 

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    start(){
        console.log(`${this.model} is starting`)
    }

    accelerate(){
        this.speed += 10
        console.log(`${this.model} speed: ${this.speed}`)
    }
    
    stop(){
        this.speed = 0;
        console.log(`${this.model} speed: ${this.speed}`)
    }

}

const c1 = new Car("C", 2025);
c1.start();
c1.accelerate();
c1.stop();

const c2 = new Car("D", 2026);
c2.start();
c2.accelerate();
c2.stop();