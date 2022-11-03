// SOME

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

const names = budgets.map((person) => person.name);
const monies = budgets.map((person) => person.budget);

// 1
const isLessThenZero = monies.some(budget => budget < 0);
console.log(isLessThenZero);

// 2
function belowHundred(budgets){
  const monies = budgets.map((person) => person.budget);
  if (monies.some(budget => budget < 100)){
    const filteredBudgets = monies.filter(budget => budget < 100)
    console.log(filteredBudgets);
  }
  else{
    console.log('All numbers are above 100');
  }
}

belowHundred(budgets);

// 3
function symbolified(budgets){
  const names = budgets.map((person) => person.name);
  if (names.some(name => name.length > 3)){
    const newNames = names.filter(name => name.indexOf('a') != -1)
    if (newNames.length > 0)
      newNames.forEach(function(name, index){
      newNames[index] = name.replace('a','@');
      }
      );
      console.log(newNames);
    };
  };

  symbolified(budgets);

  // 3 Edvino
  function symbolified(arr){
    if(arr.every(n => n.length >= 3)){
      if(arr.some(symbolifiedCondition)){
        let newArr = arr.filter(symbolifiedCondition);
        return newArr.map(function(ele){
          return ele.replace('a','@');
        });
      }
    }
  }
  function symbolifiedCondition(word){
    return word.includes('a');
  }

console.log(symbolifiedCondition(budgets));
