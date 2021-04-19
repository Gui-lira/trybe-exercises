const objFunctions = require('./challenges');

describe('testar se são funções', () => {
  it('função decode', () => {
    expect(typeof objFunctions.decode).toBe('function');
  });
  it('função encode', () => {
    expect(typeof objFunctions.encode).toBe('function');
  });
});

describe('testar operações', () => {
  const vogals = 'aeiou';
  const numbers = '12345';
  const notnumbers = '6789';
  const notVogals = 'qwrty';
  it('encode', () => {
    expect(numbers).toBe(objFunctions.encode(vogals));
  });
  it('decode', () => {
    expect(vogals).toBe(objFunctions.decode(numbers));
  });
  it('length encode', () => {
    expect(vogals.length).toBe(objFunctions.encode(vogals).length);
  });
  it('length decode', () => {
    expect(numbers.length).toBe(objFunctions.decode(numbers).length);
  });
  it('n decodifica demais letras', () => {
      expect(notVogals).toBe(objFunctions.encode(notVogals));
  });
  it('n decodifica demais numeros', () => {
      expect(notnumbers).toBe(objFunctions.decode(notnumbers));
  });
});
