let assert = require('assert')

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
const number1 = 15
const number2 = 6
const number3 = 10
const number4 = 11
const teste1 = 'fizzbuzz'
const teste2 = 'fizz'
const teste3 = 'buzz'

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(number1), teste1)
assert.strictEqual(myFizzBuzz(number2), teste2)
assert.strictEqual(myFizzBuzz(number3), teste3)
assert.strictEqual(myFizzBuzz(number4), number4)
assert.strictEqual(myFizzBuzz('number4'), false)