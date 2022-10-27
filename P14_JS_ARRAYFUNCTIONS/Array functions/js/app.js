let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

// Push ideda i array gala nauja elementa
topSongs[topSongs.length] = "Fortune Song";
topSongs.push("Tie Keliai");
topSongs.push("Zombiai Atrieda");
topSongs.push(true);
console.log(topSongs.push("Candy Shop"));
console.log(`Dainu length: ${topSongs.push("Boruzele")}`);

// Pop returns deleted element
const poppedIncorrectVal = topSongs.pop(); // Boruzele
topSongs.pop(); // Candy Shop
topSongs.pop(); // true
console.log(poppedIncorrectVal);
console.log(topSongs);

let dishesToWash = ['big plater'];
dishesToWash.unshift('large plate'); // Returns array length
console.log(dishesToWash.unshift('small plate'));
dishesToWash.unshift('cereal bowl');
dishesToWash.unshift('mug');
dishesToWash.unshift('dirty spoon');
dishesToWash.unshift('fork', 'knife');

console.log(dishesToWash);

let removedDish = dishesToWash.shift(); // Removes first element of array and returns it
console.log(`${removedDish} was cleaned.`);
console.log(dishesToWash);
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();

console.log(dishesToWash);
console.log('Dishes were cleaned');




// CONCAT
// Joins 2 arrays and creates a new array from them both
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'bruseel sprouts'];
let meats = ['steak', 'chicken breast'];

let veganFood = fruits.concat(veggies);

console.log(fruits.concat(veggies));
console.log(fruits);
console.log(veggies);
console.log(fruits, veggies);
console.log(veganFood);

let allFood = fruits.concat(veggies, meats);
console.log(allFood);





// INCLUDES AND INDEXOF
// Searches for atleast a single occurance
// Include returns a boolean
// IndexOf returns an integer. If nothing is found returns -1.
let ingredients = [
    'Water',
    'Eel',
    'Corn',
    'Flour',
    'Cheese',
    'Shrimp',
    'Brown sugar',
    'Butter'
];

console.log(ingredients.includes('fish')); // False
console.log(ingredients.includes('Shrimp')); // True
console.log(ingredients.includes('sugar')); // False
console.log(ingredients.includes('Water', 3)); // We start searching from Flour
console.log(ingredients.includes('Cheese', 3));

if(ingredients.includes('Flour')) {
    console.log("I am gluten free, I cannot eat that.");
}

console.log(ingredients.indexOf('Eel'));
console.log(ingredients.indexOf('sugar'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('Cheese', 5)); // Search for Cheese from Shrimp
console.log(ingredients.indexOf('Cheese', 3));

// Truthy or Falsy values
if(ingredients.indexOf('Flour') !== -1) {
    console.log("I am gluten free, I cannot eat that.");
}






// REVERSE AND JOIN
// Reverse - Mutates array
// Join - joins all elements into a single string without mutation
let letters = [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R',
];

let randomArrayForReverse = [
    12.3,
    60,
    false
];

console.log(letters);
console.log(letters.reverse()); // Mutates array
console.log(letters);

console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.join('.'));
console.log(letters);

console.log(randomArrayForReverse.join());
console.log(randomArrayForReverse.reverse());
console.log(randomArrayForReverse.join());




// Uzdavinys 1

const exercise1Arr = [];
const resultP = document.querySelector("#result-paragraph");
const arrayItemInput = document.querySelector("#array-item");

function updateParagraph(operation) {
    let appendText = arrayItemInput.value;
    arrayItemInput.value = "";
    operateElement(appendText, operation);
    resultP.textContent = exercise1Arr.join(" ");
    arrayItemInput.focus();
}

function operateElement(ele, operation) {
    switch(operation) {
        case 'push':
            exercise1Arr.push(ele);
            break;
        case 'pop':
            exercise1Arr.pop(ele);
            break;
        case 'unshift':
            exercise1Arr.unshift(ele);
            break;
        case 'shift':
            exercise1Arr.shift(ele);
            break;
    }
}

const pushBtn = document.querySelector('#push')
    .addEventListener('click', function() {
        updateParagraph('push');
    });

const popBtn = document.querySelector('#pop')
    .addEventListener('click', function() {
        updateParagraph('pop');
    });

const unshiftBtn = document.querySelector('#unshift')
    .addEventListener('click', function() {
        updateParagraph('unshift');
    });

const shiftBtn = document.querySelector('#shift')
    .addEventListener('click', function() {
        updateParagraph('shift');
    });

// Uzdavinys 1 DONE




// SLICE
// Creates a new array based on provided indeces range
let animals = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];

let swimmers = animals.slice(0,3); // Includes 0, but excludes 3
console.log(swimmers);
let mammals = animals.slice(2,4);
let reptiles = animals.slice(4); // Go from 4th element till the end

let qudrupeds = animals.slice(-3); // Takes 3 elements from the back
let twoAnimalsFromTheBack = animals.slice(-3,-1);
// Go 3 elements from back (bear), take all and lastly remove last element

let animalCopyViaSlice = animals.slice();

