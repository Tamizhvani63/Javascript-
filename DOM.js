// console.dir(document);
// document.title = "Welcome to this page";

 
//ACCESSING THE DOM:
/*
document.getElementById();          ----->Return an element object
document.getElementsByClassName();  ------> Return an HTMLCOLLECTION
document.getElementsByTagName();    ------> Return an HTMLCOLLECTION
document.querySelector();           ----->Return an element object
document.querySelectorAll();        ----> Return an NodeList
*/
/*
let brand=document.getElementById("brand");
console.log(brand);
console.log(brand.nodeType);
console.log(brand.nodeName);
brand.style.backgroundColor="purple";
brand.style.color="white"


let stitle = document.getElementsByClassName("subtitle");
console.log(stitle);
stitle[0].style.color="yellow"
stitle[1].style.color = "yellow";

for(let i=0;i<stitle.length;i++){
    stitle[i].style.color = "green";
}

let parra = document.getElementsByTagName("p"); 
console.log(parra);

for (let i = 0; i < parra.length; i++) {
  parra[i].style.color = "purple";
}

let heading = document.querySelector("h1");  
console.log(heading);
heading.style.color="orange";

let qpara = document.querySelectorAll("p");
console.log(qpara);
qpara.forEach((element)=>{
    element.style.color = "blue";
});
*/


// HTML Collection:---->work live
//traditional for loop:
/*
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li.length);
let element = document.createElement("li");
element.innerHTML = "javascript" ;
li[0].parentNode.appendChild(element);
console.log(li);
console.log(li.length);
for(let i=0;i<li.length;i++){
    element.style.color ="orange";
}
*/
//-----------------------------------------------------------
// use forEach only --->its ana array formet
//NodeList:
/*
let li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);
let element = document.createElement("li");
element.innerHTML = "javaScript";
li[0].parentNode.appendChild(element);
console.log(li)
console.log(li.length);


li.forEach((element) =>{
    element.style.color ="orange";

})

 li = document.querySelectorAll("li");
console.log(li);
console.log(li.length);

*/
//-----------------------------------------------------------

//Traverse in DOM
/*
 const para=document.getElementsByTagName("p")
 console.log(para);
 const parent = para[0].parentNode;
 console.log(parent);
parent.style.backgroundColor="palegreen";
parent.style.padding ="10px"

 const h1 = document.getElementsByTagName("h1");
 console.log(h1);
 const parent_h1 = h1[0].parentNode;
 console.log(parent_h1);
parent_h1.style.backgroundColor = "palevioletred";
parent_h1.style.padding = "10px";

*/
/*
// Node in DOM:
//firstChild
 const firstChild =parent.firstChild;
 console.log(firstChild)

 //lastChild
 const lastChild =parent.lastChild;
 console.log(lastChild);

 //firstElementChild
 const firstElementChild =parent.firstElementChild;
 console.log(firstElementChild);
 firstElementChild.style.color="blue"

  //lastElementChild
 const lastElementChild =parent.lastElementChild;
 console.log(lastElementChild);
  lastElementChild.style.color = "red";

  const section = document.getElementsByTagName("section")[0];
  console.log(section.firstChild)
  console.log(section.firstElementChild);
  console.log(section.lastChild);
  console.log(section.lastElementChild);



    console.log(h1[0].firstChild);
   console.log(h1[0].firstElementChild);
   console.log(h1[0].lastChild);
    console.log(h1[0].lastElementChild);

*/
//Childer

// const div=document.getElementsByTagName("div")[0];
// console.log(div);
// console.log(div.children[0]);
// console.log(div.children[1]);


//sibilng

// const p=document.getElementsByTagName("p")[0];
// console.log(p.previousSibling)
// console.log(p.previousElementSibling);

// const h2 = document.getElementsByTagName("h2")[0];
// console.log(h2.nextSibling);
// console.log(h2.nextElementSibling);

// const section = document.getElementsByTagName("section")[0];
// console.log(section);
// console.log(section.nextSibling);
// console.log(section.nextElementSibling);

// console.log(section.previousSibling);
// console.log(section.previousElementSibling);

