const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];

const getAnimals = (age) => (
    new Promise ((resolve, reject) => {
        const arr = [];
        Animals.forEach((element) => {
            if (element.age >= age) arr.push(element)
        });
        if (arr.length !== 0) return resolve(arr)
        return reject('não existe animal')
        })
);

// const getAnimals = (age) => {
//     const arr = Animals.filter((element) => element.age >= age);
//     if (arr.length !== 0) return arr;
// }
const getByAge = async (age) => {
    try {const animals = await getAnimals(age);
         return animals;}
         catch (erro) {
             return erro
         }
    // .catch((erro) => erro)
}






  describe('testes da função de idade', () => {
    //   it('testa se é um array', () => {
    //       expect(Array.isArray(getByAge(2))).toBe(true)
    //   });
      it('testa se contem os animais corretos', async () => {
          const elated = await getByAge(2)
          expect.assertions(2);
          expect(elated).toContainEqual({ name: 'Soneca', age: 2, type: 'Dog' })
          expect(elated).toContainEqual({ name: 'Preguiça', age: 5, type: 'Cat' })
      })
      it('testa o erro', () => {
        //   const test = await getByAge(10)
        return  expect(getByAge(10)).resolves.toBe('não existe animal')
      })
  })