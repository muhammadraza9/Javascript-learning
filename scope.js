// let a = 10;

// function outer() {
//      let b = 20;
     
     
//      function inner(){
//         let c = 34;
        
//         console.log(a);
//         console.log(b);
//         console.log(c);

//      }
//      inner();
// }
// outer();




// Globel Variable

const x = 12;

console.log(x);

//

const a = 10;

function num(){
   console.log(a);
}

num();


// functional scope

function scope(){
      let x = 20;
      console.log(x);
}

scope();



//

function myfunc(){
      var name = "raza";
      console.log(name);
}

myfunc();
//console.log(name);



// Block Scope

{
   let y = 45;
   var z = 56;

      console.log(y);
      console.log(z);
}

//console.log(y);
//console.log(z);


//

{
   let x = "in block";
       console.log(x);
}

{
   let x = "in block scope";
       console.log(x);
}

