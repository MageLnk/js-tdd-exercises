const addOne = (numbers) => {
  if (Array.isArray(numbers) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "number";
  if (!numbers.every(SearchForAnomalies)) throw new Error("Invalid format");

  return numbers.map((result) => result + 1);
};

module.exports = {
  addOne,
};
