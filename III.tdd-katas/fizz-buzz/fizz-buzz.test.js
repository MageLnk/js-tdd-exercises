const fizzbuzz = require("./fizz-buzz");

describe("Given the fizzbuzz function", () => {
  it("Will throw error when received boolean", () => {
    // Arrange
    const number = false;
    // Act and Assert
    expect(() => fizzbuzz(number)).toThrow(/^Invalid format$/);
  });

  it("Will throw error when received []", () => {
    // Arrange
    const number = [];
    // Act and Assert
    expect(() => fizzbuzz(number)).toThrow(/^Invalid format$/);
  });

  test("It should prints '1' when the number is 1", () => {
    // Arrange
    const number = 1;
    const expected = "1";

    // Act
    const output = fizzbuzz(number);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should prints '1, 2' when the number is 2", () => {
    // Arrange
    const number = 2;
    const expected = "1, 2";

    // Act
    const output = fizzbuzz(number);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should prints '1, 2, Fizz' when the number is 3", () => {
    // Arrange
    const number = 3;
    const expected = "1, 2, Fizz";

    // Act
    const output = fizzbuzz(number);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should prints '1, 2, Fizz, 4, Buzz' when the number is 5", () => {
    // Arrange
    const number = 5;
    const expected = "1, 2, Fizz, 4, Buzz";

    // Act
    const output = fizzbuzz(number);

    // Assert
    expect(output).toEqual(expected);
  });

  test("It should prints '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz' when the number is 15", () => {
    // Arrange
    const number = 15;
    const expected = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz";

    // Act
    const output = fizzbuzz(number);

    // Assert
    expect(output).toEqual(expected);
  });
});
