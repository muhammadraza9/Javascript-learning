// function greet(){
//          console.log("Hello, World!");     
// }

// greet();
// greet();
// greet();


// function with parameters

// function greet(name){
//          console.log(" Hello " + name + "!") ;    
// }

// greet("Muhammad");
// greet("Raza");


// function with return statement

//  function add(a, b){
//          return a + b;     
//  }

//  let result = add(100, 5);

//  console.log(result);


// function expression


// function checkEvenOdd(num) {
//          if( num % 2 === 0){
//               return "Even";              
//          }
//          else{
//               return "Odd";
//          }
// }

// console.log(checkEvenOdd(13));







 
// function test(...args) {
//     console.log(args);
// }

// test(1, 2, 3, 4, 5);


// ....................................


function func(name){
    console.log( name);
}


func("Named Function !");


//


function greet(name = "Raza"){
     console.log(" Hello " + name);
}

greet();

greet("Muhammad");


//

function sum(a, b){
    return a + b ;
}

let result = sum(3, 9);
    console.log(result);


//...............................

const anonmus = function(){
           return "Anonymous Function !" ;
        };
        console.log(anonmus()); 



// 

const funcname = function(name){
          return "Hi " + name ;
}

console.log(funcname("Ali"));


//

const multiple = function(a, b){
        return a * b ;
}

console.log(multiple(4, 7));


//...............................

const exp = function(){
    return " Function Expression !";
}

console.log(exp());

//

const add = function(x, y){
       return x + y ;
}

console.log(add(6, 98));

//


const isEven = function(num){
        return num % 2 === 0 ;
}

console.log(isEven(5));
console.log(isEven(8));

////////////


function greet(name, callback){
    console.log(" Hello " + name);
    callback();
}

function saybye(){
    console.log("byeeee!");
}

greet("raza", saybye);



