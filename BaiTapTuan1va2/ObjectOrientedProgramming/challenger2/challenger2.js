class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate = function(){
        this.speed += 10;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    brake = function(){
        this.speed -= 5;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
    get speedUS(){
        return this.speed / 1.6;
    }
}

const car1 = new CarCl('Ford', 120);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();
car1.speedUS = 50;
console.log(car1.speedUS);


