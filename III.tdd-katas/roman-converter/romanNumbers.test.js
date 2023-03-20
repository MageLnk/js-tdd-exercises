const { convertToOldRoman, convertToNewRoman } = require("./romanNumbers");

describe("Given the romanNumbers function", () => {
  test("It should exist", () => {
    // Arrange, act and assert
    expect(typeof convertToOldRoman).toBe("function");
  });

  test("It will throw error when received boolean", () => {
    // Arrange
    const testNumber = false;
    // Act and Assert
    expect(() => convertToOldRoman(testNumber)).toThrow(/^Invalid format$/);
  });

  test("It should return 'II' if the number is 2", () => {
    // Arrange
    const num = 2;

    // Act
    const output = "II";

    // Assert
    expect(convertToOldRoman(num)).toBe(output);
  });

  test("It should return 'IIII' if the number is 4", () => {
    // Arrange
    const num = 4;

    // Act
    const output = "IIII";

    // Assert
    expect(convertToOldRoman(num)).toBe(output);
  });

  test("It should return 'IV' if the number is 4", () => {
    // Arrange
    const num = 4;

    // Act
    const output = "IV";

    // Assert
    expect(convertToNewRoman(num)).toBe(output);
  });

  test("It should return 'LI' if the number is 51", () => {
    // Arrange
    const num = 51;

    // Act
    const output = "LI";

    // Assert
    expect(convertToOldRoman(num)).toBe(output);
  });

  test("It should return 'DCLXVI' if the number is 666", () => {
    // Arrange
    const num = 666;

    // Act
    const output = "DCLXVI";

    // Assert
    expect(convertToOldRoman(num)).toBe(output);
  });

  test("It should return 'MDCLXVI' if the number is 1666", () => {
    // Arrange
    const num = 1666;

    // Act
    const output = "MDCLXVI";

    // Assert
    expect(convertToOldRoman(num)).toBe(output);
  });

  test("It should return 'MDCLXVI' if the number is 2999", () => {
    // Arrange
    const num = 2999;

    // Act
    const output = "MMCMXCIX";

    // Assert
    expect(convertToNewRoman(num)).toBe(output);
  });
});
