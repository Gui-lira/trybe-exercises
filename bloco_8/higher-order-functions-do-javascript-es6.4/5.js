
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
 let total = names.reduce((sum, name) => {
     let arr = name.split('');
     sum + 0;
     arr.forEach(element => {
         if (element === 'a' || element === 'A') {
             sum += 1
         }
     });
     return sum
 },0);
 return total;
}

assert.deepStrictEqual(containsA(), 20);