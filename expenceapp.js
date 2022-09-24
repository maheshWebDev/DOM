let target = document.getElementById("myform");
target.addEventListener("submit",addToLocalStorage);

// add to localStorage

function addToLocalStorage(e){
    let amount = document.getElementById("num").value;
    let description = document.getElementById("text1").value
    let category = document.getElementById("text2").value

    const obj = {
        amount : amount,
        description : description,
        category : category
    }
    localStorage.setItem(obj.amount,JSON.stringify(obj));
}

window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const exp = JSON.parse(localStorage.getItem(key))
        showListofExpence(exp)
        console.log(exp)
    
    })
})

//  show list  on the screen
function showListofExpence(exp){
    let parentNode = document.getElementById("list");
let textNode = `<li>${exp.amount} ${exp.description} ${exp.category}<button onclick=deleteUser('${exp.amount}')>Delete</button>
<button onclick=editDetails('${exp.amount}','${exp.description}','${exp.category}')>Edit</button>
</li>`
parentNode.innerHTML += textNode;
}

//  delete user

function deleteUser(amount) {
    localStorage.removeItem(amount)
    removeItemFromScreen(amount)
}

//  remove from screen

function removeItemFromScreen(amount){
    const parentNode = document.getElementById('list');
    const elem = document.getElementById(amount)
    parentNode.removeChild(elem);
}

// edit user

function editDetails(amount, description, category){

    document.getElementById("num").value = amount;
    document.getElementById("text1").value = description
    document.getElementById("text2").value =category

    deleteUser(amount)
 }