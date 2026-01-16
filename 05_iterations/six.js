const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)
// //const newNums = myNums.filter( (num) => {return num>4})
// console.log(newNums);

// const newNums = []

// myNums.forEach((nums) => {
//     if(nums >4){
//         newNums.push(nums)
//     }
// })

// console.log(newNums);
const movies = [
    { title: "Inception", genre: "Sci-Fi", release: 2010, rating: 8.8 },
    { title: "Interstellar", genre: "Sci-Fi", release: 2014, rating: 8.6 },
    { title: "The Dark Knight", genre: "Action", release: 2008, rating: 9.0 },
    { title: "Parasite", genre: "Drama", release: 2019, rating: 8.6 },
    { title: "Dangal", genre: "Sports", release: 2016, rating: 8.3 },
    { title: "3 Idiots", genre: "Comedy", release: 2009, rating: 8.4 },
    { title: "Avengers Endgame", genre: "Action", release: 2019, rating: 8.4 }
];


let userBooks = movies.filter( (bk) => bk.genre === 'Action')

userBooks = movies.filter( (bk) => { return bk.release>=2009})
console.log(userBooks);
