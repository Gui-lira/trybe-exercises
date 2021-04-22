const random = require('./1');

test('exercicio 1', () => {
    random.random100 = jest
    .fn()
    .mockReturnValue(10);
    random.random100();

    expect(random.random100).toHaveBeenCalled()
    expect(random.random100()).toBe(10);
    expect(random.random100).toHaveBeenCalledTimes(2)
});

test('exercicio 2', () => {
    random.random100 = jest
    .fn()
    .mockImplementation((a,b) => a / b);
    expect(random.random100(2,1)).toBe(2);
    expect(random.random100).toHaveBeenCalled();
});

test('exercicio 3', () => {
    random.random100 = jest
    .fn()
    .mockImplementation((a,b,c) => a * b * c);
    expect(random.random100(2,1,3)).toBe(6);
    expect(random.random100).toHaveBeenCalled();

    random.random100.mockClear();

    random.random100 = jest
    .fn()
    .mockImplementation((a) => 2 * a);
    expect(random.random100(2)).toBe(4);
    expect(random.random100).toHaveBeenCalled()
});