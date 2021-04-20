const uppercase = require('./1');

test('teste de callback', (done) => {
    uppercase('aeiou', (str) => {
        expect(str).toBe('AEIOU');
        done();
    })
})