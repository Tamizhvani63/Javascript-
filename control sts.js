//1.If condition
/*
if (conditoion){
 --------
}
*/

// let age=25;
// if(age>=18){
//     console.log("you are Eligible for vote...");
// }


// let age=prompt("Enter your age");
// if(age!=null && age>=18){
//    console.log("you are Eligible for vote...");
// }

//2.IF AND ELSE CONDITION

// let age = prompt("Enter your age");
// if (age != null && age >= 18) {
//   console.log("you are Eligible for vote...");
// }
// else{
//      console.log("you are  not Eligible for vote...");
// }

//3.ELSE IF STATEMENT

/*
if(cond){
   ------
}
else if{
   -----
}
else{
    ------
    }
 */
     //example1
    // let number=-50

    // if(number<0)
    // {
    //     console.log(number,"is negative number")
    // }
    // else if (number > 0)
    //  {
    //    console.log(number, "is positive number");
    //  }
    //  else
    // {
    //      console.log("Given number is zero");
    //  }

    //example 2

    /*
    avg=87;
    90-100  A grade
    80-89   B grade
    70-79   C grade
    <70     d grade
    */

    // let avg=87;

    // if (avg>=90 && avg<=100){
    //     console.log("Grage A")
    // }
    // else if(avg>=80 && avg<=89){
    //       console.log("Grage B");
    // }
    // else if(avg>=70 && avg<=79){
    //      console.log("Grage C");
    // }
    // else{
    //      console.log("Grage D");
    // }

//4.NESTED IF STATEMENT

    /* 
    if(cond){
     if(cond){
         -------
     }
    }
    min mark >=35
    90-100 A
    80-89  B
    70-79  C
    D
    */

// let english=95,tamil=99,maths=75;
// let total,avg;
// total=english+tamil+maths;
// avg=total/3;
// console.log('Total :'+total);
// console.log('Average :'+avg.toFixed(2));

// if(english>=35 && tamil>=35 && maths>=35)
// {
//     console.log('Result : Pass');
//     if(avg>90 && avg<=100)
//     {
//         console.log('Grade: A Grade');
//     }
//     else if(avg>80 && avg<=90)
//     {
//         console.log('Grade: B Grade');
//     }
//     else if(avg>70 && avg<=80)
//     {
//         console.log('Grade: C Grade');
//     }
//     else
//     {     
//         console.log('Grade: D Grade');
//     }
// }
// else
// {
//     console.log("Result : Fail");
//      console.log("grade : No grade");
// }


// 5. SWITCH STATEMENT
/*switch (choice){
     case choise:
        -------
    break;

      case choise:
        -------
    break;
    default:
        -----
    break;
}
*/

//

// let num=3;
// switch(num)
// {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default :
//         console.log('Invalid Input');
//         break;     
// }

// 6. COMBINING CASES STATEMENT;
// let letter="a";

// switch(letter)
// {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(letter+" is a Vowel");
//         break;
//     default:
//         console.log(letter+" is Not a Vowel");  
//          break;
// }

//7. LOOPING STATEMENT


//While Loop;
/*
while (Condition){
  code Execute
}
*/

// let i=1;  //1  
// while(i<=10){ 
//     //1>=10 2<=10 ---> 11<=10 false  condition Check
//     console.log(i);
//     // 1 2 3 4 5 6 7 8 9 10
//     i++;
//     // 2 3 4 5 6 7 8 9 10 11
// }


/*
  //Do While Loop:
do{
    //code to be executed if the condition is true
}while(condition);

*/

// let table=5;limit=5;i=1;

// do
// {
//     console.log(table+'X'+i+"="(table*i)); 
//     i++;//2 it check limit value
// }while(i<=limit);//2<=5 3<=5 4<=5

//8.FOR LOOP

/*
for(initialize variable; condition; statement){
   //code to be executed
}
*/

// for(i=1;i<=10;i++){
//     console.log(i)
// }
// let arr=[];
// for(let i=0;i<=100;i++){
//     arr.push(i);
// }
// console.log(arr);


// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// let arr = [];
// for (let i = 0; i <= 100; i+=2)  //i+=2 means increase 2 by 2
// {
//   arr.push(i);
// }
// console.log(arr);
// console.log(arr[49])

//9.NESTED FOR LOOP

// let nums=[];
// for (let i=0;i<3;i++)//i=0 0<3  1<3--->index valuse
// {
//     nums.push([]); //num[0] num[1]
//     for(let j=0;j<3;j++)
//     {
//         nums[i].push(j);//num[0]={0,1,2}
//     }
// }
// console.log(nums);
// console.table(nums);

//10.FOR OF LOOP STATEMENT
 /* ITS USED FOR ARRAY */

// let fnames = ["vani","tamil","saran","pugal","ram"];
// for( let i=0;i<fnames.length;i++){
//     console.log(fnames[i]);
// }

// console.log("For of loop:")
// for(let fname of fnames){
//     console.log(fname);
// }

//11.FOR IN LOOP STATEMENT
/* ITS USED OBJECT AND KEY*/ 

// let user ={
//     fname:"tamilvani",
//     age:12,
//     city:"salem",
//     contact:"1234567891"
// }
// for (let prop in user ){
//     console.log(prop+ " : "+user[prop]);
// }


// //12.LOOPING OVER OBJECT BY CONVERTING TO AN ARRAY

let user ={
    fname:"tamilvani",
    age:12,
    city:"salem",
    contact:"1234567891"
}
let arr_keys=Object.keys(user);
console.log(arr_keys)
console.table(arr_keys);

let arr_values = Object.values(user);
console.log(arr_values);
console.table(arr_values);


/* using for loop*/
for(i=0;i<arr_keys.length;i++)
{
    console.log(arr_keys[i]+" : "+arr_values[i])
    //console.log(user[arr_keys[i]]);
}

//13.BREAK IN JS

for(i=1;i<=10;i++){
    console.log(i);
    if(i==4){
        break;
    }
}

//14.CONTINUE IN JS
console.log("continue in js")
for (i = 1; i <= 10; i++) {

  if (i == 4) {
    continue;
  }
    console.log(i);
}


console.log("print odd numbers")
for (i = 1; i <= 10; i++) {
  if (i%2==0) {
    continue;
  }
  console.log(i);
}

//15. LABLE BLOCK IN JS

let groups = [
  ["Ram", "Sam", "Ravi"],
  ["Kumar", "Tara", "Sundar"],
  ["Rajesh", "Sara", "Rahul"],
];

for (let group of groups)
{    
    inner:
    for(let member of group)
    {
      if(member.startsWith('R')){
        console.log("found one starting with R",member);
        break inner;
      }
    }
}