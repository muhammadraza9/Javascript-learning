let obj = {
        name : "raza",
        city : "Lahore",
        age : 23      
};

obj.name = "Muhammad";

console.log(obj);


// Using new Object()

let objt = new Object();

objt.name = "ali";
objt.city = "islamabad";
objt.age = 25;

console.log(objt);

//Accessing Object Properties

console.log(obj.name);

console.log(obj["city"]);

// delete

delete objt.name;

console.log(objt);


// checking property 

const x = {
          model : "BMW"  
};

console.log("colour" in x);
console.log(x.hasOwnProperty("model"));


// for in loop

for(let key in obj){
              console.log( key + " : " + obj[key]);
}


// object length


let length = Object.keys(obj).length;
    console.log(length);


    //////////


 let person = {
          firstname : "ali",
          lastname  :  "zee",
          age       : 24,
          
          fullname  : function() {
                return this.firstname + " " + this.lastname;
          }
 };
 
 console.log(person.fullname());