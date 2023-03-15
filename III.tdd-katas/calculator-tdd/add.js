const add = (word) => {
  if (!word) return 0;

  const numbers = word.match(/-?\d+/g) || [];
  // Expresión regular para obtener los números

  const transformToNumers = numbers.map((num) => +num);
  //const parsedNumbers = numbers.map((num) => parseInt(num, 10)); // Será mejor parseInt?

  const negativeNumbers = transformToNumers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);

  const ignoringBiggerNumbers = transformToNumers.filter((num) => num < 1001);

  const sumNumbers = ignoringBiggerNumbers.reduce((partialSum, newValue) => partialSum + newValue, 0);

  return sumNumbers;
};

module.exports = {
  add,
};
