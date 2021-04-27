const obj = require('./4');

test('exercicio 5', () => {
    obj.upper = jest
    .spyOn(obj, 'upper')
    .mockImplementation((str) => str.toLowerCase())
    expect(obj.upper('AEIOU')).toBe('aeiou');
    obj.upper.mockRestore();   
    const upper = jest.spyOn(obj, 'upper');     
    upper('aeio');
    expect(upper('aeio')).toBe('AEIO');
    expect(upper).toHaveBeenCalledTimes(2);
})