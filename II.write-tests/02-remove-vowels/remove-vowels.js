const removeVowels = (word) => {
  const characters = word.split("");

  const result = characters.map((character) => {
    if (character === "a" || character === "o" || character === "i" || character === "e" || character === "u") {
      return "_";
    } else {
      return character;
    }
  });

  return result.join("");
};

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
