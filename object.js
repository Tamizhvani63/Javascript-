//Exploring the Different ways to(Create Object )in javascript
//------------------------------------------------------------
/*//1.Object Literal Notation:


const student={
    fullname:"tamil",
    father:"sam",
    age:21,
    address:"cherry road",
    city:"salem",
    about:function(){
        return `${this.fullname} is from ${this.city}`;
    },
    eligiblity: function(){
        return this.age>=18
    }
}
console.log(student);
console.log(student.about())
//-----------------------------------------------------------
// 2.Factory Function:

function addStudent(fullname,father,age,address,city){
    const user={};
    user.fullname =fullname;
    user.father=father;
    user.age=age;
    user.address=address;
    user.city=city;
    user.about=function(){
        return `${this.fullname} is from ${this.city}`;
    };
    user.eligiblity= function(){
        return this.age>=18
    }
    return user;
    
}
console.log(addStudent("vani","Raja",23,"Ghandhi Road" ,
"salem"))
*/
//-----------------------------------------------------
//3. Portotype Inheritance:

// const studentMethod={
//      about:function(){
//         return `${this.fullname} is from ${this.city}`;
//     },
//     eligiblity: function(){
//         return this.age>=18
//     }
// }


// function addStudent(fullname, father, age, address, city) {
//   const user = {};
//   user.fullname = fullname;
//   user.father = father;
//   user.age = age;
//   user.address = address;
//   user.city = city;
//   user.about=studentMethod.about;
//   user.eligiblity=studentMethod.eligiblity;
//   return user;
// }
// console.log(addStudent("Tamil", "Raja", 23, "Ghandhi Road", "salem"));
// console.log(addStudent("Tamil", "Raja", 23, "Ghandhi Road", "salem"));

//---------------------------------------------------
// const obj1={
//     key1:"value 1",
//     key2:"value 2"
// }
// console.log(obj1);

// const obj2= Object.create(obj1);
// obj2.key3="value 3"
// obj2.key2 = "new value 3";
// console.log(obj2);
// console.log(obj2.key1);
// console.log(obj2.key2);

//------------------------------------------------------
// Optional chaining in javascript
/*
const user={
    name :'steve',
    address:{
       city :'salem'
    }
}
console.log(user);
console.log(user.address)
console.log(user.address.city)
*/

// const user = {
//   name: "steve",
// //   address: {
// //     city: "salem",
// //   },
// };
// //Option1
// console.log(user.address?user.address.city:undefined);
// //option2
// console.log(user.address && user.address.city);
// //Optional chaining-3
// console.log(user.address?.city);

// let key='city';
// console.log(user.address?.[key]) 
//---------------------------------------------------------
// const user_details = {
//   userId: "345",
//   account: {
//     accountNumber: "AE75457",
//     holder: {
//       profile: {
//         firstName: "Tamil",
//         lastName: "vani",
//         birthDate: "1989-10-12",
//       },
//     },
//     contact: {
//       address: {
//         city: "salem",
//         state: "Tamil Nadu",
//         country: "India",
//       },
//     },
//     phone: [
//       {
//         type: "home",
//         phoneNumber: "9043215674",
//       },
//       {
//         type: "home",
//         phoneNumber: '8905647382',
//       },
//     ],
//   },
// };
// console.log(user_details);
// //console.log(user_details.account.holder.profile.birthDate);
// console.log(
//   user_details.account && user_details.account.holder &&
//     user_details.account.holder.profile.birthDate
// );
// //optional chaining:
// console.log(user_details.account?.holder.profile?.birthDate)
//--------------------------------------------------------------
 
//3. FUNCTION INSIDE OBJECT IN JAVASCRIPT
/*
const object = {
  name: "tamilvani",
  age: 21,
  // method:function(){
  //   console.log("I'am Method")
  // }
  // method () {
  //   console.log("I'am Method");
  // },
  method:()=>{
    console.log("I'am Method");
  },
};
console.log(object);
console.log(object.name);
object.method();
*/

/*
console.log(this);
var age=25;
function info(){
  console.log( this.age);
  console.log(this)
}
info()

const user={
  age:21,
  fun:info,
  nested:{
    fun:info
  }
}
user.fun();
user.nested.fun()
*/

// const student={
//   age:21,
//   fun1:function(){
//     console.log("Fun 1 : ",this.age);
//     console.log("fun 1 : ",this)
//     function fun2(){
//         console.log("Fun 2 : ", this.age);
//         console.log("fun 2: ", this);
//     }
//     fun2();
//     const fun3=()=>{
//        console.log("Fun 3 : ", this.age);
//        console.log("fun 3 : ", this);
//     }
//     fun3()

