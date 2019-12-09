let assert = require('assert')

function myRemove(arr, item) {
  var ret = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== item) {
      ret.push(arr[i]);
    }
  }

  return ret;
}
const teste1 = [1, 2, 4]
const teste2 = [1, 2, 3, 4]

// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), teste1)
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), teste2)
assert.deepEqual(myRemove([1, 2, 3, 4], 5), teste2)