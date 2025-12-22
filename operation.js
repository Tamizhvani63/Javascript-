//operation in javascript

//1.arthematic operation

//let a=100;
//let b=200;
// let c;
//c=a+b
//c=a-b
//c=a*b
//c=a/b
//c=a%b
//c=2*5
//c=++a
//c=--a
//console.log(c)

//2.assignment operators

/*
 let a=6;

 a=a+5; //+=
a+=5;
a-=5;
a*=5;
a/=5;
a%=5;
console.log(a);
*/

//3.comparison operator
/*
 let a=10;
 let b=20;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
*/

//4.Relational Operator 

// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to
 
/*
 let a=40;
let b=35;
console.log(a>b);   
console.log(a<b);  
console.log(a>=b);
console.log(a<=b);
*/

//5.Logical Operator
 
//&& logical AND
//|| logical OR
//! logical NOT

/*
let mark=45;
console.log(mark>=35 && mark<=100);

let a = 6;
console.log(a==2 || a==5);

a=true;
console.log(!a);
*/

//6.strict equality or Identity Operator
 
// let a=10;
// let b='10';
// console.log(a===b);


//7.Conditional or Ternary Operator

// let age=15;
// let result = age>=18?'Eligible':'Not Eligible';
// console.log(result);

//8.Handling Null values;

/*
 function welcome(name){
     const result=name?name:"Stranger"
     console.log("welcome "+result);   
 }
 welcome(null);
 welcome();
 welcome('tamil')
 

user={'name':'tamil','age':20};
console.log(user);
console.log(user.name);
 */

//9.conditional Chains


/*
avg >=90 A
avg >=80 B
C grade
*/

// const avg=70;
// const grade= avg >=90? "A Grade":avg >=80? "B Grade":"c Grade";
// console.log("Grade :",grade);

//10. Bitwise Operator

// BITWISE AND &
// let a=12;//1100
// let b=24;//11000

// console.log(a&b);

//&=
// a&=b;
// console.log(a);

 /*
 0001 1000    24
 0000 1100    12
 ---------------
 0000 1000    8

*/

//BITWISE OR (|)

// a=12;//1100
// b=24;//11000
//  console.log(a|b);

// a|=b;
// console.log(a);
 

// /*
// 0001 1000    24
// 0000 1100    12
// ---------------
// 0001 1100    28
// */


// //~NOT  ~a = -a-1 

// a=11;  //-25 -1 =-26
// console.log(~a); //-26

// //^XOR

// a=24;
// b=16;
// console.log(a^b);//8

// /*
// 0001 1000     24
// 0001 0000     16
// ---------------
// 0000 1000     8
// */


// //LEFT SHIFT <<
// a=5;      //5 =101 << 2 = 10100 ---> 20 
// b=2;
// console.log(a<<b);//10100 --- 20
// a<<=b;
// console.log(a);//20

// //RIGHT SHIFT >>
// a=8;    //8 = 1000 >> 2 = 0010 ---> 2
// b=2;
// console.log(a>>b);
// a>>=b;
// console.log(a);

// 11. Nullish Coalescing Operator(??)

// const a=null??'No Value';
// console.log(a);

// const b =null??45;
// console.log(b);

// //??=

// const user = {'name':'vinith'};
// console.log(user);
// console.log(user.name);
// user.city??='salem';
// console.log(user.city);
// console.log(user);

//12.Increment (++) or Decrement(--)

let a = 1;
a++; //a=a+1;
console.log(a);

let b = 5;
b--; //b=b-1;
console.log(b);

/*
PostFix Increment a++
PreFix Increment ++a
*/

let x = 3;
const y = x++; //3
console.log("X:", x, "Y", y);

let i = 3;
const j = ++i; //4
console.log("I:", i, "J", j);
