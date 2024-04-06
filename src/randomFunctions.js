const sumaDosNumeros = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    throw new Error('Ambos argumentos deben ser numeros');

  return num1 + num2;
};

module.exports = {
  sumaDosNumeros,
};
