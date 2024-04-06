const randomFunctions = require('../src/randomFunctions');

const { sumaDosNumeros } = randomFunctions;

describe('Funcion sumaDosNumeros', () => {
  test('Debe retornar la suma de dos numeros positivos correctamente', () => {
    expect(sumaDosNumeros(5, 10)).toBe(15);
  });
  test('Debería arrojar un error si alguno de los argumentos no es un numero', () => {
    expect(sumaDosNumeros('2', 3)).toThrow(
      new Error('Ambos argumentos deben ser numeros')
    );
    expect(sumaDosNumeros(2, '3')).toThrow(
      new Error('Ambos argumentos deben ser numeros')
    );
  });
  test('Debería arrojar un error si alguno de los argumentos es negativo', () => {
    expect(sumaDosNumeros(-2, 9)).toThrow(
      'Ambos argumentos deben ser positivos'
    );
    expect(sumaDosNumeros(2, -9)).toThrow(
      'Ambos argumentos deben ser positivos'
    );
  });
});
