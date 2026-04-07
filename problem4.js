// Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
    return Engine;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    // engine:Engine -> create instance of Engine class
    function Car(make, model, year, horsepower, fuelType) {
        var _this = _super.call(this, horsepower, fuelType) || this; // instead of this line -> you can create an instance of Engine class  assign to a new property called engine
        //this.engine=engine
        _this.make = make;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    Car.prototype.print_details = function () {
        console.log("This car ".concat(this.make, " ").concat(this.model, " ").concat(this.year, "  ").concat(this.horsepower, " ").concat(this.fuelType, "  is starting now "));
    };
    ;
    return Car;
}(Engine));
var Car1 = new Car('BMW', '1234AD', 2002, '12hours', 'BM11');
console.log(Car1);
Car1.print_details();
