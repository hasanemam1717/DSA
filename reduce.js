const numbers = [1, 2, 3, 3];

const result = numbers.reduce((previousValue, currentValue, index, arr) => {
  console.log(index, arr[index]);
  //   console.log("Previous Value :", previousValue);
  //   console.log("Current Value :", currentValue);
  return previousValue + currentValue;
}, 1);

console.log(result);