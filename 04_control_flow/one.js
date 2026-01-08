//if
// const isUserLoggedIn = true
// const temperature = 41

// if( temperature === 41 ) {
//     console.log("less than 50");
// } else {
//     console.log("temp is greater than 50");
// }

// const score = 200

// if(score> 100){
//     let power = "fly"
//     console.log(`User power:  ${power}`);
    
// }

// console.log(`User power: ${power}`);

// <, > , <= , >=, ==, !=, ===,!==

//const balance = 1000

//if (balance > 500) console.log("test") , console.log("test2");  <not recommended>

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}