//Closest
/*
const h1_tag =document.querySelector("h1")
console.log(h1_tag);
const section=h1_tag.closest("section")
console.log(section);
section.style.backgroundColor="purple";
section.style.color="white"
*/

//----------------------------------------------------------------------------------

/*
1.CreateElement
2.appendChild
3.insertBefore
4.removeChild
5.remove
6.cloneNOde
*/

// let para = document.createElement("p");
// //para.innerText=" This is a sample paragraph";
// para.innerHTML = "This is a <b><i>sample paragraph </i><b>";
// para.style.color="green";
// const body = document.querySelector("body");
// body.appendChild(para);

// let h1 = document.createElement("h1")
// h1.innerText="Welcome to this page"
// h1.style.color="purple"
// body.insertBefore(h1,para)

// const removeBtns=document.querySelectorAll(".btnRemove")
// removeBtns.forEach((btn)=>{
//     btn.addEventListener("click",function(){
//         const tr=this.parentNode.parentNode;
//        // tr.remove()
//        let td=tr.childNodes[3];
//        console.log(td);
//        tr.removeChild(td)
//     })
// })

//-------------------------------------------------------------

/*
1.Style
2.innerHTML
3.innerText
4.cloneNode()
5.serInterval()
6.classList.add()
7.classList.remove()
8.classList.toggle()
9.getAttribute()
10.setAttribute()

*/

/*
const h1 = document.querySelector("h1");
h1.style.color = "white";
h1.style.backgroundColor = "green";
h1.style.padding = "20px";

h1.innerText = "Learn More Be Smart";
h1.innerHTML = "Learn more be smart <i>vani</i>";

const body = document.querySelector("body");
let cloneH1 = h1.cloneNode(true);
let cloneH2 = h1.cloneNode(false);
body.appendChild(cloneH1);
body.appendChild(cloneH2);

function sayHello() {
    let clone = h1.cloneNode(true);
    body.appendChild(clone);
}
sayHello()
// setInterval(sayHello,2000);


let clockDiv = document.querySelector(".clock");
clockDiv.style.fontSize ="30px"
function clock() {
    const date = new Date();
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getMilliseconds());

    const time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + " : " + date.getMilliseconds();
    clockDiv.innerHTML = time;
    
}
clock()
setInterval(clock,1000)

*/

//6.classList.add()
// 7.classList.remove()
// 8.classList.toggle()

/*
const btnAdd=document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const btnToggle = document.querySelector("#btnToggle");
const box=document.querySelector(".box")

btnAdd.addEventListener("click",function(){
    box.classList.add("new-color");
})

btnRemove.addEventListener("click", function () {
  box.classList.remove("new-color");
});

btnToggle.addEventListener("click", function () {
  box.classList.toggle("new-color");
});
*/

// 9.getAttribute()
// 10.setAttribute()

/*
const btnClick = document.querySelector("#btnClick");
const input=document.querySelector("input");

btnClick.addEventListener("click",function(){
   const getAtt= input.getAttribute("type");
    //console.log(getAtt);
    if(getAtt=="text"){

        input.setAttribute("type","password");
       
    }
    else{
          input.setAttribute("type", "text");
    }
})
    
*/
// 11.hasAttribute();
// 12.getAttributeName();
// 13.removeAttribute();

/*
console.log(input.hasAttribute("class"));

let list=input.getAttributeNames() ;
console.log(list)

input.removeAttribute("name");
 list=input.getAttributeNames() ;
console.log(list);
*/

//----------------------------------------------------------
/*

Event Handlers
  Inline event listeners
  Inline properties
  Event listeners
*/


// const btn = document.querySelector(".btn");
// btn.addEventListener("click",function(){ 
//      alert("Welcome to Everyone");
// })

/*
Event
  1.mouse
  click
  dblclick
  mousedown
  mouseout
  mouseup
  mouseover
 2.keybord
  keydown
  keypress
  keyup
  keycode
  code
3.Form
 focus
 sumbit
 blur
 change 
4.Touch
 touchstart
 touchend
 touchcancel
5.window
 scrol
 resize
 load
 haschange
*/


const btn = document.querySelector(".btn");

