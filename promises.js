const posts = [

    {title:"post one",body : "this is post one"},

    {title:"post two",body : "this is post two"}

];

function getPost(){
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
          output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    },3000)
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           posts.push(post);
        const error = false;
        if(!error){
            resolve();
        }else{
            reject(`error: something went wrong`);
        }
        },1000)
    })
   }
   
createPost({title:"post three",body:"this is post three"}).then(getPost)

// delete post

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            if(posts.length > 0){
                resolve();
            }else{
                reject("Array is empty now")
            }
        },1000)
    })
}
// deletePost().then(deletePost).then(deletePost).catch(err=>console.log(err))

// creating 4th post
function postfour(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           posts.push(post);
        const error = false;
        if(!error){
            resolve();
        }else{
            reject(`error: something went wrong`);
        }
        },1000)
    })
}
createPost({title:"post four",body:"this is post four"}).then(deletePost).then(getPost)

// Promise.all 
const Promise1 = Promise.resolve("hellow world");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"goodbye")
})
Promise.all([Promise1,promise2,promise3]).then(values=>console.log(values));