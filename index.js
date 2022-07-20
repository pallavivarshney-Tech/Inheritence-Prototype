console.log("working");
// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const PersonPrototype = {
profile(){
    console.log(`My name is  ${this.fName} ${this.lName} having an age of ${this.age} joined the course of ${this.course}`);
},
courses(fName,lName,age,course){
    this.fName = fName;
    this.lName = lName;
    this.age =   age;
    this.course = course;
}
}

let personOne = Object.create(PersonPrototype);
PersonPrototype.fName = "Pallavi",
PersonPrototype.lName = "Varshney",
PersonPrototype.age = "24",
PersonPrototype.course = "Elevation Academy",

personOne.profile();
// output   // My name is  Pallavi Varshney, having an age of  24 joined the course of Elevation Academy

//Question2
//Write code to explain prototype chaining.

const myPerson = {
    profile(){
        console.log(`My name is  ${this.fname} ${this.lname} having an age of ${this.age} joined the course of ${this.course}`);
    },
    initialise(fname,lname,age,course){
        this.fname = fname;
        this.lname = lname;
        this.age =   age;
        this.course = course;
    }
}

const nameOne = Object.create(myPerson);
nameOne.initialise("pallavi","varshney",24,"Btech");
nameOne.profile();
console.log(nameOne);

const secondPerson = Object.create(myPerson);
secondPerson.initial = function (name,rollno,DOB,course) {
    myPerson.initialise.call(secondPerson,name,rollno,DOB);
    this.course = course;    
}

secondPerson.introduce = function(){
    console.log(`the person name is ${this.fname} and her age is ${this.age}.`);
}


const thirdName = Object.create(secondPerson);
thirdName.initial("lavi","varshney",25,"btech");
thirdName.introduce();
thirdName.profile();


//Question3
//Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.


let array = [1,2,3,4,5,6,7,8,9,10];
let sum = array.reduce((sum,add)=> sum+add , 2);
console.log(sum);

//57


//  QUESTION 4
//Write a javascript function to retrieve all the name of objects own and inherited properties.

function sayHi (fName, lName, age, DOB) {

    this.fName =fName ;
    this.lName =lName;
    this.age = age;
    this.DOB = DOB;
}
sayHi.prototype.course = "Full Stack"
const HelloHi = new sayHi("Pallavi","Varshney","24","1997");
// console.log("HelloHi");
console.log("The course i am opting is " + HelloHi.course);
