const functions = require('./4');

jest.mock('./4');

describe('exercicio 4', () => {
    test('primeira função', () => {
        functions.upper.mockImplementation((str) => str.toLowerCase());
        expect(functions.upper('AEIOU')).toBe('aeiou')
    });
    test('segunda função', () => {
        functions.first.mockImplementation((str) => str[str.length - 1]);
        expect(functions.first('aei')).toBe('i');
    });
    test('terceira função', () => {
        functions.concatanation.mockImplementation((a, b, c) => a + b + c);
        expect(functions.concatanation('a', 'b', 'c')).toBe('abc');
    });
});

describe('exercicio 5', () => {
    test('upper', () => {
       
        functions.upper.mockImplementation((str) => str.toLowerCase())
        expect(functions.upper('AEIOU')).toBe('aeiou');
        functions.upper.mockRestore();   
        const upper = jest.spyOn(functions, 'upper');     
        upper('aeio');
        expect(upper('aeio')).toBe('AEIO');
        expect(upper).toHaveBeenCalledTimes(2);
    });
});