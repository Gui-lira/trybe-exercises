
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  let list = [];
  arrays.forEach((item) => item.forEach((subItem) => {
      list.push(subItem)
  }));
  return list
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);