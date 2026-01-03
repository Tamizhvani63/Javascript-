/*
// ARRAY

let a=[10,20,30,40]
console.log(a);
console.table(a);
console.log(a[2]);

//array constractor(new Array)

let b=new Array(10,20,30,40,50,60)
console.table(b)

let c= new Array("tamil",30,true,{m1:100,m2:99,m3:97})
console.table(c)

// 1. foreach

const num=[1,2,3,4,5,6,7,8,9,10]
// argument(value,index,array)
num.forEach(value=>{
    console.log(value)
})

num.forEach((value,index) => {
  console.log("Index : " +index +" "+ "value : "+value);
});

const users=[
    {full_name:"vani",age:21,city:"salem",salary:100000},
    {full_name:"sara",age:20,city:"palakadu",salary:200000},
    {full_name:"tara",age:21,city:"ooty",salary:300000},
    {full_name:"pugal",age:23,city:"salem",salary:400000},
    {full_name:"thiru",age:22,city:"kerala",salary:300000},


];
users.forEach(value=>{
    console.log(value.age)
})

//Exploring the array forEach in js

//1.Example of using the for forEach method to ,
//print each element of an array

const fruit =['apple','banana','cherry','orange'];
console.log(fruit);
fruit.forEach(value=>{
    console.log(value)
})

//2.Example of using the forEach method to,
//print all element of an array

const number=[1,2,3,4,5,];
let total=0;
number.forEach(number=>{
    total+=number;
    
})
console.log(total)

//3.Example of using the foreach menthod to,
//create a new array from an existing one:

const doublenumber = [];
number.forEach((number) => {
  
    doublenumber.push(number*2);
});
console.log(doublenumber)

//4.Example of using the forEach method to,
//find the max element of an array:
console.log(number);
let max=number[0];
number.forEach(number=>{
    if (number>max){
      max=number;
    }
})
console.log(max);

//5.Example of using the forEach method
//to calculate the average of an array
console.log(number);
total=0;

number.forEach(number=>{
     total+=number;
});
console.log(total/number.length);
*/

//6. Example of using the forEach menthod
//to filter an array

// const number=[1,2,3,4,5,6,7,8,9,10];
// const evenNumbers=[];

// number.forEach(number=>{
//     if(number%2===0){
//         evenNumbers.push(number);
//     }
// })
// console.log(evenNumbers)

//7. Example of using the forEach menthod
//to update element of an array

// const names=['vani','steve','nancy','el'];
// names.forEach((name,index)=>{

//     console.log(name,index);
//     names[index]=name.toUpperCase()
// })
// console.log(names)
    
//map() Method in javascript
// const number=[1,2,3,4,,5,6,7,8,9,10]
// //map(value,index,array)
// let sqrt=number.map((value)=>{
//     return Math.sqrt(value).toFixed(2);
// })
// console.log(sqrt)
// console.table(sqrt);

//

// const users = [
//   { full_name: "vani", age: 21, city: "salem", salary: 100000 },
//   { full_name: "sara", age: 20, city: "palakadu", salary: 200000 },
//   { full_name: "tara", age: 17, city: "ooty", salary: 300000 },
//   { full_name: "pugal", age: 23, city: "salem", salary: 400000 },
//   { full_name: "thiru", age: 18, city: "kerala", salary: 300000 },
// ];

// console.table(users)
// let eligible_status=users.map((user)=>({
//    /*full_name:user.full_name,
//    age:user.age,
//    city:user.city,
//    salary:user.salary,*/
//    ...user,
//    status:user.age>18?"Eligible":"Not Eligible"


// }))
// console.table(eligible_status)

//1.map in javascript

// const numbers =[1,2,3,4,5]
// const doublenumbers=numbers.map(number=>number*2);
// console.log(doublenumbers);

//syntax
/*
originalArray.map(current_value,index,originalArray);
*/
//2.Modifying array element
// const words=["hello","world"]
// console.log(words);
// const capitalizedwords=words.map(word=>word.toUpperCase());
// console.log(capitalizedwords)

//3.Combining array 
// const fruits=["apple","banana"];
// const color=["red","yellow"]
// const furitscolors=fruits.map((fruit,index)=>fruit+"-"
// +color[index]);
// console.log(furitscolors)

//4.Filtering an Array:
// const numbers = [1,2,3,4,5];
// const evenNumbers=numbers.map(num=>num%2===0);
// console.log(evenNumbers);

//5.Extracting Properties from an array of objects:
// const users = [
//     {name: "Ram", age:10},
//     {name: "Sam", age:20},
//     {name: "vani", age:18}
// ];

// const names=users.map(user=>user.name);
// console.log(names);

