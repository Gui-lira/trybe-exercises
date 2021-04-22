const numbersFunction = require('./cont');


test('função somar', () => {
    const sum = jest.spyOn(numbersFunction, 'subtrair');
    sum(1,2);
    expect(sum).toHaveBeenCalledTimes(1);
});

test('funçaõ multiplicar', () => {
    numbersFunction.multiplicar = jest.fn().mockReturnValue(10);
    numbersFunction.multiplicar();
    expect(numbersFunction.multiplicar).toHaveBeenCalledTimes(1);
    expect(numbersFunction.multiplicar()).toBe(10);
});

test('função somar', () => {
    numbersFunction.somar = jest.fn().mockImplementation((a,b) => a + b);
    numbersFunction.somar(1,2);

    expect(numbersFunction.somar).toHaveBeenCalledTimes(1);
    expect(numbersFunction.somar).toHaveBeenCalledWith(1,2);
    expect(numbersFunction.somar(1,2)).toBe(3);
});

test('função dividir', () => {
    numbersFunction.dividir = jest
    .fn()
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    expect(numbersFunction.dividir()).toBe(2);

    expect(numbersFunction.dividir()).toBe(5);

    expect(numbersFunction.dividir()).toBe(15);

    expect(numbersFunction.dividir).toHaveBeenCalledTimes(3);

    expect(numbersFunction.dividir).toHaveBeenCalledWith()
    
});

test('função subtrair', () => {
    const subtrair = jest
    .spyOn(numbersFunction, 'subtrair')
    .mockReturnValue(20);

    expect(subtrair()).toBe(20);
    expect(subtrair).toHaveBeenCalledTimes(2);

    numbersFunction.subtrair.mockRestore();

    expect(numbersFunction.subtrair(1,2)).toBe(-1)
})