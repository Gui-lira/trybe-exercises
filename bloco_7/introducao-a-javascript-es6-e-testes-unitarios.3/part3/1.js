const greetPeople = (people) => {
    let list = [];
  
    for (const person in people) {
      list.push(`Hello ${people[person]}`)
    }
    return list
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  
  const assert = require('assert')

  assert.deepStrictEqual(greetPeople(parameter), result)