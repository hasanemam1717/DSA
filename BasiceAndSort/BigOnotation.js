function sumOfAll(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}

// console.log(sumOfAll(10));

function sumOfAll(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumOfAll(5));

//1 Ex:// O(1)
// const arr = [10, 20, 30, 40, 50];
// const firstElement = arr[0];
// console.log(firstElement);

//2 Ex-O(n)

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    // console.log(i);
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(findElement(arr, 30));

// 3. O(n^2): Quadratic Time
const arr = [1, 2, 5];
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Out", i);
    console.log("Out index of the number of array", arr[i]);
    // বাইরের লুপ
    for (let j = 0; j < arr.length; j++) {
      console.log("Inside", i);
      console.log("Inside index of the number of array", arr[i]);
      // ভিতরের লুপ
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs(arr);
