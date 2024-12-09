var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make,
            this.year = year,
            this.model = model;
    }
    Car.prototype.start = function () {
        console.log("Car engine Started");
    };
    return Car;
}());
var myCar = new Car("Aston martin", "DBS Superlegerra", 2019);
myCar.start();
