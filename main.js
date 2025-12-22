//basics of javascript

//1.console in javascript 

console.log("welcome to this page");
console.log("123456");
console.log("33.66");
console.log("true");
console.log([33,66,44,55]);
console.log({fname:'vani',age:20});
console.table({ fname: "vani", age: 20 });
console.error(" custom sample error");
console.warn(" custom sample error");
console.time("Timer");

for(i=0;i<5;i++)
{
  console.log(i);
}
console.timeEnd("Timer")

//2.var,let and const in javascrpit

/* 
var
let
const
*/
 //var
// var a=20
 //var b=30
 //console.log(a+b)

 // scope(we can using var, it's act as globla scope)
 //if(true){
// var msg=("haii vani")
//  console.log(msg)
 //}
 //console.log(msg)

 //here let work only work in only inside
 //if(true){
//    let s=("tamilvani");
//     console.log(s);
 //}


 //same as the let concept
//if (true) {
 // const v= "vani";
 // console.log(v);
//}

//3.variable redecalaration

/* using var we can update the current variable */
//var a=25
//console.log(a)
//var a=30
//console.log(a);

/* let,once we create declare value again cannt change*/

//let c= 25;
//console.log(c);

/* let,once we create declare value again cannt change*/
 //const d=300;
 //console.log(d);

//Value assignmanet

//var e=40;
//console.log(e);
//e=30
//console.log(e)


//let g = 400;
//console.log(g);
//g = 300;
//console.log(g);
  
//const h=100
//console.log(h)
//h=200
//console.log(h)

//4.(primitive data-type)

//var a=20
//var fname="vani"
// var isit=true;
//var phone=null
//let b;
//console.log( typeof a)
//console.log(tyoeof fname)
//console.log(typeof isit)
//console.log(tupeof phone)
//console.log(typeof let)

//ES6 2015 --its create the multiple unique id
//const s=symbol()
//console.log(s)
//const s1=symbol()
//console.log(s1)

//5.(non-primitive)

//var course=['c','c++','java','js']
//var student ={
// 'name':'vani'
// 'age':20}
//var d=new Date()
//console.log(course)
//console.log(typeof course)
//console.log(typeof student)
//console.log(d)
//console.log(typeof d)

//6.type conversion

// let a;
//a=5;
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);

// let a;
//a=5.56;
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);

// let true;
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);


//a=new Date();
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);


//a=[1,2,3,4,5,6];
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);

// another menthod
//a=55;
//console.log(a,typeof a);
//a =tostring();
//console.log(a,typeof a);

//7. type conversion (string - number)

//a="1234";
//console.log(a,typeof a);
//a =Number(a);
//console.log(a,typeof a);

//a=true;
//console.log(a,typeof a);
//a =string(a);
//console.log(a,typeof a);



//a=[1,2,3,4,5,6];
//console.log(a,typeof a);
//a =Number(a);
//console.log(a,typeof a);


//a="vani";
//console.log(a,typeof a);
//a =Number(a);
//console.log(a,typeof a);


//a="33.66";
//console.log(a,typeof a);
//a =parseInt(a);
//console.log(a,typeof a);


//a=54.56;
//console.log(a,typeof a);
//a =parseFloat(a);
//console.log(a,typeof a);

 
//8. type coersion

let s="25";
let t=10;
console.log(s+t)

s=Number(s);
console.log(s+t)



