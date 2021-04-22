const fecth = require('./6');

test('caso de sucesso', async () => {
    fecth.fecthApi = jest
    .fn()
    .mockResolvedValue('request sucess');

    await expect(fecth.fecthApi()).resolves.toBe('request sucess');
    await expect(fecth.fecthApi).toHaveBeenCalledTimes(1);
});

test('caso de falha', async () => {
    fecth.fecthApi = jest
    .fn()
    .mockRejectedValue('request failed');

    await expect(fecth.fecthApi()).rejects.toBe('request failed');
    await expect(fecth.fecthApi).toHaveBeenCalledTimes(1);
})