// console.log(document);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);


// let header = document.getElementById("main-header");
// header.style.borderBottom ="solid 5px #008"
//  getElementsByClassName
// let items = document.getElementsByClassName("list-group-item");
// console.log(items)
// items[2].style.backgroundColor="green"
// for(let i = 0;i<items.length;i++){
//     items[i].style.fontweight="bold";
// }

// let list = document.getElementsByTagName("li");
// console.log(list)
// list[4].style.fontWeight="bold";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor="green"
// let thardItem = document.querySelector(".list-group-item:nth-child(3)");
// thardItem.style.color="red";

// let second = document.querySelectorAll(".list-group-item");
// second[1].style.color="white";

// let odd = document.querySelectorAll("li:nth-child(odd)")
// for(let i =0; i<odd.length;i++){
//     odd[i].style.backgroundColor="red";
// }


// add HEllo word before Item Lister

let newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id="hello1";
newDiv.setAttribute('title','hello div');
let newDivText = document.createTextNode("hello world");
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container');
let h1= document.querySelector('header h1');
container.insertBefore(newDiv,h1);