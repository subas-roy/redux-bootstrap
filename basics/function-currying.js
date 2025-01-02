//* Currying / Function Curry

//* Normal
// const add = (a, b) => a + b;

//* Curried
// const add = (a) => (b) => a + b;
// const addWithValue = add(10);
// console.log(addWithValue(0));
// console.log(addWithValue(10));
// console.log(addWithValue(20));

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(add(3)); // returns anonymous function

// const totalPrice = (amount, discount) => amount - amount * discount;
const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(300));
