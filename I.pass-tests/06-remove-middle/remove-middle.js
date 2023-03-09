const removeMiddle = (words) => {
  if (Array.isArray(words) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "string";
  if (!words.every(SearchForAnomalies)) throw new Error("Invalid format");

  const checkOdd = (num) => (num % 2 === 0 ? true : false);
  if (checkOdd(words.length)) throw new Error("Insert a valid odd array");

  return words.splice(words.length / 2, 1);
};

module.exports = { removeMiddle };
