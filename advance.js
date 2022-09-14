const student ={
    age : 20,
}

function print(){
    return this.age;
}

// call
console.log(print.call(student));
// apply
console.log(print.apply(student));
// bind
let bound = print.bind(student);
console.log(bound(this.age));

// currying using bind method

// let multiply = function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo= multiply.bind(this,2);
// multiplyByTwo(5);

// currying  using closure
let multiply =function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3); 

let multiplyByThree = multiply(3);
multiplyByThree(10);