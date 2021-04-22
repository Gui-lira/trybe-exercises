const random = require('./1');

test('exercicio 1', () => {
    random.random100 = jest
    .fn()
    .mockReturnValue(10);
    random.random100();

    expect(random.random100).toHaveBeenCalled()
    expect(random.random100()).toBe(10);
    expect(random.random100).toHaveBeenCalledTimes(2)
})