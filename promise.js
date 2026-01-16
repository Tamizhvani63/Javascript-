/*
const promise=new Promise((resolve,reject)=>{
    const sum=1+1;
    if(sum==2){
        resolve("success");

    }else{
        reject("Error");
    }
});
promise
.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.error(error);
});
*/

/*
setTimeout(()=>{
    console.log("Hello");
},250);

function setTimeoutPromise(duration){
    return new Promise((resolve,duration)=>{
        setTimeout(resolve,duration);
    });
}
setTimeoutPromise(250).then(()=>{
    console.log("vani");
});
*/


/*
//callBack hell:

setTimeout(() => {
  console.log("Normal:1");

  setTimeout(() => {
    console.log("Normal:2");

    setTimeout(() => {
      console.log("Normal:3");
    }, 250);
  }, 250);
}, 250);

//using promise:

function setTimeoutPromise(duration){
    return new Promise((resolve,duration)=>{
        setTimeout(resolve,duration);
    });
}

*/



/*
setTimeoutPromise(250).then(()=>{
    console.log("Normal SetTime :1");

    setTimeoutPromise(250).then(() => {
      console.log("Normal SetTime :2");

      setTimeoutPromise(250).then(() => {
        console.log("Normal SetTime :3");
      });
    });
  
})
    */

/*
//chainning
setTimeoutPromise(250).then(()=>{
    console.log("cool promise :1");
    return setTimeoutPromise(250)
}).then(()=>{
        console.log("cool promise :2");
        return setTimeoutPromise(250);
}).then(()=>{
        console.log("cool promise :1");
        return setTimeoutPromise(250);
})
*/

//------------------------------------------------

/*
const button =document.querySelector("button");
function addEventPromise(element,method) {
    return new Promise((resolve,reject)=>{
        element.addEventListener(method,resolve);
    })
    
}
addEventPromise(button,"click").then((e)=>{
    console.log("clicked");
    console.log(e);
})

*/


//(Promise.all / promise.any )-----------------
/*
console.log(Promise.resolve("Good"));

Promise.all([
  Promise.resolve("Good"),
  Promise.resolve("Good"),
  Promise.resolve("Good"),
]).then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})

Promise.any([
  Promise.resolve("1"),
  Promise.reject("Error"),
  Promise.resolve("3"),
])
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });

*/
//(promise-race)

// Promise.race([
//   Promise.resolve("Good-1"),
//   Promise.resolve("Good-2"),
//   Promise.resolve("Good-3"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); 

//(promise.allsettled)

// Promise.allSettled([
//   Promise.reject("Good-1"),
//   Promise.resolve("Good-2"),
//   Promise.resolve("Good-3"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); 


//(finally)
// const promise=  Promise.resolve("Done");

// promise.then((msg)=>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("All Completed....")
// })



/*
const getPost =()=>{
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const posts=["post-1","post-2","post-3"];
            resolve(posts);
        },1000);

     })
};
const getComments=()=>{
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const comments = ["post-1", "post-2", "post-3"];
            resolve(comments);
          }, 2000);
        });
};

Promise.all([getPost(),getComments()])
.then((results)=>{
    const[posts,comments] =results;
    console.log(`posts:${posts}`);
    console.log(`Comments:${comments}`);

})
.catch((error)=>{
    console.error(error);
})

*/

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


//-----------------------------------------------------------------------

//Async,await in javascript(async---->return promise)

// async function welcome(){
//     return "Hello World";
// }

// console.log(welcome());

// welcome().then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })


//------------------------------------------------
/*
 async function getData(){
    let blogPost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Blog Post")
        },2000)
    })

    let blogComment =new Promise((resolve,reject)=>{
         setTimeout(() => {
           resolve("comment For Blog");
         }, 5000);
    });

    console.log("Fetching post......")
    let post = await blogPost;
    console.log("post :",post);
    console.log("Fetching Comment.....")
    let comment = await blogComment;
    console.log("Comment :",comment);
    return [post,comment];
 }

 console.log("welcome to this page");
 let data = getData();
 console.log(data);

 data.then((value)=>{
    console.log(value)
 }).catch((err)=>{
    console.log(err)
 })
 */

 //-------------------------------------------------------

  let result=function(marks){
    return new Promise(function(resolve,reject){
        console.log("Calculation Result.....");
        setTimeout (()=>{
            let total = 0;
            let result = "pass";
            marks.forEach((mark)=>{
                total +=mark;
                if(mark<35){
                    result ="Fail";
                }
            });
            resolve ({total:total,result:result});
        },2000)
            
    })

        
    
  };
  /*
  90-100 A
  80-89 B
  70-79 C
  <70 D

  */


  /*
  let grade = function (response){
    return Promise(function(resolve,reject){
        if(response.result=="pass"){
            let avg = response.total/3;
            let gradeText = "Grade D";
            if (avg >= 90 && avg <= 100) {
              gradeText = "Grade A";
            } else if (avg >= 80 && avg <= 89) {
              gradeText = "Grade B";
            } else if (avg >= 70 && avg <= 79) {
              gradeText = "Grade C";
            }
             resolve(gradeText);

        }else{
            reject("No Grade")
        }
    })
  };
  result([98,99,100]).then((value)=>{
    console.log("Total :",value.total);
    console.log("Result :",value.result);
    return grade(value);
  })
  .then((data)=>{
    console.log(data);

  })
  .catch((err)=>{
    console.error(err);
  });

  */

  // async function getResults(){
  //   try{
  //       const value =await result([98,99,25]);
  //       console.log("Total :" , value.total);
  //       console.log("Result : ",value.result);
  //   }catch (err){
  //       console.log(err);
  //   }
  // }
  // getResults();


  //----------------------------------------------------------------

  //Fetch


  const btnText=document.querySelector("#btn-text");
  const outputText=document.querySelector("#txt-output");

  btnText.addEventListener("click",getTextFile);

  function getTextFile(){
    fetch("text-data")
    .then((res)=>res.text())
    .then((data)=>{
      outputText.innerHTML =data;
    })
  
  }

 
  const btnJson=document.querySelector("#btn-json");
  const outputJson=document.querySelector("#json-output");

  btnJson.addEventListener("click",getJsonData)

  function getJsonData(){
    fetch("users.json")
    .then((res)=>res.json())
    .then((users)=>{
      let data="<ul>"
      users.forEach((user)=>{
        data+=`<li>${user.name} :${user.age}</li>`
      })
      data +="<ul>"
      outputJson.innerHTML=data;
     
    })
  }
 

   
  const btnApi = document.querySelector("#btn-api");
  const outputApi = document.querySelector("#api-output");
  btnApi.addEventListener("click", getApiData);

  async function getApiData(){
    const response = await fetch("https://dummyjson.com/posts");
    const jsonData=await response.json();
    //console.log(jsonData)
    let output="";
    jsonData.forEach((post)=>{
      output+=`<div class='post'>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                </div>`;
    });

    outputApi.innerHTML=output;
  }