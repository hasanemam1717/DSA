const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // ধরা হচ্ছে i পজিশনেই সবচেয়ে ছোট উপাদান রয়েছে
    let minIndex = i;

    // i এর পর থেকে বাকি অংশে সবচেয়ে ছোট উপাদান খুঁজে বের করা
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // নতুন সবচেয়ে ছোট উপাদানের ইন্ডেক্স
      }
    }

    // অদলবদল (swap) করা
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

// উদাহরণ:
const numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers));
// Output: [11, 12, 22, 25, 64]
