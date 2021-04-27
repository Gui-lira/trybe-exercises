const assert = require('assert');

const sum = (...arr) => {
if (arr.length === 0) {
    return 0
}
return arr.reduce((acumlator, item) => acumlator + item);
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);