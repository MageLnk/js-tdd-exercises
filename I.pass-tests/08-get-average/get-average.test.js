const { average } = require("./get-average");

describe(`Given the Average function`, () => {
  test(`Should return 5 of the array [4, "-", 8, 11, "hello", "57", 0, 2] ignoring the strings`, () => {
    // Arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    // Act
    const output = average(numbers);

    // Assert
    expect(output).toEqual(expected);
  });

  test(`Should return 5 of the array [4, "-", 8, 11, "hello", "57", 0, 2, null] ignoring the strings`, () => {
    // Arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2, null];
    const expected = 5;

    // Act
    const output = average(numbers);

    // Assert
    expect(output).toEqual(expected);
  });

  it("Will throw error when received null", () => {
    // Arrange
    const numbers = null;
    // Act & Assert
    expect(() => average(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received boolean", () => {
    // Arrange
    const numbers = false;
    // Act and Assert
    expect(() => average(numbers)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received a string", () => {
    // Arrange
    const numbers = "test";
    // Act and Assert
    expect(() => average(numbers)).toThrow(/^Invalid format$/);
  });
});
