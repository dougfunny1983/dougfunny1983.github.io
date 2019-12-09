let assert = require('assert')

function myRemoveWithoutCopy(arr, item) {
  var i;
  var len;

  for (i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
      len--;
    }
  }

  return arr;
}

// implemente seus testes aqui
const teste1 = [1, 2, 4]
const teste2 = [1, 2, 3, 4]
const myList = [1, 2, 3, 4]
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), teste1)
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), teste2)
const newValue = myRemoveWithoutCopy(myList, 3)
assert.notDeepStrictEqual(newValue, teste2)
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), teste2)