console.log(`animalCopyViaSlice === animals: ${animalCopyViaSlice === animals}`);
console.log(`animalCopyViaSlice == animals: ${animalCopyViaSlice == animals}`);
// animalCopyViaSlice === animals
// d7g48sd4fg5sd1 === sr4g787s4dfg897s4d1 -> They are not equal on terms of type aswell as value



// SPLICE
// Remove, add and update elements in a specified location
// Usually used in the middle of an array
// array.splice(start,deleteCount,[itemArr])
animals.splice(1,0,'octopus'); // Add octopus to 1st position in array and remove 0 items
console.log(animals);
animals.splice(3,2); // Remove 2 items from array counting from 3rd position
console.log(animals);
animals.splice(3,0,'snake','frog'); // Add 2 new items to array from 3rd position and delete 0
console.log(animals);
animals.splice(0,2,'SHARK!','OCTOPUS!');
console.log(animals);
animals.splice(3,2,'orca','grizzly');
console.log(animals);





// SORT
let people = [
    'Mrs. Robinson',
    'Angie',
    'Jolene',
    'Maggie May',
    'Roxanne'
];

let numsSorted = [34,10,10000,67,99];

console.log(people);
people.sort(); // Sorts by charset code so 'R' !== 'r'
console.log(people);

console.log(numsSorted);
numsSorted.sort(); // When we use .sort() on numbers, these numbers are converted to charset codes
console.log(numsSorted);





// REFFERENCE TYPES IN JS
let fruitVal = 'orange'; // Value type
// let colorVal = 'orange';
let colorVal = fruitVal;
fruitVal = 'watermelon';
console.log(fruitVal);
console.log(colorVal);
// colorVal === fruitVal
// 'orange' === 'watermelon'
console.log(colorVal === fruitVal);


// numsReff memoryAddress -> 123456789
let numsReff = [5,6,7,8];
// let otherNumsReff = 123456789;
// otherNumsReff is assigned a memory address of numsReff
let otherNumsReff = numsReff;
numsReff.push(9);
console.log(otherNumsReff);
// 123456789 === 123456789
// otherNumsReff === numsReff
console.log(`otherNumsReff === numsReff: ${otherNumsReff === numsReff}`);









// CONST ARRAYS
// Since in JS we usually want our arrays to stay what they are without changing their intention we need to use const.
// const requires us to keep the same data all over the place
const colorsConstArr = [ // Refference type. colorsConstArr === 1d5fg1s6d58f1g
    'brown',
    'brown'
];

colorsConstArr.push('purple');
console.log(colorsConstArr);
colorsConstArr[0] = 'green';
console.log(colorsConstArr);
colorsConstArr.pop();
console.log(colorsConstArr);

// colorsConstArr = ['blue', 'pink']; // Throws error because we are trying to change physical address to which our variable points





// WORKING WITH NESTED ARRAYS
const animalPairs = [
    ['doe', 'buck'],
    ['doe', ['buck', 'stag']],
    ['ewe', 'ram'],
    ['peahen','peacock']
];

animalPairs[0][1] = 'stag';
console.log(animalPairs[1][1][1]);
console.log(animalPairs[1][1].indexOf('stag'));

// .FOREACH
// .forEach is a syntax sugar to help avoid using keyword function through our whole application. It is quite a bit slower than forOf.
const numbers2 = [20,21,22,23,24,25,26,27];
numbers2.forEach(function(num) {
    console.log(num * 2);
});

numbers2.forEach(num => console.log(num * 2));

function printTriple(n) {
    console.log(n * 3);
}

numbers2.forEach(printTriple);

// MAP()
// Creates a new array based on our callback function
const doubles = numbers2.map(function(elementOfNumbers2) { //elementOfNumbers2 is an element of numbers2
    return elementOfNumbers2 * 2;
});

console.log(numbers2);
console.log(doubles);

const numDetail = numbers2.map(function(n) { // n is just a name for our element
    return {
        value: n,
        isEven: n % 2 === 0
    };
})

const fakeNumDetails = numbers2.map(function() {
    return {
        value: 10,
        isEven: 10 % 2 === 0
    };
})

console.log(numDetail);
console.log(fakeNumDetails);

// FILTER()
// Creates an array with all elements which pass callback test/function
// Main thing to remember is that your function HAS to return boolean
const filteredOddNumbersNA = numbers2.filter(function(n) { 
    return n % 2 === 1
});
const filteredOddNumbers = numbers2.filter(n => n % 2 === 1);
const filteredEvenNumbers = numbers2.filter(n => n % 2 === 0);

console.log(filteredOddNumbersNA);
console.log(filteredOddNumbers);
console.log(filteredEvenNumbers);

// SOME() AND EVERY()
// EVERY returns a boolean 
const words2 = [
    "dog",
    "dig",
    "log",
    "bag",
    "wag",
];

const all3Letters = words2.every(word => word.length === 3);
const allEndInG = words2.every(word => {
    const last = word.length-1;
    return word[last] === 'g';
});

console.log(all3Letters);
console.log(allEndInG);

const someStartWithD = words2.some(word => word[0] === 'd');
console.log(someStartWithD);

