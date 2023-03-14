const removeVowels = require("../02-remove-vowels/remove-vowels");

const removeVowelsForWords = (words) => words.map((word) => removeVowels(word));

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
