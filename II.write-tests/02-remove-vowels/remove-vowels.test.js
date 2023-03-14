const removeVowels = require("./remove-vowels");

describe(`Given the removeVowels function`, () => {
  test("Should remove Vowels in the word Margarita", () => {
    // Arrange
    const word = "Margarita";
    const expectedWord = "M_rg_r_t_";

    // Act
    const result = removeVowels(word);

    // Assert
    expect(result).toEqual(expectedWord);
  });
});
