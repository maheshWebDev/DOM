// let form = document.getElementById("myform");
// form.addEventListener("submit", addToLocal);
// function addToLocal(e){
//     e.preventDefault();
//     let firstName= document.getElementById("name").value 
//     let email = document.getElementById("email").value
//     localStorage.setItem("name", firstName);
//     localStorage.setItem("email",email);
// }

let form = document.getElementById("myform");
form.addEventListener("submit", addToLocal);
function addToLocal(e){
    e.preventDefault();
    let firstName= document.getElementById("name").value 
    let email = document.getElementById("email").value
 const myObj = {
    name : firstName,
    email : email
 }
 let myObjDeserialized = JSON.stringify(myObj);
 localStorage.setItem(myObj.email,myObjDeserialized);
 showUserDetails(myObj);
}

function showUserDetails(user){
    const paretNode = document.getElementById("list");
    const child=`<li> ${user.name}-${user.email}</li>`
    paretNode.innerHTML+=child;
}