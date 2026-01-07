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
// use forEach only
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


//Childer
/*
const div=document.getElementsByTagName("div")[0];
console.log(div);
console.log(div.children[0]);
console.log(div.children[1]);
*/

//sibilng
/*
const p=document.getElementsByTagName("p")[0];
console.log(p.previousSibling)
console.log(p.previousElementSibling);

const h2 = document.getElementsByTagName("h2")[0];
console.log(h2.nextSibling);
console.log(h2.nextElementSibling);

const section = document.getElementsByTagName("section")[0];
console.log(section);
console.log(section.nextSibling);
console.log(section.nextElementSibling);

console.log(section.previousSibling);
console.log(section.previousElementSibling);
*/

//Closest

// const h1_tag =document.querySelector("h1")
// console.log(h1_tag);
// const section=h1_tag.closest("section")