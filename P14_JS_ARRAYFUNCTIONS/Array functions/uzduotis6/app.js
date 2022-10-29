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