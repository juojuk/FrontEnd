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

// //Užduotis 3.1
// let saldainiai = new Array[3,3];
// let parametrai =['Kaina','Pavadinimas','Svoris'];
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < parametrai.length; j++){
//         saldainiai[i][j] = prompt(`${parametrai[j]}: `);
// };
// console.log(`${i} ${saldainiai[i]}`);
// };

//Užduotis 4

// function register(){
//     let name = prompt("Iveskite vardą:");
//     let suname = prompt("Iveskite pavardę:");
//     let age = prompt("Iveskite amžių:");
//     let email = prompt("Iveskite el.paštą:");

//     console.log(`name:${name}`);
//     console.log(`suname:${suname}`);
//     console.log(`age:${age}`);
//     console.log(`email:${email}`);

// }

// register();

//Užduotis 5

// function IsAdult(age){
//     if(age>=18){
//         alert("Sveikiname isigijus energetin")
//     }
//     else {
//         let isApproved = confirm("(Tevams)Ar duodate leidimą?");
//         if(isApproved){
//             alert("Sveikiname įsigijus")
//         }
//         else{
//             alert("Atsiprašome, bet neparduodame")
//         }
//     }
// }

//Užduotis 6
//Persirašykite praeitą funkciją
// function IsAdult(age){
//     // typeof age === NaN;
//     age >= 18
//         ? alert("Sveikiname isigijus energetin")
//         : confirm("(Tevams)Ar duodate leidimą?") === true
//             ? alert("Sveikiname isigijus energetin")
//             : alert("Atsiprašome, bet neparduodame");
// }

//Užduotis 6.1
//Parašykite funkciją arKeliamiejiMetai(metai). Keliamieji metai yra tie metai, kuriuos padavus jie turėtų dalintis
//iš 4 ir 100, ir 400. Visi kiti metai nėra keliamieji

function arKeliamiejiMetai(metai){
    return (year % 100===0 && year % 400===0 && year % 4 === 0);
}

//Užduotis 6.2
//Parašykite 2 funkcijas, kurios mokėtų konvertuoti celsijus į farenheitus ir atvirkščiai C=5/9(F-32)

// function fToC(farenheits){
//     let fToCelsius = 5 / 9 * (farenheits - 32);
//     console.log(`${farenheits}F to ${fToCelsius}C`);
// }

// function ctoF(celsius){
//     let cToFarenheit = celsius * 9 / 5 + 32
//     console.log(`${celsius}C to ${cToFarenheit}F`);
// }


//Užduotis 6.3
//Parašykite funkciją isPasswordValid(username, password, kuri validuotų ar slaptažodis įvestas teisingame formate.
//Programa paprašo į Prompt įvesti username ir slaptažodį. Slaptažodžio reikalavimai:
// Bent 8 character ilgio
// Privalo neturėti tarpų
// Privalo nebūti vienodas su username)

//Užduotis 6.4
//Parašykite funkciją, kuri priima array skaičių ir grąžina jų vidurkį

//Užduotis 6.5
//Parašykite funkciją, kuri grąžintų atsitiktinę kortą iš kortų kaladės.
//Kortų reikšmės: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
//Kortų rūšys: Clubs, spades, hearts, diamonds
//Grąžinta reikšmė turėtų būti suformatuota "You drew: King of Hearts"

//Užduotis 9
//Paverskite žemiau pavaizduotas funkcijas į arrow funkcijas:
// let show = function(){console.log('Anonymous function');};
// let add = function (a,b){return a + b;};
//Sintaksė 
//const getData = (param1, param2) => console.log(param1, param2);





