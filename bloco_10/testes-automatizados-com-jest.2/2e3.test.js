const { findUserById,
        getUserName } = require('./2e3');


test('caso de sucesso', () => {
    return getUserName(4)
    .then((user) => {
        expect(user).toBe('Mark' )
    })
});

test('caso de falha', () => {
    return getUserName(13)
    .catch((error) => {
        expect(error).toEqual({ error: 'User with 13 not found.' })
    })
});