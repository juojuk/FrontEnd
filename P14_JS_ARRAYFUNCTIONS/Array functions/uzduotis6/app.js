let numbers = [5,1,7,2,-9,8,2,7,9,4,-5,2,-6,8,-4,6];

// 1
function arrDoubled(numbers){
    let arr = [];
    numbers.forEach(function (number) {
        arr.push(+number * 2);
    });
    return console.log(arr);
};

arrDoubled(numbers);

// 2
function arrMultiplied(numbers, multiplicator){
    let arr = [];
    numbers.forEach(function (number) {
        arr.push(+number * multiplicator);
    });
    return console.log(arr);
};

arrMultiplied(numbers, 3);

// 3
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

  function sumBudgets (budgets){
    let totalBudget = 0;
    for (let item of budgets){
      totalBudget += item.budget;
    }
    console.log(totalBudget);
  }

  // 4
  sumBudgets(budgets)

  function namesOfBudgets(budgets){
    const arrOfNames = budgets.map(function (e){
      return e.name;
    }
    )
    console.log(arrOfNames);
  }

  namesOfBudgets(budgets)


