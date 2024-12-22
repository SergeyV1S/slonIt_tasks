function calculateSum(numbers) {
    let totalSum = 0;
    numbers.forEach(number => {
      totalSum += number;
    });
    return totalSum;
  }
  
  let salaries = [10000, 20000, 30000];
  console.log(calculateSum(salaries));