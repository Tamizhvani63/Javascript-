// localStorage.setItem("name","tamilvani")
// localStorage.setItem("age", 21);
// localStorage.setItem("Gender", "female");

// // let name=localStorage.getItem("name")
// // console.log(name);
// localStorage.removeItem("name");
// localStorage.clear();

//----------------------------------
// const btnToggle = document.getElementById("theme-toggle");

// function toggleTheme(){
//     const banner=document.getElementById("banner");
//     banner.classList.toggle("dark");

//     const isDarkTheme=banner.classList.contains("dark");

//     localStorage.setItem("themePreference", isDarkTheme? "dark" :"light");

// }
// btnToggle.addEventListener("click",toggleTheme);

// window.addEventListener("DOMContentLoaded",function(){
//     const themePreference =localStorage.getItem(" themePreference");
//      const banner = document.getElementById("banner");
  
//     if(themePreference =="dark"){
//         const banner = document.getElementById("banner");
//          banner.classList.add("dark");

//     }
// });

//-----------------------------------------------------------------------------------------

//2.STORE ARRAY VALUE IN LOCAL STORAGE:

document.addEventListener("DOMContentLoaded",function(){
    const dataForm=document.getElementById("dataForm")
    const dataInput = document.getElementById("dataInput");
    const dataList = document.getElementById("dataList");


    
    loadStoredData(); //loacal storage load fonction

    dataForm.addEventListener("submit",function(e){
        e.preventDefault();
        const data=dataInput.value.trim();
        if(data!==""){
            addToLocalStorage (data);
            loadStoredData();
            dataInput.value =""

        }else{
            alert("please enter the Data");
            dataInput.focus();
        }
    })
//Add New Data to LocalStorage
function addToLocalStorage (data){
    const storedData=JSON.parse(localStorage.getItem("myData")) || [];
    storedData.push(data);
    localStorage.setItem("myData",JSON.stringify(storedData)); //Reset
}







// Load All data Form LoacalStorage
    function loadStoredData(){
        const storedData=JSON.parse(localStorage.getItem("myData")) || [];
        dataList.innerHTMl ="";
        storedData.forEach((data,index)=>{
        /*
            const li=document.createElement("li");
            li.textContent = data;
            dataList.appendChild(li);
        */
       let output = `<li>${data}
       <div>
        <button class='btnEdit' data-index='${index}' >Edit</button>
        <button class='btnDelete' data-index='${index}'>Delete</button>
       </div>
       <li>`;
         
       dataList.innerHTML +=output;

        });

        const delButtons=document.querySelectorAll(".btnDelete");
        delButtons.forEach((btn)=>{
            btn.addEventListener("click",deleteData)
        })

        const editButtons = document.querySelectorAll(".btnEdit");
        editButtons.forEach((btn) => {
          btn.addEventListener("click",editData);
        });
    }

    //to delete a user from local storage(delete method)
    function deleteData(){
       if(confirm("Are You sure to Delete")){
         const index = this.dataset.index;
         //console.log(index);
         const storedData = JSON.parse(localStorage.getItem("myData")) || [];
         storedData.splice(index, 1);
         localStorage.setItem("myData", JSON.stringify(storedData));
         loadStoredData();
       }
    }

    //to modify user Data:
    function editData(){
      const index = this.dataset.index;
      //console.log(index);
      const storedData =JSON.parse(localStorage.getItem("myData")) || [];
      const newData=prompt("Edit Username",storedData[index]);
      if(newData!==null){
        storedData[index]=newData.trim();
        localStorage.setItem("myData", JSON.stringify(storedData));
        loadStoredData();
      }

    }
});
