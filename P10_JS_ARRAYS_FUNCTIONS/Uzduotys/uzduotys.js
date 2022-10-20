// EXERCISE 1
let exerciseMovieList = ["Lord of The Rings", "Star Wars", "Green Mile", "RRR", "Samaritan"];

// console.log(exerciseMovieList[0]);
// console.log(exerciseMovieList[1]);
// console.log(exerciseMovieList[2]);
// console.log(exerciseMovieList[3]);
// console.log(exerciseMovieList[4]);

for(let movie of exerciseMovieList) {
    console.log(movie);
}

// EXERCISE 2 DONE
let fruits = ['Apple','Plum'];
fruits[1] = 'Pear';
fruits[fruits.length] = 'Lemon';

console.log(fruits.length);

for (let fruit of fruits){
    console.log(fruit);
}

// EXERCISE 3 DONE
let animals = ['arklys','kiaulė', 'karvė', 'katė', 'šuo', 'triušis', 'pelė'];

console.log(`   For ciklas:`);
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
};

console.log(`   Foreach ciklas:`);
for (let animal of animals){
    console.log(animal);
};

//Užduotis 4
let saldainiai = [];
let parametrai =['Kaina','Pavadinimas','Svoris'];
for(let i = 0; i < 3; i++){
    for(let j = 0; j < parametrai.length; j++){
        saldainiai[i][j] = prompt(`${parametrai[j]}: `);
};
console.log(saldainiai[i]);
};


