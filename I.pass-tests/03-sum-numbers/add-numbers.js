const addNumbers = (numbers) => {
  if (Array.isArray(numbers) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "number";
  if (!numbers.every(SearchForAnomalies)) throw new Error("Invalid format");

  return numbers.reduce((partialSum, newValue) => partialSum + newValue, 0);
};

module.exports = { addNumbers };
