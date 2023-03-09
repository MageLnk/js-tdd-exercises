const getWordLengths = (someWords) => {
  if (Array.isArray(someWords) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "string";
  if (!someWords.every(SearchForAnomalies)) throw new Error("Invalid format");

  return someWords.map((result) => result.length);
};

module.exports = { getWordLengths };
