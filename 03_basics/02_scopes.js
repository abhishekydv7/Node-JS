// let a = 200
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30

//     console.log("INNER: ", a);
    
// }

// //console.log(a);
// //console.log(b);
// //console.log(c) 

// console.log(a);

function one(){
    const username = "abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
    
    two()

}
one()