// 6.Modifying an Array of objects:
// console.log(users);

// const updatedUsers=users.map(user=>{
//     return {
//         name:user.name,
//         age:user.age+1
//     }
// });
// console.log(updatedUsers);
//use three parameter

// const words = ['apple','banana','orange'];
// const wordstats = words.map(function(currentValue, index, array) {
//     return {
//         word: currentValue,
//         length: currentValue.length,
//         position: index,
//         totalWords: array.length
//     };
// });

// console.log(wordstats);

//---------------------------------

//1.Filter() Method in javascript

// let numbers=[10,1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(number=>number%2==0);
// console.log(evenNumbers);


// //2.using objects
// let users=[
//     {name: 'alice', age: 55},
//      {name: 'bob', age: 22},
//       {name: 'hoper', age: 60},
// ];
// let eligible= users.filter(user=>user.age>30);
// console.log(eligible);

// //3.filter the wodrs based on the word length

// let words = ['cat','dog','elephant','fish'];

// let FourLetterWord = words.filter(word=>word.length===3);
// console.log(FourLetterWord);

// //4.

// let items =[
//         {name: 'apple', category: 'fruit'},
//      {name: 'carrot', category: 'vegatable'},
//       {name: 'banana', category: 'fruit'}
// ];

// let fruits=items.filter(item=>item.category==='fruit');
// console.log(fruits);

//--------------------------------------------

// to print the word start with (e)
// let words = ['cat','dog','elephant','fish','girafee','eagle'];

// let wordStartsE=words.filter(word=>word.startsWith('e'));
// console.log(wordStartsE);
//---------------------------------------------------
// const products = [
//     {name: 'apple', category: 'fruit' , price:100},
//     {name: 'carrot', category: 'vegatable', price:50},
//     {name: 'orange', category: 'fruit' ,price:160},
//     {name: 'Broccoli', category: 'vegatable' ,price:90},
//      {name: 'mango', category: 'fruit' ,price:110}
// ];

// const expensiveFruits =products.filter(product=>product.category==='fruit' && product.price>=100);
// console.log(expensiveFruits);

//--------------------------------------------
// we have a list of books in array formet, to filter the book 
//starting with particular name,so the way is:


/*
const searchTerm='HTML'.toLowerCase();

const filterdBooks=books.filter(book=>{
    return book.title.toLowerCase().include(searchTerm)
    
    })
*/
//--------------------------------------------------------

//1.REDUCE() IN JAVASCRIPT

/*

/*
array.reduce(function(accumulator,currentValue,currentIndex,array){
},initialValue);
*/

// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
// console.log(sum);
 
// //2.Flattening an array:

// let nestedArray =[[1,2],[3,4],[5,6]];
// console.log(nestedArray);
// let flattenedArray =nestedArray.reduce((accumulator,currentValue)=>accumulator.concat(currentValue));
// console.log(flattenedArray);
//--------------------------------------------------------
// // to find  the unique color count  
// let colors = ['red','blue','green','red',"blue",'yellow'];
// let colorCounts = colors.reduce((accumulator, currentValue)=>{
//     if(currentValue in accumulator){
//         accumulator[currentValue]++;
//     }else{
//         accumulator[currentValue]=1;
//     }
//     return accumulator;
// },{});
// console.log(colorCounts);

//--------------------------------------------------------

// to find  lagrest number
// let numbers = [10,15,20,25];

// let largest = numbers.reduce((accumulator,currentValue)=>{
//     return Math.max(accumulator,currentValue);
// });
// console.log(largest);

// ---------------------------------------------------------

// let people = [
//     {name:'saran', age:27, city:'malapuram'},
//     {name:'pugal', age:28, city:'kerala'},
//     {name:'tara', age:21, city:'malapuram'}

// ];
// let groupedBycity = people.reduce((accumulator, currentValue)=>{
//     if(currentValue.city in accumulator){
//         accumulator[currentValue.city].push(currentValue);
//     }else{
//         accumulator[currentValue.city]=[currentValue];
//     }
//     return accumulator;
// },{});
// console.log(groupedBycity);

//-------------------------------------------------

//(1)SLICE() METHOD IN JS

//Slice method:  slice(start,end);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);
// console.log('slice :'+numbers.slice());
// console.log('slice(2) :'+numbers.slice(2));
// console.log('slice(2,5) :'+numbers.slice(2,5));

//(2)SPLICE ()METHOD IN JS
/* splice is to remove elements in Array,
 it will change original Array.

Removed_element=splice(start,length,new elements)
*/
// const n1 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n1);
// let Removed_element=n1.splice(2);
// console.log("Removed Items :"+Removed_element);
// console.log("After Splice :"+n1);

