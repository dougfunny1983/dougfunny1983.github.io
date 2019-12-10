const assert = require('assert')

class Dog {
    constructor(name) {
        this.name = ""
    }
}

let dog = new Dog("Dog!!!")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog instanceof Dog)
assert.equal(dog.name, "")
dog.name = "Peter"
assert.equal(dog.name, "Peter")