function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.getInfo = function() {
    return `Kendaraan merek ${this.brand}`;
};

function Car(brand, doors) {
    Vehicle.call(this, brand); // Memanggil parent constructor
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car1 = new Car("Toyota", 4);
const car2 = new Car("Honda", 2);

console.log(car1.getInfo()); // Output: Kendaraan merek Toyota
console.log(car1.doors);     // Output: 4

console.log(car1.getInfo === car2.getInfo); // Output: true