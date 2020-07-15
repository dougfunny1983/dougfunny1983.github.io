// function tab() {
//   function sum(a, b) {
//     return a + b;
//   }

//   function sub(a, b) {
//     return a - b;
//   }
//   function mult(a, b) {
//     return a * b;
//   }
//   return { sum, sub, mult };
// }

// function tab() {
//   const sum = (a, b) => Number(a + b);
//   const sub = (a, b) => a - b;
//   const mult = (a, b) => a * b;
//   return { sum, sub, mult };
// }

const tab = () => ({
  sum: (a, b) => Number(a + b),
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
});

module.exports = tab;
