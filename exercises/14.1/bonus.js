let assert = require('assert')

function divInteira(pValor1, pValor2) {
  let valor1 = parseFloat(pValor1);
  let valor2 = parseFloat(pValor2);
  let total = parseInt(valor1 / valor2);
  return total
}

function getChange(payable, paid) {
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  let length = coins.length;
  let remaining = paid - payable;
  for (let moeda of coins) {
    let quantidade = divInteira(moeda, remaining)
    console.log(quantidade);
    remaining = remaining % moeda
    if (quantidade > 0) {
      change.push(moeda)
    }

  }

  // for nota in [50, 20, 10, 1]:
  //   quantidade = valorSaque // nota
  //   valorSaque = valorSaque % nota
  //   if quantidade > 0:
  //       print(f'{quantidade} notas de R$ {nota}')
  // // escreva seu código aqui...

  return change;
}

let result = getChange(1, 1); //no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10) }, /^Error: paid value is not enough$/)
