function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target
    }
  }
  return -1; // Return -1 if the target is not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(numbers, target);
if (result !== -1) {
  console.log(`Target found at index: ${result}`);
} else {
  console.log("Target not found in the array.");
}
