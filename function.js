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


// function func(name){
//     console.log( name);
// }


// func("Named Function !");


// //


// function greet(name = "Raza"){
//      console.log(" Hello " + name);
// }

// greet();

// greet("Muhammad");


// //

// function sum(a, b){
//     return a + b ;
// }

// let result = sum(3, 9);
//     console.log(result);


// //...............................

// const anonmus = function(){
//            return "Anonymous Function !" ;
//         };
//         console.log(anonmus()); 



// // 

// const funcname = function(name){
//           return "Hi " + name ;
// }

// console.log(funcname("Ali"));


// //

// const multiple = function(a, b){
//         return a * b ;
// }

// console.log(multiple(4, 7));


// //...............................

// const exp = function(){
//     return " Function Expression !";
// }

// console.log(exp());

// //

// const add = function(x, y){
//        return x + y ;
// }

// console.log(add(6, 98));

// //


// const isEven = function(num){
//         return num % 2 === 0 ;
// }

// console.log(isEven(5));
// console.log(isEven(8));

// ////////////


// function greet(name, callback){
//     console.log(" Hello " + name);
//     callback();
// }

// function saybye(){
//     console.log("byeeee!");
// }

// greet("raza", saybye);



// scope chain  and closure 


function outer(){
      let name = "Raza";


      function inner(){
            let age = 24;

            console.log(name);
            console.log(age);
      }
      inner();
};

outer();


// callback function

function call(){
    console.log("Hey !");
}

function start(callback){
     callback();
}

start(call);


// callback function using  ForEach

const numbers = [2,5,7,9];

numbers.forEach(function(number) {
        console.log(number);
});


// callback function using map

const num = [2,5,7,9];

const result = num.map( function(nums) {
               return nums * 2 ;
});

console.log(result);

// callback function SetTimeout

function orderfood(callback){
         console.log("food order placed");

         setTimeout(() =>{
            console.log("food is ready");
            callback();
         },2000);

}

function  eatfood(){
    console.log("now i am eating");
}

orderfood(eatfood);


// callback arrow function

const greet = () => {
      console.log("Hey Hello !");
};

const arrow = (callback) => {
      console.log("Starting....");
      callback();
};

arrow(greet);