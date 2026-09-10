let object = {
           value : 12,
           name : "Raza"   
};



const array = [];

for(let key in object){
      array.push(object[key]);
}

console.log(array);