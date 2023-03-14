const checkIsVowel = (character) => {
  const bannedWords = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return bannedWords.includes(character);
};

const SearchForAnomalies = (checkWord) => typeof checkWord === "string";

const removeVowels = (word, underLine = "") => {
  if (!SearchForAnomalies(word)) throw new Error("Invalid format");

  const characters = word.split("");

  const result = characters.map((character) => (checkIsVowel(character) ? underLine : character));

  return result.join("");
};

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
