let x = new Array(3,5,7,9);

console.log(x);

// Accessing element

let a = [3, 6, "Raza", 0];

console.log(a[2]);
console.log(a[1]);

// Accessing Last Array Elements

let z = [5, 7, "Muhammad"];

let last = z[z.length -1];

console.log(last);

//example array

let b = ["raza", "ali", "zee"];
    console.log(b);

 let lst = b.pop();
      console.log(b);
      
let fst = b.shift();
    console.log(b);
    
 b.splice(1, 2);
 console.log(b);   

 // for loop

 for(let i = 0; i < b.length; i++){

               console.log(b[i]);
 }



 // Full Array display

 const array = ["BMW", "HONDA", "MARK X"];

 let cars = JSON.stringify(array);

 console.log(cars);

 // 

 const fruits = ["Banana", "Orange", "Apple", "Mango"];

  fruits.forEach((fruit) => {
             console.log(fruit);
  });

  

// for (let i = 0; i < fruits.length; i++) {
//           console.log(fruits[i]);
// }


// concat method

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));


// flat method

const arr = [[6,7],[9,0],[12,2]];

const arry = arr.flat();

console.log(arry);


//find method

const arro = [2,4,5,6,8,9,45,45,56];

let number = arro.find(myfunction);

function myfunction( value, index, array){
          return value > 9;
}

console.log(number);