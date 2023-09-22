class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}
class EVCI extends CarCl{
    #charge
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
    }
    accelerate(){
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} is running at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
}

const rivian = new EVCI('Rivian', 120, 23);
rivian.accelerate();
rivian.accelerate();
rivian.brake();
rivian.chargeBattery(90);
console.log(rivian);
