const sum = require('./sum');
const remove = require('./myRemove');
const withoutCopy = require('./removeWithoutCopy');
const fizz = require('./myFizzBum');

describe('1', () => {
    it('vai receber 5 e 8 e retornar 13',() => {
        expect(13).toEqual(sum(5,8))
    });
    it('vai recer [1,2,3,4,5,6] e 3 e retornar [1,2,4,5,6]',() => {
        expect([1,2,4,5,6]).toEqual(remove([1,2,3,4,5,6],3))
    })
});

describe('3', () => {
    it('[1, 2, 3, 4], 3 === [1,2,4]', () => {
        expect([1,2,4]).toEqual(withoutCopy([1,2,3,4],3))
    })
    it('[1, 2, 3, 4], 3 !== [1,2,3,4]', () => {
        expect([1,2,3,4]).not.toEqual(withoutCopy([1,2,3,4],3))
    })
    it('array sofreu alterações', () => {
        const arr = [1,2,3];
        withoutCopy(arr,3);
        expect(arr).toEqual([1,2])
    })
    it('[1,2,3,4],5 === [1,2,3,4]', () => {
        expect([1,2,3,4]).toEqual(withoutCopy([1,2,3,4],5))
    })
});

describe('4', () => {
    it('15 devole fiizzbuzz', () => {
        expect('fizzbuzz').toEqual(fizz(15))
    })
    it('9 devolve fizz', () => {
        expect('fizz').toEqual(fizz(9))
    })
    it('10 devolve buzz', () => {
        expect('buzz').toEqual(fizz(10))
    })
    it('2 devolve 2', () => {
        expect(2).toEqual(fizz(2))
    })
    it('"a" devolve false', () => {
        expect(false).toEqual(fizz('a'))
    }) 
});

describe('5', () => {
    const obj1 = {
        title: 'My Title',
        description: 'My Description',
      };
    const obj2 = {
        title: 'My Title',
        description: 'My Description',        
      }
    it('dvem ser iguais', () => {
        expect(obj1).toEqual(obj2)
    })
})


