function charCount(str) {
  let char = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toString();
    if (char[c] > 0) {
      char[c]++;
    } else {
      char[c] = 1;
    }
    console.log(c);
  }
  console.log(char);
}

charCount("My name is Hasan Emam");
