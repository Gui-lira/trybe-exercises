const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let count = 0;
    let str = 'aoieu';
  
    for (let index = 0; index < characters.length; index += 1) {
      if (
        str.includes(characters[index])
      ) {
          count += 1
        results.push(count);
      } else {
        results.push(characters[index]);
      }
    }
    return results.join('');
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';

  const assert = require('assert');

  assert.strictEqual(removeVowels(parameter), result)