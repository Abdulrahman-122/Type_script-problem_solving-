//5. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created.  

class Student {
name:string;
class_number:number;
constructor(name:string,class_number:number){
this.name=name;
this.class_number=class_number;
}
}
const std1=new Student('Abdulrahman',2)
console.log(std1.name);
console.log(std1.class_number);

