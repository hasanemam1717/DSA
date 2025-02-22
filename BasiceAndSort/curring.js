// normal function
const add = (a, b) => a + b;
// Curring function
// const add1 = (a) => (b) => a + b;

// similar
// function add1(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// use with discount
const totalPrice = (discount) => (amount) => amount - amount * discount;

// console.log(add(1, 1));
// console.log(add1(1));
const withDiscount = totalPrice(0.3);
console.log(withDiscount(100)); //70
