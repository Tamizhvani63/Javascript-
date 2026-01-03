// Math Function (In-Built Function)

// let c;
// c=Math.PI;
// c=Math.E;
// c=Math.round(5.8); //6
// c=Math.floor(5.3); //its  remove the valve after decimal
// c=Math.ceil(5.3); // print next greatest value o/p 6
// c=Math.sqrt(90);
// c = Math.abs(-85);
// c=Math.trunc(2.58); // its print integer num
// c=Math.pow(2,4) //16
// c=Math.min(10,20,3,40,50) //3
// c = Math.max(10, 20, 3, 40, 50);//50
// c=Math.random(); //print random number
// c=Math.floor(Math.random()*50+1);
// c=Math.sign(25); //if its positive ans 1, or  it show negative -1 ,its 0 means 0.
// c= Math.sin(55);
// c = Math.cos(45);
// c = Math.log(50);
// c = Math.log2(35);
// console.log(c) // o/p --->2.7182818284...


//String function in javascript

// let first_name="tamil";
// let last_name="vani";

// //concatenation

// let m=first_name+" "+last_name;
// console.log( "concatenation : "+m);

// //concat

// s = first_name.concat('',last_name);
// console.log("concatenation : " + s);

// //append

// b="Thiru"
// b+="pugal"
// console.log("append : "+b)

// //Escaping

// d='she can\'t run';
// console.log(d);

// //Length
   
// c=first_name.length;
// console.log("length : " +c)

// // upercase and lowercase
// c=first_name.toUpperCase();
// console.log("uppercase : " + c);


// c = first_name.toLowerCase();
// console.log("Lowercase : " +c);

// // how to find index value
// c=first_name.indexOf('i');
// console.log("indexof i : " +c);

// c = first_name.lastindexOf("m");
// console.log("indexof m : " + c);

//char at function

// c= first_name.charAt(3);
// console.log("charAt 3 : " +c);

// c = first_name.charCodeAt(4); //ASCII value
// console.log("charCodeAt : "  +c);

//  //substr 
//  c=first_name.substr(0,3);
//  console.log("substr : "+c);

//  //substring
//   let text="01234567890";

//   g=text.substring(0,4) 
// console.log("substring : "+g);

//  g=text.substring(5);
//  console.log("substing : "+g)

// g = text.substring(4, 0);
// console.log("substring : " + g);

// g=text.substring(30,40)
// console.log("substring  Invalid Length : " + g);

// g = text.substring(-3);
// console.log("-3 : " + g); //its not work

//    //slicing

// c=text.slice(2,4);
// console.log("slice : "+c)

// c = text.slice(4, 2);
// console.log("slice : " + c);

//  c= text.substring(30, 40);
// console.log("sclice Invalid Length : " + g);

// c = text.slice(-3);
// console.log("slize -3 : "+c)

// //split;
// let a="iam tamil vani from kerala";
// c=a.split(' ')
// console.log('split: '+c);
// console.table(c);

// // replace:
//  a="I am From kerala";
//  console.log("Before replace :"+a);
//  c=a.replace('kerala','Erode');
//  console.log("after replace :"+a);

//  //includes;
//  const pets = ['cat','dog','bat'];
//  console.log(pets.includes('cat'));
//  console.log(pets.includes('rat'));


// //  Trim
// a= ' vani ';
// console.log('Before trim; '+a.length);
// a=a.trim();
// console.log('After trim; '+a.length);


// //padstart padend;
// a='5';
// a=a.padStart(5,0);
// console.log(a);

// b="3"
// b=b.padEnd(4,0);
// console.log(b);

// // string literals

// let longstring= "c is the powerful general-purpose programming languvage"+
// "develop at the Bell Laboratories of USA in 1972"+
// "it was designed and written by Dennies Ritchie....";



// //fromcharcode:

// console.log(String.fromCharCode(65,66,67.122,98));


//1.FUNCTION WITH RETURN STATEMENT

// function add(a,b){
//     return a+b;
// }
// console.log(add(12,13));
// console.log(add(30,40));

//Function with Arbitray arguments

//METHOD 1 Argument Object

// function sum() {
//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }

//   console.log(total);
// }

// sum(5, 10);
// sum(10, 20, 30);
// sum(1, 2, 3, 4, 5);

//METHOD 2  Rest Parameter (...)

// function sum(...numbers) {
//   let total = 0;

//   for (let num of numbers) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(5, 5));
// console.log(sum(10, 20, 30));
// console.log(sum(1, 2, 3, 4));


// 2.FUNCTION AS EXPRESSION

// const add=function(a,b){
//     return a+b;

// }
// console.log(add);
// console.log(add(30,50))

// ARROW FUNCTION
// const functioname = (parameter) => {function body};

// const add=(a,b)=>{ return a+b;}; 
// console.log(add)
// console.log(add (25,30))

//1.arrow function with map()

let numbers=[1,2,3,4,5];
console.log(numbers)
let doubleNumbers=numbers.map(number=>number*2)
console.log(doubleNumbers);

//2.using arrow function with filter():

// let words = ['apple','orange','banana','grapes']
// let filteredWords=words.filter(word=>word.length>5)
// console.log(filteredWords);

//3.using arrow function with reduce();

console.log(numbers)
let total=numbers.reduce((sum,number)=>sum+number,0);
console.log(total);

//4.using arrow function to create a closure:

let createcounter =()=>{
    let count=0;
    return ()=>{
        count++;
        return count;
    }
};
let counter=createcounter();
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//CALLBACK FUNCTION IN JAVASCRIPT

function mycallback(){
    console.log("iam a callback function");
}
function test(fun){
    fun()
}
test(mycallback);

//setTimeout(function,1000);

setTimeout(function(){
    console.log("Hello World");
},3000);

//setInterval

// setInterval(function () {
//   console.log("Hello tamilvani");
// }, 3000);

// const numbers=[1,2,3];
// numbers.forEach(function(number){
//         console.log(number);
// })


//SCOPE IN JAVASCRIPT
//1.Block scope
//2.Function scope

//  if (true) {
//     let blockscopevariable='iam a variable with blockscope';
//     console.log(blockscopevariable);
//   }
//    console.log(blockscopevariable);
   
 
//  function myfunction(){
//      functionscopevariable='haii this is variable with function scope';
   
//     console.log(functionscopevariable);

//     function add()
//     {
//         console.log(functionscopevariable);
//     }
//     add();
//  }
//  myfunction();