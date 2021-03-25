const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (arr) => {
    let middle = parseInt(arr.length/2);
    let returned = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (index === middle) {
            returned.push(arr[index]);
            arr.splice(index,1)
        }
    }
    return returned
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);