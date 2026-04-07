//6. Write a TypeScript program that creates a class called Student with properties name and roll number. Add constructor overloading to support multiple ways of initializing a Student object. Implement one constructor that takes both name and roll number as parameters and another constructor that takes only name, assuming the roll number is unknown

class Student {
name:string;
roll_number:number;
//overloading 1 -> support name just
constructor(name:string);
//overloading2 -> support both of name,roll number
constructor(name:string,roll_number:number)
// overloading3 -> support one of the name or roll number (optional)
constructor(name:string,roll_number?:number)
{
this.name=name;
this.roll_number=roll_number;
}
}
const std1=new Student('Abdulrahman',2)
console.log(std1.name);
console.log(std1.roll_number);
const std2=new Student('Abdulrahman')
console.log(std2.name)

const std3=new Student('Mohamed',102);
console.log(std3.roll_number);
//notes
// we used ? with roll_number as most constructors  don't provide it while name is used by all of them so you can't make it optional just the unused by one of const will be optional
// ? -> number | undefined 
// overload constructor in TS is supported
// Ts uses overload  signiture -> you define multiple const and at the  bottom of each  one you define the instance under it -> here I define the instance under the bottom one which is still correct


