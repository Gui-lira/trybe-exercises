const searchEmployee = require('./function');

describe('testando emplementações', () => {
    it('erro na id', () => {
        expect(() => searchEmployee('','lastname')).toThrowError(new Error('ID não identificada'))
    });
    it('erro na especificação', () => {
        expect(() => searchEmployee('1256-4','')).toThrowError(new Error('Informação indisponível'))
    });
    it('retornar opções solicitadas', () => {
        expect(searchEmployee('8579-6','firstName')).toBe('Ana')
    })
})