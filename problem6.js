//6. Write a TypeScript program that creates a class called Student with properties name and roll number. Add constructor overloading to support multiple ways of initializing a Student object. Implement one constructor that takes both name and roll number as parameters and another constructor that takes only name, assuming the roll number is unknown
var Student = /** @class */ (function () {
    // overloading3 -> support one of the name or roll number (optional)
    function Student(name, roll_number) {
        this.name = name;
        this.roll_number = roll_number;
    }
    return Student;
}());
var std1 = new Student('Abdulrahman', 2);
console.log(std1.name);
console.log(std1.roll_number);
var std2 = new Student('Abdulrahman');
console.log(std2.name);
var std3 = new Student('Mohamed', 102);
console.log(std3.roll_number);
