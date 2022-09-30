// const posts = [

//     {title:"post one",body : "this is post one"},

//     {title:"post two",body : "this is post two"}

// ];

// function getPost(){
//     setTimeout(()=>{
//         let output = ""
//         posts.forEach((post)=>{
//           output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },3000)
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            posts.push(post);
//         const error = false;
//         if(!error){
//             resolve();
//         }else{
//             reject(`error: something went wrong`);
//         }
//         },1000)
//     })
//    }
   
// createPost({title:"post three",body:"this is post three"}).then(getPost)

// // delete post

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.pop();
//             if(posts.length > 0){
//                 resolve();
//             }else{
//                 reject("Array is empty now")
//             }
//         },1000)
//     })
// }
// // deletePost().then(deletePost).then(deletePost).catch(err=>console.log(err))

// // creating 4th post
// function postfour(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            posts.push(post);
//         const error = false;
//         if(!error){
//             resolve();
//         }else{
//             reject(`error: something went wrong`);
//         }
//         },1000)
//     })
// }
// createPost({title:"post four",body:"this is post four"}).then(deletePost).then(getPost)

// // Promise.all 
// const Promise1 = Promise.resolve("hellow world");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"goodbye")
// })
// Promise.all([Promise1,promise2,promise3]).then(values=>console.log(values));



// asynce await

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie1 = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

//  Promise.all with async await

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
