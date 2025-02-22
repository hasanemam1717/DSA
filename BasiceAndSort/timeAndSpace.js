function uniqeName(arr) {
  let uniqeName = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(arr[i]);
    if (!uniqeName.includes(element)) {
      console.log("Hasan Emam Naim");
      uniqeName.push(element);
    }
  }
}

const nameArray = ["Hasan", "Emam", "Naim", "Hasan"];
console.log(uniqeName(nameArray));
