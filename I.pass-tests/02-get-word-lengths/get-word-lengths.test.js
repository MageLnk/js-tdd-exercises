const { getWordLengths } = require("./get-word-lengths");

describe("Given the getWordLength function", () => {
  it(`It should count the length of ['sun', 'potato', 'roundabout', 'pizza'] and response [3, 6, 10, 5]`, () => {
    //Arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
    //Act
    const output = getWordLengths(words);
    //Assert
    expect(output).toEqual(expected);
  });

  it(`It will throw error when received number inside of the array`, () => {
    //Arrange
    const words = ["sun", "potato", 3, "pizza"];
    // Act & Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });

  it(`It will throw error when received {} inside of the array`, () => {
    //Arrange
    const words = ["sun", "potato", {}, "pizza"];
    // Act & Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });

  it(`It will throw error when received [] inside of the array`, () => {
    //Arrange
    const words = ["sun", "potato", [], "pizza"];
    // Act & Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });

  it("It will throw error when received null", () => {
    // Arrange
    const words = null;
    // Act & Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });

  it("It will throw error when received boolean", () => {
    // Arrange
    const words = false;
    // Act and Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });

  it("It will throw error when received a string", () => {
    // Arrange
    const words = "test";
    // Act and Assert
    expect(() => getWordLengths(words)).toThrow(/^Invalid format$/);
  });
});
