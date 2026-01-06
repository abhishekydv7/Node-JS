const user = {
    username: "brook",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
    }
}

//user.welcomeMessage()

// const chill = function(){
//     let username = "jimbei"
//     console.log(this.username);
// }
const chill = () => {
    let username = "jimbei"
    console.log(this.username);
}




//chill()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2   
const addTwo = (num1, num2) => (num1 + num2)   // if there are curly braces a return should be mentioned and if () brackets applied, return isn't necessary
 
console.log(addTwo(2, 3));

//5:47

