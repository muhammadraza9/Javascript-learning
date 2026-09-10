// function test(){
//        if(true){
//            var x = 28;   
//        }  
//       console.log(x);      
// }
// test();


// function test(){
//         let x;
        
//       if(false){
//            x = 27;   
//       }  
//       console.log(x);
// }

// test();



    // function test(){
    //     if(true){      
    // const fruits = ["apple","banana"];
    //        fruits.push("mango");
    //        fruits.pop();
    //        console.log(fruits);
    //        };
    // };
    // test();

 



   
    
    
  // let x = 5;

  // console.log(x--);
  // console.log(x);


  // let a = 5;

  // console.log(--a);
  // console.log(a);


  function demo(theobj){
       theobj.make = "Toyota";
  };

  const myCar = {
         make : "Honda",
         model: "Accord",
         year : 2026,
  };

  console.log(myCar.make);
  demo(myCar);
  console.log(myCar.make);
  console.log(myCar.year);

  //////////////


  function addSquares(a, b){
            function square(x){
                 return x * x ;
            };
          return square(a) + square(b);  
  };

  let result = addSquares(3, 5);

  console.log(result);