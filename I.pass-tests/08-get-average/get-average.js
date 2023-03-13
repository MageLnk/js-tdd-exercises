// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (mixedArray) => {
  if (Array.isArray(mixedArray) === false) throw new Error("Invalid format");

  const gettingNumbers = mixedArray.filter((result) => typeof result === "number");

  const sumAllNumbers = gettingNumbers.reduce((partialSum, newValue) => partialSum + newValue, 0);

  return sumAllNumbers / gettingNumbers.length;
};

module.exports = { average };