/*
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  alert("Welcome to Everyone");
});
*/

/*
btn.addEventListener("dblclick", function () {
  alert("your are dbclick");
})


btn.addEventListener("mousedown", function () {
  this.style.background ="green"
});

btn.addEventListener("mouseout", function () {
  this.style.background = "yellow";
});

btn.addEventListener("mouseup", function () {
  this.style.background = "blue";
});


btn.addEventListener("mouseover", function () {
  this.style.background = "pink";
});
*/
//-------------------------------------------------------
/*
2.keybord
  keydown
  keypress(deprecated)
  keyup
  keycode
  code
*/

/*
document.addEventListener("keydown",handlekeyEvent);
document.addEventListener("keypress", handlekeyEvent);
document.addEventListener("keyup", handlekeyEvent);

function handlekeyEvent(event){
  const eventType=event.type;
  const keyCode= event.code;
  const keyName = event.key;
  console.log(`Event type: ${eventType}`);
  console.log(`key code: ${keyCode}`);
  console.log(`key name: ${keyName}`);

}
  */

//-----------------------------------

/*
const input = document.getElementById("input-num");
const msg = document.getElementById("error");
 
input.addEventListener("keydown",function(event){
     const key =event.key;
     console.log(key);
     if (isNaN(key)){
        // event.preventDefault();
         msg.textContent ="please Enter Number only";
     }else{
        msg.textContent ="";
     }
})
     */
//-------------------------------------------------------------

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

form.addEventListener("submit", function (e) {
  //Submit
  e.preventDefault();
  console.log("Form Submitted");
  console.log("User Name : ", username.value);
  console.log("Email     : ", email.value);

  let selectedGender = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedGender = radio.value;
    }
  });
  console.log("Gender :", selectedGender);
});

course.addEventListener("change", function (e) {
  //Change
  const selectedCourse = e.target.value;
  console.log("selected Course  : ", selectedCourse);
});

form.addEventListener("reset", function (e) {
  //Reset
  console.log("Reset or Clear Form Data");
});

checkbox.addEventListener("change", function (e) {
  //Change
  if (e.target.checked) {
    console.log("Checkbox is Checked");
  } else {
    console.log("Checkbox Not Checked");
  }
});

username.addEventListener("input", function (e) {
  //Input
  console.log("Username input changed:", e.target.value);
});

username.addEventListener("focus", function (e) {
  //Focus
  username.style.borderColor = "grey";
});
username.addEventListener("blur", function (e) {
  //Blur
  username.style.borderColor = "black";
});

//---------------------------------------------------------------------

/*
Touch
touchStart
touchmove
touchend
touchcancel
*/
/*

  //TouchStart
const touchArea = document.getElementById("touchArea");  
touchArea.addEventListener("touchstart", function (e) {
    e.preventDefault();
    touchArea.style.backgroundColor = "blue";
    touchArea.textContent = "Touch Started !";
});

//TouchMove
touchArea.addEventListener("touchmove", function (e)  {  
    e.preventDefault();
    touchArea.style.backgroundColor = "palegreen";
    touchArea.textContent = "Touch Moved !";
});

 //TouchEnd
touchArea.addEventListener("touchend", function (e) {  
    e.preventDefault();
    touchArea.style.backgroundColor = "grey";
    touchArea.textContent = "Touch Ended !";
});

 //TouchCancel
touchArea.addEventListener("touchcancel", function (e) { 
    e.preventDefault();
    touchArea.style.backgroundColor = "red";
    touchArea.textContent = "Touch Canceld !";
});
*/

//------------------------------------------------------------------------------------------------------



const game = document.getElementById("game");
const ball = document.getElementById("ball");
let startX, startY;

game.addEventListener("touchstart", function (e) {
    const touch = e.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

game.addEventListener("touchmove", function (e) {
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;
    ball.style.left = Math.max(0, Math.min(350, ball.offsetLeft + diffX)) + "px";
    ball.style.top = Math.max(0, Math.min(175, ball.offsetTop + diffY)) + "px";
    startX = touch.clientX;
    startY = touch.clientY;
    e.preventDefault();
}) ;



