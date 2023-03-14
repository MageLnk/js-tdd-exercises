const removeVowelsForWords = require("./remove-vowels-in-array");

describe(`Given the removeVowelsForWords function`, () => {
  it("it remove vowels from all words in array", () => {
    // Arrange
    const word = ["Irina", "Etza", "Daniel"];
    const expectedWord = ["rn", "tz", "Dnl"];

    // Act
    const result = removeVowelsForWords(word);

    // Assert
    expect(result).toEqual(expectedWord);
  });
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
