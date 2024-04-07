const sumaDosNumeros = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    throw new Error('Ambos argumentos deben ser numeros');

  if (num1 < 0 || num2 < 0)
    throw new Error('Ambos argumentos deben ser positivos');
  return num1 + num2;
};

const esPrimo = (num) => {
  if (num <= 0) throw new Error('El numero debe ser superior a 0');
  if (typeof num !== 'number')
    throw new Error('El argumento debe ser un numero');
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

module.exports = {
  sumaDosNumeros,
  esPrimo,
};
