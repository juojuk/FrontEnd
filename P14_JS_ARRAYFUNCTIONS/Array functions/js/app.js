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