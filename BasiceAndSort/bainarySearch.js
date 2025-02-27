function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return the index
    } else if (arr[mid] < target) {
      low = mid + 1; // Search in the right half
    } else {
      high = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 11;
const result = binarySearch(arr, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}
