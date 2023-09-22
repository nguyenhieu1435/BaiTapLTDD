function Car(make, speed){
    this.make = make;
    this.speed = speed;

    this.accelerate = function(){
        this.speed += 10;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    this.brake = function(){
        this.speed -= 5;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }


}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log("Car 1 run: ")
car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
console.log("Car 1 stopped")

console.log("Car 2 run: ")

car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();

console.log("Car 2 stopped")