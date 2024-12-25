function same(arr1, arr2) {
  // check the length of array are same
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    // console.log(currentIndex);

    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
    console.log(arr2);
  }

  return true;
}

same([2, 4, 6], [4, 16, 36]);
