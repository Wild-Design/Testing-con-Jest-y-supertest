const randomFunctions = require('../src/randomFunctions');

const { sumaDosNumeros, esPrimo } = randomFunctions;

describe('Funcion sumaDosNumeros', () => {
  test('Debe retornar la suma de dos numeros positivos correctamente', () => {
    expect(sumaDosNumeros(5, 10)).toBe(15);
  });
  test('Debería arrojar un error si alguno de los argumentos no es un numero', () => {
    expect(() => sumaDosNumeros('2', 3)).toThrow(
      'Ambos argumentos deben ser numeros'
    );
    expect(() => sumaDosNumeros(2, '3')).toThrow(
      'Ambos argumentos deben ser numeros'
    );
  });
  test('Debería arrojar un error si alguno de los argumentos es negativo', () => {
    expect(() => sumaDosNumeros(-2, 9)).toThrow(
      'Ambos argumentos deben ser positivos'
    );
    expect(() => sumaDosNumeros(2, -9)).toThrow(
      'Ambos argumentos deben ser positivos'
    );
  });
});

describe('Función esPrimo', () => {
  test('Debe retornar true si el numero es primo', () => {
    const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    for (const primo of primos) {
      expect(esPrimo(primo)).toBe(true);
    }
  });
  test('Debería arrojar un error si el numero recivido es 0 o menor', () => {
    expect(() => esPrimo(0)).toThrow('El numero debe ser superior a 0');
  });
  test('Debería arrojar un error si el argumento no es un numero', () => {
    expect(() => esPrimo('Esto no es un numero')).toThrow(
      'El argumento debe ser un numero'
    );
  });
  test('Debería retornar false si el numero no es primo', () => {
    const noPrimos = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];
    for (const noPrimo of noPrimos) {
      expect(esPrimo(noPrimo)).toBe(false);
    }
  });
});
