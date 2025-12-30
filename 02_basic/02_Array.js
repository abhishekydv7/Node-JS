const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman" , "Flash" , "Batman"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);

//console.log(marvel_heroes[3][1]);

//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);
//console.log(allHeroes[5]);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread 

console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Holauncle"));
console.log(Array.from("Holauncle"));
console.log(Array.from({name:"hitesh"})); // interesting
