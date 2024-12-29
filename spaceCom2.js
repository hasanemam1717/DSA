function space(n) {
  let even = [101];
  for (let i = 0; i < 101; i++) {
    even[i] = 0;
  }
  for (let i = 0; i < 101; i += 2) {
    even[i] = 1;
    // console.log(even, even[i]);
  }
  console.log(even, even[n]);
  if (even[n]) {
    console.log(n, "is an odd number");
  } else {
    console.log(n, "is an even number.");
  }
}

space(101); //101 is an even number.
