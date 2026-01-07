// Immediately Invoked Function Expressions (IIFE)

//basics
(function chai() {
    console.log(`DB CONNECTED`);
    
}) ();

( () => {
    console.log(`DB CONNECTED TWO`);
    
}  )  ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}  )  (kartik)
// normal variable environment and execution thread 
//how js work behind the scene