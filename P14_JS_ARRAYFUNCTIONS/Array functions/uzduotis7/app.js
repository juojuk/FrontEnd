//pirmai uzduociai
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];


//antra uzduotis
const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

// 1

function isPersonInArray (){
  const arrOfPersons = budgets.map(e => e.name);
  let person = prompt("Please enter your name");
  if (arrOfPersons.includes(person)){
    switch (person[person.length - 1] === 's') {
      case true:
        alert('Welcome Mr. '+person);
        break;
      case false:
        alert ('Welcome Miss. '+person);
    }
  }
  else {
    alert('Unfortunately, Name is not in our list.');
  }
}

isPersonInArray ()

// 2

function arrCountTwos(numbers){
  const arrOfTwos = numbers.filter(twos => twos === 2)
  return console.log(arrOfTwos.length);
}

arrCountTwos(numbers);
