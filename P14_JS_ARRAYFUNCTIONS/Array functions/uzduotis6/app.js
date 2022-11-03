let numbers = [5,1,7,2,-9,8,2,7,9,4,-5,2,-6,8,-4,6];

// 1
function arrDoubled(numbers){
    let arr = [];
    numbers.forEach(function (number) {
        arr.push(+number * 2);
    });
    return console.log(arr);
};

// 1 Edvino
function arrDoubled(arr){
  return arr.map(function(arrEle){
    // We return value to an array that is STILL in progress of being built
    return arrEle * 2;
  });
}

arrDoubled(numbers);

// 2
function arrMultiplied(numbers, multiplicator){
    let arr = [];
    numbers.forEach(function (number) {
        arr.push(+number * multiplicator);
    });
    return console.log(arr);
};

// 2 Edvino
function arrMultiplied(arr, multiplier){
  return arr.map(arrEle => arrEle * multiplier);
}


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

  // 4 Edvino
  function getBudgetPeople(budgetErr){
    return budgetErr.map(ele => ele.name);
  }

  // 4 klasės gražinimas
  // function getBudgetPeople(budgetErr){
  //   return budgetErr.map(ele => {
  //     return {
  //       name: ele.name
  //     }
  //   });
  // }


  namesOfBudgets(budgets)


