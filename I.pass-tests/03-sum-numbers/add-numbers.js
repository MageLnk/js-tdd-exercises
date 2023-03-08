const addNumbers = (numbers) => {
  return numbers.reduce((partialSum, newValue) => partialSum + newValue, 0);
};

module.exports = { addNumbers };
