// copyWithin method

const fruits = ["Apply","banana","mango","kiwi","orange"];

fruits.copyWithin(0,3);

console.log(fruits);


////
const array = [1,2,3,4,5,6];

array.copyWithin(0,3);
console.log(array);


// check even odd using every()

const numbers = [2,4,3,8,10];

let result = numbers.every((num) => {
              return num % 2 === 0 ;
});

console.log(result);


// using filter method 

const arr = [3,7,82,10,23,12,14];

const output = arr.filter((num) => {
              return num >= 10;
});

console.log(output);


// using flat method

const num = [1,[2,3],4,[5,6]];

let flat = num.flat();

console.log(flat);


// using flatMap method

const flatMap = [1,2,3,4];

let res = flatMap.flatMap((num) => {
              return [num * 2];
});

console.log(res);


// using forEach method

const each = [1,2,3,4,5];

each.forEach((num) => {
          console.log(num * 2);    
})


// using map method

const arrmap = [2,3,4,5];

const test = arrmap.map((num) => {
              return num * num ;
});

console.log(test);

//////////////

const name = ["raza","ali","ahmed"];

const upper = name.map((named) =>{
              return named.toUpperCase();
});

console.log(upper);


// using reduce method

const combine = [3,5,7,9];

let resout = combine.reduce((total, num) =>{
              return total * num ;
});

console.log(resout);


// in string form

const frut = ["apple", "banana", "kiwi"];

const outfrut = frut.reduce((allfruits, fruit) => {
              return allfruits + " " + fruit;
});

console.log(outfrut);


// using sort method

const sortnum = [98,56,7,39,2,0];

sortnum.sort();

console.log(sortnum);

// to correctly sort 


sortnum.sort((a, b) => a - b);
console.log(sortnum);


// using splice method

// remove

const splcnum = [2,3,4,5,6];

splcnum.splice(0, 2);

console.log(splcnum);

// add

const splcfrt = ["apple","orange","maango"];

splcfrt.splice(2, 0, "kiwi");

console.log(splcfrt);
