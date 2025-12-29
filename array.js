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
    console.log(value.full_name)
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

const number=[1,2,3,4,5,6];
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