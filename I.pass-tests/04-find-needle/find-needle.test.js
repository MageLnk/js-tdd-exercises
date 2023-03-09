const { findTheWord } = require("./find-needle");

describe("Given the findTheWord function", () => {
  test(`Find the word needle in ["house", "train", "slide", "needle", "book"] and 
  response his iterator 3`, () => {
    //Arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    // Act
    const output = findTheWord(words, "needle");

    //Assert
    expect(output).toEqual(expected);
  });

  test("Find the plant", () => {
    //Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    // Act
    const output = findTheWord(words, "plant");

    //Assert
    expect(output).toEqual(expected);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const words = null;
    // Act & Assert
    expect(() => findTheWord(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const words = false;
    // Act and Assert
    expect(() => findTheWord(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const words = "test";
    // Act and Assert
    expect(() => findTheWord(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an array inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, [undefined], 14];
    // Act and Assert
    expect(() => findTheWord(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an empty array inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, [], 14];
    // Act and Assert
    expect(() => findTheWord(words)).toThrow(/^Invalid format$/);
  });
});
