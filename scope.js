let a = 10;

function outer() {
     let b = 20;
     
     
     function inner(){
        let c = 34;
        
        console.log(a);
        console.log(b);
        console.log(c);

     }
     inner();
}
outer();