//   }

// }
// student.fun1()

//   const fun4= () => {
//     console.log("Fun 4 : ", this.age);
//     console.log("fun 4 : ", this);
//   };
//   fun4();

//--------------------------------------------------------------------
//ARRAY DESTRUCTURING:
//Before ES
/*
const number=[1,2,3,4,5];
const first =number[0];
const second =number[1];
const rest = number.slice(2)
console.log(first);
console.log(second);
console.log(rest);
*/
     //OR (AFTER ES6)
// const number=[1,2,3,4,5];
// const[first,second, ...rest]=number;
// console.log(first);
// console.log(second);
// console.log(rest);

  //--------------------------------------------

//OBJECT DESTRUCTURING
//BEFORE ES6
/*
const person ={
  name:"tamil",
  age:21,
  gender:"female",
}
const name=person.name;
const age = person["age"];
const gender = person.gender;
console.log(name);
console.log(age);
console.log(gender);

//ES6 VERSION
const person = {
  name: "tamil",
  age: 21,
  gender: "female",
};
const { name,age,gender}= person;
console.log(name);
console.log(age);
console.log(gender);
*/

//--------------------------------------------------------------------

// Using default value with array destructuring
/*
const numbers=[1,2];
const [x, y ,z=3]= numbers ;
console.log(x)
console.log(y);
console.log(z);

const person={name:"vani",age:21};
const{name,age,gender='female'} = person;
console.log(name);
console.log(age);
console.log(gender);
*/

// Swapping Variable:

// let a=1;
// let b=2;
// let c;
// console.log(a);
// console.log(b);
// c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);
  //or we use:

// let a=1;
// let b=2;

// [a,b]=[b,a];
// console.log(a);
// console.log(b);

//----------------------------------------------------------------------

//Skipping Unwanted Items with Destructuring Assignment:

// let myArray =[1,2,3,4,5];
// let[first,,,fourth]=myArray
// console.log(first);
// console.log(fourth);
/*
let myArray =[1,2,3,4,5,6,7,8];
let [first, second, ...rest] = myArray;
console.log(first);
console.log(second);
console.log(rest);


let myObj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7};
let {a,b, ...rest}=myObj;
console.log(a);
console.log(b);
console.log(rest);
*/

/*
const user={
  name:'Sara',
  address:{
    city:"Palakadu",
    state:"Kerala",
    country:"India",
  }
};

const{name,address:{city,state}}=user
console.log(name);
console.log(city);
console.log(state)


const number=[1,2,[3,4,[5,6]]];
const[a,b,[c,d,[e,f]]]=number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
*/

//array of object
// const user = [
//   {
//       name: "Sara",
//       address: {
//       city: "Palakadu",
//        state: "Kerala",
//       country: "India",
//       },
//  },
//   {
  
//     name:'vani',
//     address:{
//     city:"thirshur",
//     state:"Kerala",
//     country:"India",
//      }
//   }
// ];
// const [
//   {
//     name:name1,
//     address:{city:city1}
//   },
//   {
//     name:name2,
//     address:{city:city2}
//   }
// ]=user;
// console.log(name1);
// console.log(city1);
// console.log(name2);
// console.log(city2);

//-------------------------------------------------------------------

//ARRAY AND OBJECT DESTRUCTURING IN JAVASCRIPT

//ARRAY:

// let numbers=[1,2,3,4,5,6];
/*
let a=numbers[a];
let b=numbers[b];
*/
// let [a,b,c,...rest]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);
/*
let nestedArray =[[1,2],[3,4],[5,6]];
let [[a,b],[c,d],[e,f]]=nestedArray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
*/
//OBJECT:

// let person ={name:"zara",age:21,gender:"female"};
// let {name,age,gender=unknown}=person;
// console.log(name);
// console.log(age);
// console.log(gender);
/*
let address={
  street:"cherry Rode",
  city:"salem",
  state:"Tamilnadu",
  zip:"6363007"
}

let employee={
  name:"tiya",
  age:21,
  gender:"female",
  address
};
console.table(employee);
let {name,age,gender,address:{street,city,state,zip}}=employee;
console.log(name);
console.log(age);
console.log(gender);
console.log(street);
console.log(city);
console.log(state);
console.log(zip);
*/

//-----------------------------------------------------

//create object in javascript:

//1. Using Object Literals:
/*
const person={
  name:"zara",
  age:20,
  job:"Developer"

};
console.log(person)
*/

//2.Using the Object construction:
/*
const person=new Object();
person.name="john";
person.age=30;
person.job="Developer";
console.log(person);
*/

