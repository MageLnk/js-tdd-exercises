const removeVowels = require("./remove-vowels");

describe(`Given the removeVowels function`, () => {
  it("It should remove Vowels in the word Margarita", () => {
    // Arrange
    const word = "Margarita";
    const expectedWord = "M_rg_r_t_";

    // Act
    const result = removeVowels(word, "_");

    // Assert
    expect(result).toEqual(expectedWord);
  });

  it(`It should return "" if the word is "" }`, () => {
    // Arrange
    const word = "";
    const expectedWord = "";

    // Act
    const result = removeVowels(word, "_");

    // Assert
    expect(result).toEqual(expectedWord);
  });

  it("It should throw an error if the word is an array", () => {
    // Arrange
    const word = [];

    // Act and Assert
    expect(() => removeVowels(word)).toThrow(/^Invalid format$/);
  });

  it("It should throw an error if the word is a number", () => {
    // Arrange
    const word = 5;

    // Act and Assert
    expect(() => removeVowels(word)).toThrow(/^Invalid format$/);
  });
});
