const { largerThanTen } = require("./numbersGreaterThan10");

describe(`Given the largerThanTen function`, () => {
  test("It should get numbers greater than 10 when recieve and array", () => {
    // Arrange
    const numbers = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    // Act
    const output = largerThanTen(numbers);

    // Assert
    expect(output).toEqual(expected);
  });
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
