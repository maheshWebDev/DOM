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
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

function showUserDetails(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    if(localStorage.getItem(myObj.email) !== null){
        removeUserFromScreen(myObj.email)
    }
    const paretNode = document.getElementById("list");
    const child=`<li> ${myObj.name}-${myObj.email}
    <button onclick=deleteUser('${myObj.email}')> Delete</button>                                 
    <button onclick=editUserDetails('${myObj.email}','${myObj.name})>Edit </button>
    <li>`
    paretNode.innerHTML+=child;
}
function editUserDetails(email, name){

    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    deleteUser(email)
 }
 function deleteUser(email){
                function removeUserFromScreen(email){
                    const parentNode = document.getElementById('list');
                    const childNodeToBeDeleted = document.getElementById('email');
    
                    parentNode.removeChild(childNodeToBeDeleted)
                    if(childNodeToBeDeleted) {
                        parentNode.removeChild(childNodeToBeDeleted)
                    }
                }
    
    
            }
