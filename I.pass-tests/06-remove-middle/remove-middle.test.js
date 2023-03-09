const { removeMiddle } = require("./remove-middle");

describe(`Give the removeMiddle function`, () => {
  test(`Should remove the word of the middle in ["mouse", "giraffe", "queen", "window", "bottle"] 
  we get ["queen"] and the original array change to ["mouse", "giraffe", "window", "bottle"]`, () => {
    //Arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];

    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    //Act
    const output = removeMiddle(words);

    //Assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });

  test(`Should throw an error 'Insert a valid pair array' when recieve a pair array like
  ["mouse", "giraffe", "window", "bottle"]`, () => {
    //Arrange
    const words = ["mouse", "giraffe", "window", "bottle"];

    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Insert a valid odd array$/);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const words = null;
    // Act & Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const words = false;
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const words = "test";
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string inside of a array of numbers", () => {
    // Arrange
    const words = [55, "-57", 53, 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a null inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, null, 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a undefined inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, undefined, 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a boolean inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, true, 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an array inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, [undefined], 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an empty array inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, [], 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an object inside of a array of numbers", () => {
    // Arrange
    const words = [55, 35, {}, 14];
    // Act and Assert
    expect(() => removeMiddle(words)).toThrow(/^Invalid format$/);
  });
});
