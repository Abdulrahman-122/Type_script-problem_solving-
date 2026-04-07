// Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details

class Engine{
horsepower:string;
fuelType:string;
constructor(horsepower:string,fuelType:string){
	this.horsepower=horsepower;
	this.fuelType=fuelType;	
}}

class Car extends Engine {
  make: string;
  model: string;
  year: number;
 // engine:Engine -> create instance of Engine class
  constructor(make:string,model:string,year:number,horsepower:string,fuelType:string) {
    super(horsepower,fuelType); // instead of this line -> you can create an instance of Engine class  assign to a new property called engine
    //this.engine=engine
    this.make = make;
    this.model = model;
    this.year = year;
  }

print_details(){
	console.log(`This car ${this.make} ${this.model} ${this.year}  ${this.horsepower} ${this.fuelType}  is starting now `) };
}

const Car1=new Car('BMW','1234AD',2002,'12hours','BM11')
console.log(Car1);
Car1.print_details();







