function Car(make, speed){
    this.make = make;
    this.speed = speed;

    this.accelerate = ()=>{
        this.speed += 10;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
    this.brake = () => {
        this.speed -= 5;
        console.log(`${this.make} is running at ${this.speed} km/h`);
    }
}

function EV(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;

    this.chargeBattery = function(chargeTo){
        this.charge = chargeTo;
    }
    
    this.accelerate = function(){
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is running at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }

}

const testla = new EV('Testla', 120, 23);
testla.accelerate();
testla.brake();
testla.chargeBattery(90);
console.log(testla);