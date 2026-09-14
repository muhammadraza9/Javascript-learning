// let object = {
//            value : 12,
//            name : "Raza"   
// };



// const array = [];

// for(let key in object){
//       array.push(object[key]);
// }

// console.log(array);



/// Fibonacci sequence


function Fibonacci(n){
      if(n <= 1){
            return n;
      }

      return (Fibonacci(n - 1) + Fibonacci(n - 2));
}

console.log(Fibonacci(6));


// Fibonacci sequence


function FibSeq(n){
      if(n <= 1) {
            return n ;
      }

      return FibSeq(n - 1) + FibSeq(n - 2);
};

for (let i = 0; i < 10; i++){
        console.log(FibSeq(i));
}