// const n2 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n2);
// let Removed_elements=n2.splice(2,2);
// console.log("Removed Items :"+Removed_elements);
// console.log("After Splice :"+n2);
// //replace the value
// const n3 = [1,2,3,4,5,6,7,8,9,10];
// console.log("Before splice : "+n3);
//  Removed_elements=n3.splice(2,2,25,36);
// console.log("Removed Items :"+Removed_elements);
// console.log("After Splice :"+n3);
// //insert new value
// const n4=[1,2,3,4,5,6,7,8,9,10];
// console.log('Before Splice :'+n4);
// n4.splice(2,0,100,300);
// console.log("After Splice :"+n4);
//------------------------------------------------

//concat () METHOD IN JS:
// const a=[10,20,30];
// const b=[40,50,60];
// const c=[70,80,90];

// let d=a.concat(b);
// console.log(d);

// d=a.concat(b,c);
// console.log(d);
// d=a.concat(b,c,23,45,55,66);
// console.log(d);


// d=a.concat(b,c,23,45,55,66,['a','b','c']);
// console.log(d);

// console.table(d);

//------------------------------------------------------

// //SORT():
// const names=["Sara",'Pugal','Tamil','Zara','Iniya'];
// console.log("Before Sort : "+names);
// names.sort();
// console.log("After Sort : "+names);

//number sort 
// const num=[10,100,25,150,45,80,9];
// console.log("Before Sort : "+num);
// num.sort();
// console.log("After Sort : "+num);

// num.sort((a,b)=>{
//     return a-b;
// });
// console.log("Compare Sort : "+num);


// num.sort((a,b)=>{
//     return b-a;

// });
// console.log("Compare Sort : "+num);
//-------------------------------------------------------
//  const users = [
//      {name:"kalai",age:12,city:'salem',salary:30000},
//      {name:"zara",age:22,city:'chenni',salary:50000},
//      {name:"pugal",age:15,city:'kerala',salary:40000},
//      {name:"saran",age:47,city:'Housr',salary:35000},
//      {name:"naresh",age:10,city:'salem',salary:20000}

//  ];

//  console.table(users);
//  users.sort((a,b)=>{
//     return a.age-b.age;
//  });
//  console.table(users);

//  users.sort((a,b)=>{
//     if(a.name>b.name) return 1;
//     if(a.name<b.name) return -1;
//     return 0;
//  });

//  console.table(users);

//------------------------------------------------
//1.FILL() METHOD IN JAVASCRIPY
//  Fill(value,start,end):

// let n=[1,2,3,4,5,6,7];

// console.log("Before Fill : "+n);
// //n.fill(20);
// //n.fill(20,3);
// n.fill(20,3,5);
// console.log("After Fill : "+n);
//-----------------------------------------------------
// INCLUDE () IN JS --->ANS MUST BE (TRUE OR FALSE)
//includes(value,start-index);

// const products = ['pen','pencil','Eraser','box',];
// let result=products.includes('pen');
// console.log(result);
// result=products.includes("Scale");
// console.log(result);
// result=products.includes("pen",2);
// console.log(result);
//-------------------------------------------------------
//JOIN IN JAVASCRPIT
//array.join(seperator);
// const products = ['pen','pencil','Eraser','box'];
// console.log(products);

// console.log(products.join()); //Default , as Seperator;
// console.log(products.join("|"));//| as seperator;
//-------------------------------------------------------
//REVERSE IN JAVASCRPIT

// const n = [1,2,3,4,5,6];

// console.log("before reverse : ",n);
// n.reverse();
// console.log("after Reverse : ",n);
//--------------------------------------------------------
// //Array Element with length Property:
// const x = {0: 10,1:20,2:30,3:40,length: 4};
// console.log(x);

// Array.prototype.reverse.call(x);
// console.log(x);
//---------------------------------------------------------

// PUSH IN JS
// let n=[1,2,3,4,5];
// console.log(n);
// console.log(n.push(6));
// console.log(n);

// n.push(70,45,55,33);
// console.log(n.push(70,45,55,33));
// console.log(n);


// let fruits = ['apple'];
// console.log(fruits);
// fruits.push('orange');
// console.log(fruits);
// fruits.push('Mango','grapes');
// console.log(fruits);

//Merging two Arrays:
// let users1 = ['zara','vani','rajesh'];
// let users2 = ['tamil','kani'];

// users1.push(...users2);
// console.log(users1);
//------------------------------------------------------
//POP in js;
//  let users = ['zara','vani','rajesh','tamil','kani'];
//  console.log(users);
//  console.log(users.pop()); // ITS REMOVE THE LAST INDEX
//  console.log(users);
//   console.log(users.pop());
//   console.log(users);
//----------------------------------------------------

