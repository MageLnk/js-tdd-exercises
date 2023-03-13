const secondLargest = (numbers) => {
  if (Array.isArray(numbers) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "number";
  if (!numbers.every(SearchForAnomalies)) throw new Error("Invalid format");

  const sortArray = numbers.sort((a, b) => a - b);

  return sortArray[sortArray.length - 2];
};

module.exports = { secondLargest };
