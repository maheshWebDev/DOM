
let from = document.querySelector("#myform")
from.addEventListener("submit",post)
// document.querySelector("#list").addEventListener("click",deleteUserDetails)

function post(e){
    e.preventDefault();
    let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
    const obj = {
         "name": name,
        "email" : email
    }
    axios.post("https://crudcrud.com/api/f67df1ec46a6460e9466bd7f061bfdb4/fromData/",obj)
    .then((res)=>{showOnScreen(res.data)})
    .catch((err)=>{console.log(err)})
}

function showOnScreen(res){
    let list = document.querySelector("#list")
    let add = ""
    add = `<li id=${res._id}>${res.name}-${res.email}<button onClick=deleteUser("${res._id}")>Delete</button><button>Edit</button></li>`
    list.innerHTML += add
}

window.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/f67df1ec46a6460e9466bd7f061bfdb4/fromData/")
    .then((res)=>{ for(let i=0;i<res.data.length;i++){
        showOnScreen(res.data[i])
    }
        })
    .catch((err)=>{console.log(err)})
    
})


function deleteUser(userid){
axios.delete(`https://crudcrud.com/api/f67df1ec46a6460e9466bd7f061bfdb4/fromData/${userid}`)
    .then((res)=>{removeUser(userid)
    })
    .catch((err)=>{console.log(err)})
    
    }

function removeUser(userid){
    const parent =document.querySelector("#list")
    const child = document.getElementById(userid);
    if(child){
        parent.removeChild(child)
    }
}