// //Shift in JS;
// let students = ['zara','vani','rajesh','tamil'];
// console.log('before :'+students);
// const element  = students.shift();   //ITS REMOVE THE FIRST INDEX
// console.log('after :'+students);
// console.log("Removed element ; "+element);

// console.log('before :'+students);
// const element  = students.shift();
// console.log('after :'+students);
// console.log("Removed element ; "+element);
// --------------------------------------------------------
//Unshift:
//Add First element at Start:

// students = ['el','hoper','mike','will','dustin','steve']
// console.log('before unshift :'+students);

// let len=students.unshift('max');
// console.log("length :"+ len);
// console.log('after unshift :'+students);

// len=students.unshift('nancy',"lucus");
// console.log("length :"+ len);
// console.log('after unshift :'+students);

//---------------------------------------------------
//indexof;

// students = ['lucus','mike','will','dustin','steve','nancy','joice'];

// let i= students.indexOf("steve");
// console.log('index ;'+i);

// let user="Tamilvani";
// let index=user.indexOf("m");
// console.log('index :'+index);

// let user1 = "Tamilvani";
// let indexvalue = user.indexOf("i",5);
// console.log("index :" + indexvalue);
//---------------------------------------------------------
//lastindexOf:

// students = ['lucus','mike','will','dustin','steve','lucus','joice'];
// let i= students.indexOf("lucus");
// console.log('index :'+i);

// i= students.lastIndexOf("lucus");
// console.log('index :'+i);

// let address='Tamil vani from kerala Tamil';
// i=address.indexOf('from');
// console.log(i);
// i=address.lastIndexOf('')
// console.log(i);
//--------------------------------------------------------
// //EVERY &SOME IN JAVASCRIPT---> every means(all condition must true)
//,and some means(any one condition is crt then its work)

// n=[10,20,12,14];

// let result=n.every((value)=>{
//   return value%2==0;
// })
// console.log(result);

// n=[10,11,20,14];

//  result=n.some((value)=>{
//   return value%2==0;
// })
// console.log(result);

// function checkEven(value){
//   return value%2==0;
// }
// result=n.every(checkEven);
// console.log(result);

// const users = [
//   {name:'vani',age: 22},
//   {name:'will',age: 26},
//   {name:'steve',age: 25},
//   {name:'nancy',age: 34}
// ];

// function isEligible(element){
//   return element.age>=18;
// }

// result = users.every(isEligible);
// console.log("Every eligible :", result);

// result = users.some(isEligible);
// console.log("Some eligible :", result);
//-------------------------------------------------------
//PRIMITIVE AND REFERENCE DATA TYPE

// let name="Tamil Vani";
// console.log(typeof name);
// let age=22;
// console.log(typeof age);
// let isstudent=true;
// console.log(typeof isstudent);
// let x;
// console.log(typeof x);
// let id=Symbol();
// console.log(typeof id);

// let a=10;
// let b=a;
// console.log("A :"+a);
// console.log("B :"+b);
// a=25;
// console.log("A :"+a);
// console.log("B :"+b);


//REFERENCE TYPE:(object type)

// let user={name:"vani",age:21};
// let user2=user;
// console.log("user 1: ",user);
// console.log("user 2: ",user2);
// user.age=25;
// console.log("user 1: ",user);
// console.log("user 2: ",user2);

//(Array type:)
// let arr1=[10,20,30];
// let arr2=arr1;
// console.log("Array 1;",arr1);
// console.log("Array 2;",arr2);
// arr1.push(40);
// console.log("Array 1;",arr1);
// console.log("Array 2;",arr2);

//Object clone use Spread and object.
// assign() in javascipt
// const obj1 = {a: 1,b:2};
// const obj2 = {c: 3,d:4};

// //const obj3 = Object.assign({},obj1,obj2);
//          //or
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// //----------------------------------------------------------------
//Multiple ways to clone an array javascript:

//spread:
let originalArray=[1,2,3];
// let clonedArray=[...originalArray];
// console.log(clonedArray);

//slice:
// let clonedArray=originalArray.slice();
// console.log(clonedArray);

//concat:
// let clonedArray=[].concat(originalArray);
// console.log(clonedArray);

//From:
// let clonedArray=Array.from(originalArray);
// console.log(clonedArray);

//JSON.parse(),JSON.stringify();

// let clonedArray=JSON.parse(JSON.stringify(originalArray));
// console.log(clonedArray);
//---------------------------------------------------------
//CONST ARRAY IN JAVASCRIPT
const a=10;
console.log(a);
//a=25;

const users=["steve","vani","nancy"];
console.log(users);
users.push('lucus');
console.log(users);
