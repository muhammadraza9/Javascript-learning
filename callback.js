// function greet(name, callback){
//     console.log(" Hello " + name);
//     callback();
// }

// function saybye(){
//     console.log("byeeee!");
// }

// greet("raza", saybye);



//



function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));