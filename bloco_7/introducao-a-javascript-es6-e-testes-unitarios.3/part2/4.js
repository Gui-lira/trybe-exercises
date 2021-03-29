const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arr, word) => {
    let index = -1;
    for (let iterator = 0; iterator < arr.length; iterator += 1) {
        if (arr[iterator] === word) {
            index = iterator;
        }
     }
     return index;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);