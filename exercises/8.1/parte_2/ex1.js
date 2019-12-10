const number = 4
const fatorialDeUmNumero = (n) => (n < 2) ? 1 : fatorialDeUmNumero(n - 1) * n
console.log(fatorialDeUmNumero(number))