// function same(arr1, arr2) {
//   // check the length of array are same
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let currentIndex = arr2.indexOf(arr1[i] ** 2);
//     // console.log(currentIndex);

//     if (currentIndex === -1) {
//       return false;
//     }
//     arr2.splice(currentIndex, 1);
//     console.log(arr2);
//   }

//   return true;
// }
// //       n     *     n      = Big O(n*n=n>2) means n squre time complex not to perfect ..

// same([2, 4, 6], [4, 16, 36]);

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let sequence1 = {};
  let sequence2 = {};
  for (let val of arr1) {
    console.log(val);
    sequence1[val] = sequence1[val] + 1 || 1;
  }
  for (let val of arr2) {
    console.log(val);
    sequence2[val] = sequence2[val] + 1 || 1;
  }
  console.log(sequence1);
  console.log(sequence2);
}

same([2, 4, 4, 6, 6], [4, 16, 36, 5, 5]);
