const { addNumbers } = require("./add-numbers");

describe("Given the addNumbers function", () => {
  it(`Should sum all the number inside of the length of [9, 23, 10, 3, 8] and response 53`, () => {
    //Arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    //Act
    const output = addNumbers(numbers);
    //Assert
    expect(output).toEqual(expected);
  });

  it(`Should sum all the number inside of the length of [9, 23, -10, 3, 8] and response 33`, () => {
    //Arrange
    const numbers = [9, 23, -10, 3, 8];
    const expected = 33;
    //Act
    const output = addNumbers(numbers);
    //Assert
    expect(output).toEqual(expected);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const numbers = null;
    // Act & Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const numbers = false;
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const numbers = "test";
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, "-57", 53, 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a null inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, null, 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a undefined inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, undefined, 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a boolean inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, true, 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an array inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, [undefined], 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an empty array inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, [], 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an object inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, {}, 14];
    // Act and Assert
    expect(() => addNumbers(numbers)).toThrow(/^Invalid format$/);
  });
});
