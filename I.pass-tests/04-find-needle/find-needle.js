const findTheWord = (words, word) => {
  if (Array.isArray(words) === false) throw new Error("Invalid format");

  const SearchForAnomalies = (CurrenValue) => typeof CurrenValue === "string";
  if (!words.every(SearchForAnomalies)) throw new Error("Invalid format");

  return words.indexOf(word);
};

module.exports = { findTheWord };
