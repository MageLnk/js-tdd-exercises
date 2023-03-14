const removeVowels = require("../02-remove-vowels/remove-vowels");

const removeUnderline = (word) => {
  const characters = word.split("");

  const result = characters.map((character) => (character === "_" ? "" : character));

  return result.join("");
};

const removeVowelsForWords = (words) => {
  //const characters = words.split("");
  const result = words.map((word) => removeUnderline(removeVowels(word)));

  return result;
};

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
