//class & Inheritance in js  ES5 version

/*
function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function(){
    console.log("hello,my name is " + this.name);
}

var Person1 = new Person("vani")
console.log(Person1)
Person1.sayHello()

function Student (name,age){
    Person.call(this,name)
    this.age=age;
}
  //prototype chaining
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.eligiblity=function(){
   console.log(this.name + "age is "
     + this.age + 
     " " + (this.age >=18 ? " Eligible " : "Not Eligible "));

}
var Student = new Student(" Ram ", 38);
console.log(Student);
Student.sayHello();
Student.eligiblity();



*/







//-----------------------------------------------
//example

/*
function Mobile(brand, price) {
  this.brand = brand;
  this.price = price;
}

Mobile.prototype.call = function () {
  console.log(this.brand + " is calling...");
};

let m1 = new Mobile("Samsung", 20000);
let m2 = new Mobile("iPhone", 70000);

m1.call();
m2.call();
*/

//----------------------------------------------------------------------------------------------
//ES6 version example:


//syntax of class
/*
class className{
    constructor(){
     //properties
    }
     methodName(){
     //behaviour
     }
}
*/
/*
class person{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("hello, my name is " + this.name);

    }
}
var person1 = new person("hari")
console.log(person1)
person1.sayHello();
*/

//Real time example:
/*
Bank-la ella account-kum same actions irukkum
---> deposit, withdraw, balance check
*/
/*
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(amount + " deposited");
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(amount + " withdrawn");
  }

  getBalance() {
    console.log("Balance:", this.balance);
  }
}

let acc1 = new BankAccount("Vani", 5000);
let acc2 = new BankAccount("Anu", 8000);


acc1.deposit(2000);
acc1.getBalance();

acc2.withdraw(3000);
acc2.getBalance();
*/

/*
class Person{
  constructor(name){
    this.name=name;
  }
  sayHello(){
    console.log("Hello , my name is " + this.name); 
  }
}
var person = new Person("honey");
console.log(person);
person.sayHello();

class Student extends Person
{
   constructor(name,age){
     super(name);
     this.age=age
   }
   eligiblity=function(){
   console.log(this.name + " age is "
     + this.age + 
     " " + (this.age >=18 ? " Eligible " : "Not Eligible "));
   }
}

var student =new Student ("zara",23);
student.sayHello();
student.eligiblity();
*/

//---------------------------------------------------------------

// 2.Getter and setter in js

//Getter and setter in Js;
//Example 1: Getters and Setters with object literals

/*
const person = {
    firstName: 'tamil',
    lastName: "vani",
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

console.log(person);
console.log(person.firstName);
person.firstName = "ram";
console.log(person.fullName);
person.fullName = 'Tamil Vani';
console.log(person.fullName);

*/

/*
//Class type ;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
         return this.firstName + " " + this.lastName;
    }
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
   }
}

const p1 = new person("thiru",'Pugal');
console.log(p1);
console.log(p1.fullName);
p1.fullName = 'vani sri'
console.log(p1);
console.log(p1.fullName);

class circle {
    constructor(radius){
       this.radius = radius; 
    }

    get diameter(){
        return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);
myCircle.diameter = 12;
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);

*/

/*
//static method:

class Person {
    constructor(name){
        this.name = name;
    }
    info(){
        console.log(this.name);
    }
}

const person = new Person('tamil');
person.info()


class MyClass {
    static myStaticProperty = "vani "
    static myStaticMethod(){
        console.log("I am from Static method");
    }
}

MyClass.myStaticMethod();
console.log(MyClass.myStaticProperty);

*/


// //Utility Classes
// class Mathutils {
//     static add(a,b){
//         return a + b;
//     }
//       static subtract(a,b){
//         return a - b;
//     }
//       static multiply(a,b){
//         return a * b;
//     }
//       static divide(a,b){
//         return a / b;
//     }
// }

// console.log(Mathutils.add(10,30));
// console.log(Mathutils.multiply(10,30));
// console.log(Mathutils.subtract(10,30));
// console.log(Mathutils.divide(10,30));

// //Example 2: Singleton Pattern :

/*
class DataBase {
    static instance = "vani";
    static getInstance() {
        if (!DataBase.instance){
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    query(sql) {}
}

const db1 = DataBase.getInstance();
const db2 = DataBase.getInstance();
console.log(db1 === db2);
*/

 // static colors :(constants)

/*
class Colors{
    static RED = "#ff0000"
    static GREEN = "#00ff00"
    static BLUE = "#0000ffff"
}

console.log(Colors.RED);
console.log(Colors.GREEN);
console.log(Colors.BLUE);
*/

//-----------------------------------------------------
//Prototype:

// let arr = ["apple","orange"];

// let obj = {
//     name:"vani",
//     city:"palakadu",
//     info: function (){
//         return `${this.name} from ${this.city}`;
//     },
// };

// function myFunction() {}


// let obj1 = {
//     name:"tamil",
//     city:"kerala",
//     info: function (){
//         return `${this.name} from ${this.city}`;
//     },
// };

// let obj2 = {
//     name: "Raja",
//     city: "chennai",
// };

// obj2.__proto__ = obj1;
// const obj2 = Object.create(obj1);
// obj2.name = "Vani";

// Array.prototype.doubleLength = function() {
//     return this.length * 2;
// };

// Function.prototype.myBind = function (){
//     console.log("This is Bind Function in Prototype");
    
// };

// function fun() {}

function Person(name){
  this.name=name;
}
Person.prototype.greet = function () {
    console.log(`hello, my name is ${this.name}.`);
}
const alice=new Person("alice");
const bob=new Person("bob");

alice.greet();
bob.greet();


