const add = (word) => {
  if (!word) return 0;

  const numbers = word.match(/-?\d+/g);
  // Expresión regular para obtener los números y separarlos de los caracteres

  const parsedNumbers = numbers.map((num) => parseInt(num, 10));

  const negativeNumbers = parsedNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);

  const ignoringBiggerNumbers = parsedNumbers.filter((num) => num < 1001);

  return ignoringBiggerNumbers.reduce((partialSum, newValue) => partialSum + newValue, 0);
};

module.exports = {
  add,
};