//3.Using the Object.create()method:
//Object.create(prototype,propertiesObject);

/*
 const personproto={
  sayHello:function(){
    console.log(`Hello,my name is ${this.name}`);
  }
 }
 const person=Object.create(personproto)
 person.name="Tamil"
 person.age=30;
 person.job="Developer";
 console.log(person);
person.sayHello();
 */

//4.Using class:
/*
 class person
 {
  constructor(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
  }
 }
const persons=new person("zara",25,"Developer")
console.log(persons);
*/

//----------------------------------------------
//Dot Notation and Bracket Notation in javascript
/*
const user = {
  name: "zara",
  age: 20,
  job: "Developer",
};
console.log(user);

//Dot Notation:
console.log(user.name);
user.name="vani"
console.log(user.name);
console.log(user);

//Bracket Notation:
console.log(user["age"])
user["age"]=25;
console.log(user["age"]);
console.log(user);

const prop="name"
console.log(user[prop])
*/

// let user={
//   "first name":"divya",
//   "last name":"sri"
// }
// console.log(user["first name"])
// console.log(user["last name"]);
//   // console.log(user.first name);--->its not work

// let key='first name';
// console.log(user[key]);

//-------------------------------------------------
//Iteration Through Javascript Object:

//Using the for-in loop

// const user = {
//   name: "zara",
//   age: 20,
//   job: "Developer",
// };
// console.log(user);

// for (let key in user){
//   console.log(`${key} : ${user[key]}`);
// }
//Using Object.key()

// const keys=Object.keys(user);
// console.log(keys)

// keys.forEach(key=>{
//   console.log(`${key} : ${user[key]}`);
// })

//Using Object.value()

// const values= Object.keys(user);
// console.log(values);

// keys.forEach((value) => {
//   console.log(`${value}`);
// });

//using Oblect.entries()
/*
const entries=Object.entries(user);
console.log(entries)

entries.forEach(entry=>{
  console.log(`${entries[0]} : ${entries[1]}`)
})

for(let i=0;i<entries.length;i++){
   console.log(`${entries[i][0]} : ${entries[i][1]}`);
}

*/
//-----------------------------------------------------

//Object inside Arrays in javascript

// const users = [
//   { name: "tamil", age: 45, email: "aktamil.com" },
//   { name: "zara", age: 32, email: "sktamil.com" },
//   { name: "vani", age: 25, email: "akvani.com" },
// ];
// console.log(users);

// for (const user of users);
// {
//   //console.log(user);
//   console.log(users.name);
// }

// const  olderUser=users.filter(user=>user.age>30);
// console.log(olderUser);
//-------------------------------------------------

//Difference between Rest parameter Function and spread
//Operation in Javascript
/*

//1.Rest parameter Function
function myFunction(fisrt,second, ...rest){
       console.log(fisrt);
       console.log(second);
       console.log(rest);

}
myFunction(10,20,30)


//2.spread operator

let myArray=[1,2,3];
let newArray=[...myArray,4,5];
console.log(newArray)

*/ 

//--------------------------------------------
//parameter destructuring in js
/*
function sayHello({name,age}){
  console.log(`hello,${name}!`);
  console.log(`age is,${age}!`);

}
const person={name:'vani',age:20}
sayHello(person);

const numbers=[1,2,3]
function add ([a,b,c]){
  return a+b+c
}
console.log(add(numbers));
*/
/*
const person={
  name:'vani',age:21,city:'kerala',country:'India'
};

function sayHello({name,age, ...rest}){
  console.log(`hello,${name}! your age${age} years old`)
  console.log(rest);
}
sayHello(person);
*/
//--------------------------------------------------------

//call,Apply,and bind Methods in javascript

/*
function tamil(){
  console.log(this)
}
console.log(tamil.name)
console.log(tamil.toString());
tamil();
tamil.call();
*/


//var user_name="zara"
function welcome(){
  console.log("welcome : "+this.user_name);

}
const student={user_name:"Raja"};
welcome.call(student);


function total(eng,mat){
  console.log(this.user_name + " got " + (eng + mat) + "marks");

}
total(25,25)
total.call(student,25,25)

//apply method
let subjects=[25,23];
total.apply(student,subjects);


//bind Method

const fun = total.bind(student,85,95);
console.log(fun);
fun();

const person={
  firstName:"Tamil",
  lastName:"vani",
  fullName:function(){
    return this.firstName + " " + this.lastName;
  }

}
console.log(person.fullName())
const anotherperson = {
  firstName: "diviya",
  lastName: "sri",

};
console.log(person.fullName.call(anotherperson))