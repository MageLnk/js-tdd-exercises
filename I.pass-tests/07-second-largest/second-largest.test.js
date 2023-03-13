const { secondLargest } = require("./second-largest");

describe(`Give the secondLargest function`, () => {
  test(`Should return the second biggest number of the [2, 0, 23, 0, 57, 1, 230] that is 57`, () => {
    //Arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    const secondBiggestNumber = 57;

    //Act
    const output = secondLargest(numbers);

    //Assert
    expect(output).toEqual(secondBiggestNumber);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const numbers = null;
    // Act & Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const numbers = false;
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const numbers = "test";
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, "-57", 53, 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a null inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, null, 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a undefined inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, undefined, 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a boolean inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, true, 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an array inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, [undefined], 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an empty array inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, [], 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received an object inside of a array of numbers", () => {
    // Arrange
    const numbers = [55, 35, {}, 14];
    // Act and Assert
    expect(() => secondLargest(numbers)).toThrow(/^Invalid format$/);
  });
});
