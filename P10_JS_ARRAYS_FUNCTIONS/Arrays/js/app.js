// Creating arrays
let students = []; // Most common syntax
let students2 = new Array();
let colors = ['red', 'orange', 'green'];
let colors2 = new Array('red', 'orange', 'green');
let lottoNumbers = [19,22,56.80,12,51];
let stuff = [true, 68, 'dog', null, undefined, NaN];
let shopingList = ['cereal', 'cheese', 'ice'];

console.log(colors);
console.log(colors[2]);
console.log(colors.length);
console.log(`Color count: ${colors.length}`);
console.log(`Last lotto number: ${lottoNumbers[lottoNumbers.length]}`);
console.log(`Last lotto number: ${lottoNumbers[lottoNumbers.length-1]}`);


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

// EXERCISE 1 DONE
colors[1] = 'purple';
colors[3] = 'blue';
colors[colors.length] = 'teal';
colors[colors.length] = 'magenta';
let colorLength = colors.length;
colors[colorLength] = 'pink';


// Reading array elements using loops
console.log();
console.log("Looping through elements".toUpperCase());
for (let i = 0; i < colorLength; i++) {
    console.log((colors[i]));
}

for(let color of colors) {
    console.log(color);
}

let colorIndex = 1;
for(let color of colors) {
    console.log(`${colorIndex}. ${color}`);
    colorIndex++;
}

// Mes negalime atnaujinti naudodami foreach, nes tai keičia būsena
// dar nespėjus perskaityti visų reikšmių
// colorIndex = 1;
// for(let color of colors) {
//     color = `${colorIndex}. ${color}`;
//     colorIndex++;
// }

colorIndex = 1;
for(let i = 0; i <= colorLength; i++) {
    colors[i] = `${colorIndex}. ${colors[i]}`;
    colorIndex++;
}

// Mes negalime atnaujinti reikšmių kada naudojame foreach
// net jei duomenų tipai yra struct/number type
let lottoNumAddNo = 1;
for(let lottoNo of lottoNumbers) {
    lottoNo += lottoNumAddNo;
    console.log(lottoNo);
}

lottoNumbers.forEach((item, index, array) => {
    console.log(`a[${index}] = ${item}`);
});


const logArrayElements = (element, index, array) => {
    console.log(`a[${index}] = ${element}`);
};

shoppingList.forEach(logArrayElements);

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['PLay game', 1],
    ['Sleep', 7],
];

console.table(activities);
console.log(activities[0][1]);

activities.forEach(activity => {
    let percentage = ((activity[1]/24)*100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

let players = [
    ['Player1', [9,9,8]],
    ['Player2', [9,8,8]]
];

players.forEach(player => {
    let scoringLabel = player[0];
    player[1].forEach(score => {
        scoringLabel += ` ${score}`;
    });
    console.log(scoringLabel);
});

console.table(players);



