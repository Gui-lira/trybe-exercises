const api = require('./bonus');



//   global.fetch = jest.fn(() =>
//    Promise.resolve({
//        json: () => 
//         Promise.resolve(value)
//    }));

test('requisição api', async () => {
    await expect(api.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.')
})