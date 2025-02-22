function logarithom(n) {
  while (n > 1) {
    console.log(n);
    n = n / 2;
  }
  console.log("Done");
}

// logarithom(10);

function anotherLogarithom(n) {
  if (n <= 1) {
    console.log("Done");
    return;
  }
  console.log(n);
  anotherLogarithom(n / 2);
}

// anotherLogarithom(8);
