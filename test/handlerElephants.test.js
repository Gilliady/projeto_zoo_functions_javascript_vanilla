const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('handlerElephants is a function', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('if dont recive any param return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('passed something different of a string as a param', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('passed some independent information', () => {
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('location')).toBe('NW');
  });
  it('uses computeData() correctyly', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('abublé')).toBeNull();
  });
});
